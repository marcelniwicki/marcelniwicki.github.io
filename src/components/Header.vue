<template>
    <header>
        <div class="row header-row">
            <div class="header-col left-col col-lg-6">
                <a href="/">
                    <img class="logo" src="../assets/logo.png" alt="No logo :(">
                </a>
            </div>
            <div class="header-col d-flex right-col col-lg-6">
                
                <a class="login-link text-white" v-bind:href="this.getUserLink()">{{ this.getUser() }}</a>
            </div>
        </div>
    </header>
</template>
<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import store from '../store';

export default {
    props: [ "user" ],

    data() {
        return {
            router: useRouter(),
            store: useStore(),
        }
    },

    methods: {
        getUser() {
            return !this.store.getters.user.loggedIn ? "Login" : this.store.getters.user.data.email;
        },

        getUserLink() {
            return !this.store.getters.user.loggedIn ? "/login" : "/profile";
        }
    }
}
</script>

<style>
    header {
        font-family: 'Lato', sans-serif;
        padding: 2px 0 2px 0;
        background-color: brown;
    }
    .header-col {
        text-align: center;
    }
    .search {
        width: 300px;
        max-width: 50vw;
    }
    .logo {
        height: 80px;
        padding-left: 20px;
    }
    .left-col {
        text-align: left;
    }
    .right-col {
        padding: 18px 0 18px 0;
    }
    .search-bar {
        max-width: 75%;
        min-width: 50%;
    }
    .login-link {
        margin-left: auto;
        font-size: 24px;
        text-decoration: none;
        padding-right: 20px;
    }
    .header-row {
        max-width: 100%;
    }
</style>