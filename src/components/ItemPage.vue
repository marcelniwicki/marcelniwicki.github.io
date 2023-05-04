<script>
import db from '../firebaseInit.js';
import { collection, query, where, getDocs, orderBy, limit, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import Header from './Header.vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    components: { Header },

    data() {
        return {
            availableSizes: {},
            item: {"name": ""},
            size: "",
            shop: "",
            reviews: [],
            reviewScore: 0,
            store: useStore(),
            router: useRouter(),
        }
    },

    methods: {
        async getAvailable() {
            this.availableSizes = [];
            const itemsAvailable = collection(db, "items-available");
            const q = query(itemsAvailable, where("item_id", "==", this.item.id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.sizes.forEach(size => {
                    this.availableSizes[size] = [];
                });
            });
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                data.sizes.forEach(size => {
                    this.availableSizes[size].push(data.shop_name);
                });
            });
        },


        ShowMap() {
    var mymap = L.map('mymap').setView([0, 0], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    }).addTo(mymap);
    
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    

    function showPosition(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      mymap.setView([latitude, longitude], 13);
      L.marker([latitude, longitude]).addTo(mymap);
    }},

        async getItem() {
            this.item = {"name": ""};
            const items = collection(db, "items");
            const q = query(items, where("id", "==", Number.parseInt(this.$route.params.item_id)));
            const querySnapshot = await getDocs(q);
            let item, id;
            querySnapshot.forEach(doc => {
                id = doc.id;
                item = doc.data();
            });
            this.itemRef = id;
            this.item = item;
            await this.loadReviews();
        },

        async addToCart() {
            if (
                this.size == "" || this.shop == "" ||
                !this.store.getters.user.loggedIn
            ) {
                navigator.vibrate(250);
                window.alert("Unable to add product");
                return ;
            }

            const userCarts = collection(db, "user-carts");
            let cartRef = doc(userCarts, "user-carts-" + this.store.getters.user.data.email);
            let cartData = (await getDoc(cartRef)).data();
            if (cartData == undefined) {
                let newCart = doc(collection(db, "user-carts"), "user-carts-" + this.store.getters.user.data.email) 
                await setDoc(newCart, {
                    user_email: this.store.getters.user.data.email,
                    items: []
                });
                cartData = (await getDoc(cartRef)).data();
            }
            cartData.items.push({
                size: this.size,
                shop: this.shop,
                item_id: this.item.id
            });
            await setDoc(doc(collection(db, "user-carts"), "user-carts-" + this.store.getters.user.data.email), cartData);
            this.router.push("/");
        },

        async loadReviews() {
            this.reviews = [];
            const reviews = await getDocs(query(collection(db, "item-reviews"), where("item_id", "==", this.item.id)));
            reviews.forEach(review => {
                let data = review.data();
                this.reviews.push(data);
            });
        },

        async leaveReview() {
            const reviewRef = doc(collection(db, "item-reviews"), "item-reviews-" + this.store.getters.user.data.email + "-" + this.item.id);
            await setDoc(reviewRef, {
                email: this.store.getters.user.data.email,
                score: this.reviewScore,
                item_id: this.item.id
            });
            await this.loadReviews();
        },

        async deleteReview() {
            const reviewRef = doc(collection(db, "item-reviews"), "item-reviews-" + this.store.getters.user.data.email + "-" + this.item.id);
            deleteDoc(reviewRef);
            await this.loadReviews();
        },

        async share() {
            navigator.share({
                url: "https://marcelniwicki.github.io/item/" + this.item.id,
                text: "Hey! Look at these awesome sneakers i found!",
                title: "Share"
            });
        }
    },

    

    async mounted() {
        await this.getItem();
        await this.getAvailable();
        this.ShowMap();
    }

}
</script>

<template>
    <Header />
    <div class="item-page-main">
        <div class="row">
            <div class="col-lg-4">
                <img class="item-info-img" v-bind:src="item.image_link" alt="PIGNASIUOGSR">
            </div>
            <div class="col-lg-8">
                <div class="item-info">
                    <h2 class="lato-red item-info-name">{{ item.name }}</h2>
                    <div class="row">
                        <div class="col-lg-6">
                            <h3 class="lato-red item-info-parameter">Use: {{ item.use }}</h3>
                            <h3 class="lato-red item-info-parameter">Color: {{ item.color }}</h3>
                            <h3 class="lato-red item-info-parameter">Size: 
                                <select v-model="size" id="available-sizes" class="lato-red item-info-select custom-select">
                                    <option v-for="sizeOption in Object.keys(availableSizes)">{{ sizeOption }}</option>
                                </select>
                            </h3>
                            <h3 class="lato-red item-info-parameter">Available in: 
                                <select v-model="shop" id="available-shops" class="lato-red item-info-select custom-select">
                                    <option v-for="shopOption in availableSizes[size]">{{ shopOption }}</option>
                                </select>
                            </h3>
                            <h3 class="lato-red">{{ item.price }} zł</h3>
                        </div>
                        <div class="col-lg-6">
                            <p class="lato-red description">{{ item.description }}</p>
                        </div>
                    </div>
                    
                    <div class="buttons-container">
                        <button v-on:click="this.addToCart()" class="btn btn-outline-danger btn-large">Add to cart</button>
                        <button v-on:click="share" class="btn btn-outline-danger btn-large">Share</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div v-if="this.store.getters.user.loggedIn" class="leave-review-container">
                        <h3 class="lato-red">Leave a review: {{ reviewScore }}</h3>
                        <input type="range" class="form-range" v-model="reviewScore" min="0" max="10" id="customRange2">
                        <button v-on:click="leaveReview" class="r-button btn btn-outline-danger">Submit</button>
                        <button v-on:click="deleteReview" class="r-button btn btn-outline-danger">Delete your review</button>
                    </div> 
                </div>
                <div class="col-lg-9">
                    <div class="reviews-container">
                        <div v-for="review in reviews" class="review">
                            <h4 class="lato-red">Review by {{ review.email }}</h4>
                            <h4 class="lato-red">Score: {{ review.score }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="centered"><h2>Find Your location</h2>
<div id="mymap"></div></div>
</template>

<style>
    #mymap {height: 300px; width: 400px;}

    .item-page-main {
        padding: 10px 100px 0 100px;
    }
    .lato-red {
        font-family: 'Lato', sans-serif;
        color: rgb(98, 25, 25);
    }
    .item-info {
        max-width: 100%;
    }
    .item-info-name {
        padding: 0 0 0 100px;
    }
    .item-info-select {
        font-style: italic;
    }
    .item-info-parameter {
        margin: 7px 0 7px 20px;
        font-style: italic;
    }
    .item-info-shop {
        margin: 0 0 0 20px;
        font-size: 22px;
    }
    .item-info-shop-link {
        text-decoration: none;
    }
    .item-info-img {
       max-width: 100%;
    }
    .leave-review-container {
        text-align: center;
    }
    .r-button {
        margin: 3px;
    }
    .description {
        font-style: italic;
        font-size: 28px !important;
    }
    .centered {
        display: flex !important;
        align-items: center;
        justify-content: center;
        flex-direction: column;
} 
</style>
