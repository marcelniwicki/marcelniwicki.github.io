<script>
import Header from './Header.vue'
import Item from './Item.vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { collection, getDocs, query, setDoc, where, doc } from 'firebase/firestore';
import db from "../firebaseInit.js";

export default {
    components: { Header, Item },

    data() {
        const store = useStore();
        return {
            userEmail: "",
            cartItems: [],
            itemIds: {},
            store: store,
            router: useRouter(),
            user: store.getters.user.loggedIn,
        }
    },

    methods: {

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
            this.cartItems = cart;
            this.itemIds = itemIds;
            console.log(itemIds)
            console.log(cart);
        },

        async order() {
            const userCarts = collection(db, "user-carts");
            let cartRef = await doc(userCarts, "user-carts-" + this.store.getters.user.data.email);
            await setDoc(
                cartRef, 
                {
                    user_email: this.store.getters.user.data.email,
                    items: []
                }
            );
            this.router.push("/");
        },
    },

    watch: {
        userEmail: async function(val, o) {
            await this.getUser();
            await this.getUserCart();
        } 
    }
}
</script>

<template>
    <h2 hidden>{{ getUser() }}</h2>
    <div class="row">
        <form action="/">
            <div class="col-lg-6">

            </div>
            <div class="col-lg-6">

            </div>
        </form>
    </div>
    <div class="order-main">
        <div class="d-flex profile-cart">
            <div class="d-flex order-container">
                <div class="d-block cart-item" v-for="cartItem in cartItems">
                    <Item :id="cartItem.item_id" :name="itemIds[cartItem.item_id].name" :price="itemIds[cartItem.item_id].price" :imageLink="itemIds[cartItem.item_id].image_link" />
                    <h3 class="lato-red">Shop: {{ cartItem.shop }}</h3>
                    <h3 class="lato-red">Size: {{ cartItem.size }}</h3>
                </div>
            </div>
        </div>
        <div class="input-form">
            <form action="/" @submit.prevent="order">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">Full name</span>
                    <input type="text" required class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">City</span>
                    <input type="text" required class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">Street</span>
                    <input type="text" required class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">House, apartment</span>
                    <input type="text" required class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                </div>
                <button class="buy-button btn btn-outline-danger btn-lg">Order</button> 
            </form>
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
    .order-container {
        margin: 0 auto 0 auto;
        flex-wrap: wrap;
    }
    .input-form {
        max-width: 500px;
        margin: 0 auto 0 auto;
        text-align: center;
    }
</style>
