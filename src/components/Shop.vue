<template>
    <Header />
    <div class="shop-main">
        <div class="row">
            <div class="col-lg-4">
                <img class="shop-img" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="KDLSMNGOIMG">
            </div>
            <div class="col-lg-8">
                <div class="shop-info-container">
                    <h2 class="lato-red shop-name">{Shop name}</h2>
                    <h3 class="lato-red">Address: {Address}</h3>
                    <h3 class="lato-red">Working hours: {Working hours}</h3>
                    <p class="lato-red description">{Description}</p>
                </div>
            </div>
        </div>
        <div id="map"></div>
    </div>
</template>

<script>
import Header from './Header.vue';
export default {
    components: { Header },
    methods: {},
    mounted() {
        console.log(document.getElementById("map"));
        const map = L.map(document.getElementById("map")).setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
}
</script>

<style>
    .shop-main {
        margin: 10px 100px 0 100px;
    }
    .shop-info-container {
        text-align: left;
    }
    .shop-img {
        max-width: 100%;
    }
    .shop-info-container > * {
        margin: 7px 0 7px 20px;
    }
    .shop-name {
        padding-left: 100px;
        margin-bottom: 15px;
    }
    .description {
        font-size: 24px;
        font-style: italic;
    }
    #map {
        margin-top: 10px;
        min-height: 400px;
    }
</style>
