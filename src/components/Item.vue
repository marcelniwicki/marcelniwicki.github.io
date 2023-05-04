<template>
    <a v-bind:href="'/item/' + id" class="item-container">
        <img class="item-image" v-bind:src="imageLink">
        <div class="row">
            <div class="col-lg-9">
                <h3 class="item-name">{{ name }}</h3>
            </div>
            <div class="col-lg-3">
                <h3 class="item-price">{{ price }}zł</h3>
            </div>
        </div>
    </a>
</template>
<script>
    export default {
        props: ["name", "imageLink", "price", "id"],
    }
</script>

<style>
    .item-container {
        border-bottom: 2px solid rgb(98, 25, 25);;
        min-width: 250px;
        min-height: 330px;
        max-width: 45vh;
        max-height: 60vh;
        margin: 5px auto 15px auto;
        text-decoration: none;
    }
    .item-image {
        width: 100%;
    }
    .item-name {
        padding-right: 10px;
    }
    .item-name, .item-price {
        text-align: center;
        font-family: 'Lato', sans-serif;
        font-style: italic;
        color: rgb(98, 25, 25);
        font-size: 22px;
    }
</style>