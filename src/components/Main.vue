<template>
    <Header />
    <div class="main row">
        <div class="col-lg-3 filters">
            <div class="categories-container">
                <a href="#" @click="this.chooseCategory('Men')" class="category text-white">Men</a>
                <a href="#" @click="this.chooseCategory('Women')" class="category text-white">Women</a>
                <a href="#" @click="this.chooseCategory('Children')" class="category text-white">Children</a>
                <a href="#" @click="this.chooseCategory('Popular')" class="category text-white">Popular</a>
                <a href="#" @click="this.chooseCategory('For sale')" class="category text-white">For sale</a>
            </div>
            <div class="recent">
                <h2 class="text-center lato-red">Recently added</h2>
                <div class="recent-container">
                    <Item v-for="item in recentItems" :name=item.name :imageLink="item.imageLink" :price="item.price" :id="item.id" />
                </div>
            </div>
        </div>
        <div class="col-lg-9 content-container">
            <div class="search-bar">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button v-on:click="filterItems" class="btn btn-light search-button" id="inputGroup-sizing-default">
                            <img class="search-logo" src="../assets/search.png" alt=" ">
                        </button>
                    </div>
                    <input type="text" v-model="searchString" class="form-control search-input" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                
                </div>
            </div>
            <h2 class="text-center lato-red">{{ searchCategory }}</h2>
            <div class="content">
                <Item v-for="item in filteredItems" :name=item.name :imageLink="item.imageLink" :price="item.price" :id="item.id" />
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header.vue';
import Item from './Item.vue';
import db from '../firebaseInit.js';
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";


export default {
  components: { Header, Item },
  data() {
    return {
        searchString: "",
        searchCategory: "Popular",
        items: [],
        filteredItems: [],
        recentItems: [],
    }
  },
  methods: {
    chooseCategory(text) {
        this.searchCategory = text;
        this.updateItems();
    },

    async updateItems() {
        this.items = [];
        const items = collection(db, "items");
        const q = query(items, where("Categories", "array-contains", this.searchCategory));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            console.log(data)
            this.items.push({ name: data.name, price: data.price, imageLink: data.image_link, id: data.id });
        });
        this.filterItems();
    },

    filterItems() {
        this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(this.searchString.toLowerCase()));
    },

    async getRecentItems() {
        this.recentItems = [];
        const items = collection(db, "items");
        const q = query(items, orderBy("date_added", "desc"), limit(3));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            this.recentItems.push({ name: data.name, price: data.price, imageLink: data.image_link, id: data.id });
        });
    }
  },
  mounted() {
    this.updateItems();
    this.getRecentItems();
  }
}
</script>

<style>
    .filters {
        padding-right: 0;
    }
    .content-container {
        padding-left: 0;
    }
    .categories-container {
        padding: 10px 100px 10px 100px;
        background-color: rgb(119, 31, 31);
    }
    .categories-container > * {
        display: block;
        margin: 8px 0 8px 0;
    }
    .content {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .lato-red {
        font-family: 'Lato', sans-serif;
        color: rgb(98, 25, 25);
    }
    .category {
        width: 100%;
        font-size: 24px;
        text-decoration: none;
    }
    .recent {
        margin-top: 10px;
    }
    .recent-container {
        margin: 5px;
        padding: 7px;
    }
    .content-container {
        margin: 0;
    }
    .search-logo {
        width: 24px;
    }
    .search-button {
        margin-right: 5px;
        border-radius: 0 !important;
    }
    .search-input {
        border-radius: 0 !important;
    }
    .search-bar {
        background-color: rgb(119, 31, 31);
        width: 100%;
        max-width: 100%;
        padding: 8px 4px 8px 4px;
        margin-bottom: 10px;
    }
</style>
