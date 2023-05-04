<script>
import Header from './Header.vue'
import Item from './Item.vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { collection, getDocs, query, setDoc, where, doc } from 'firebase/firestore';
import db from "../firebaseInit.js"

export default {
    components: { Header, Item },

    data() {
        return {
            userEmail: "",
            cartItems: [],
            total: 0,
            itemIds: {},
            store: useStore(),
            router: useRouter(),
        }
    },

    watch: {
        userEmail: function(val, oldval) {
            if (val != "") {
                this.getUserCart();
            }
        }
    },

    methods: {

        async logout() {
            await this.store.dispatch('logOut');
            this.router.push('/');
        },

        getUser() {
            if ( this.store.getters.user.loggedIn ) {
                this.userEmail = this.store.getters.user.data.email;
                return this.store.getters.user.data.email;
            }
            return "";
        },

        async getUserCart() {
            this.cartItems = [];
            const cartColl = collection(db, "user-carts");
            const q = query(cartColl, where("user_email", "==", this.userEmail));
            const querySnapshot = await getDocs(q);
            let cart;
            querySnapshot.forEach(doc => {
                let data = doc.data();
                cart = data.items;
            });
            if (cart != undefined) {
                if (cart.length > 0) {
                    await this.fillCart(cart);
                }
            }
        },

        async fillCart(cart) {
            let itemIds = {};
            const itemColl = collection(db, "items");
            const q = query(itemColl, where("id", "in", cart.map((n) => {return parseInt(n.item_id, 10)})));
            ;
            (await getDocs(q)).forEach(doc => {
                let data = doc.data();
                itemIds[data.id] = data;
            });
            this.calculateTotal(cart, itemIds);
            this.cartItems = cart;
            this.itemIds = itemIds;
            console.log(itemIds)
            console.log(cart);
        },

        calculateTotal(cart, itemIds) {
            cart.forEach(item => {
                this.total += parseFloat(itemIds[item.item_id].price);
            });
        },

        async emptyCart() {
            const userCarts = collection(db, "user-carts");
            let cartRef = await doc(userCarts, "user-carts-" + this.store.getters.user.data.email);
            await setDoc(
                cartRef, 
                {
                    user_email: this.store.getters.user.data.email,
                    items: []
                }
            );
            this.getUserCart();
            this.total = 0;
        },
    },

    mounted() {
        if ( !this.store.getters.user.loggedIn ) {
            //this.router.push( { path: "login" } );
        }
    },
}
</script>

<template>
    <Header />
    <div class="profile-container">
        <div class="row">
            <div class="col-lg-3">
                <div class="profile-info">
                    <h2 class="lato-red">You're logged in as</h2>
                    <h3 v-on:change="getUserCart();" class="lato-red">{{ getUser() }}</h3>
                    <a class="btn btn-outline-danger btn-lg lato-red" v-on:click="this.logout()" href="/">Log out</a>
                </div>
            </div>
            <div class="col-lg-9 profile-right">
                <h2 class="lato-red">Your cart</h2>
                <div class="d-flex profile-cart">
                    <div class="d-block cart-item" v-for="cartItem in cartItems">
                        <Item :id="cartItem.item_id" :name="itemIds[cartItem.item_id].name" :price="itemIds[cartItem.item_id].price" :imageLink="itemIds[cartItem.item_id].image_link" />
                        <h3 class="lato-red">Shop: {{ cartItem.shop }}</h3>
                        <h3 class="lato-red">Size: {{ cartItem.size }}</h3>
                    </div>
                </div>
                <h3 class="lato-red">Total: {{ total }} zł</h3>
                <div class="buttons-container" v-if="Object.keys(cartItems).length > 0">
                    <a class="btn btn-outline-danger btn-lg" href="/order">Buy all</a>
                    <button @click="this.emptyCart();" class="btn btn-outline-danger btn-lg">Empty cart</button>
                </div>
                <div v-else>
                    <h3 class="lato-red">Your cart is empty!</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .lato-red {
        font-family: 'Lato', sans-serif;
        color: rgb(98, 25, 25);
    }
    .profile-container {
        margin: 10px 100px 0 100px;
    }
    .profile-info {
        text-align: center;
    }
    .profile-info > * {
        margin: 7px 0 7px 0;
    }
    .profile-right {
        text-align: center;
    }
    .profile-cart {
        flex-wrap: wrap;
    }
    .buttons-container > * {
        margin: 0 5px 0 5px;
    }
    .cart-item {
        min-width: 250px;
        min-height: 330px;
        max-width: 45vh;
        max-height: 60vh;
        margin: 5px auto 15px auto;
    }
</style>
