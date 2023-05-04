<template>
    <div class="login-main">
        <div class="login-container">
            <h2 class="text-white lato">Log in to your account</h2>
            <form action="/" @submit.prevent="login">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text button-login lato">Email</span>
                    </div>
                    <input name="email" type="email" id="basic-addon1 email" v-model="email" required class="form-control input-login lato" placeholder="..." aria-label="Email" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text button-login lato" id="basic-addon2">Password</span>
                    </div>
                    <input type="password" id="password" v-model="password" required class="form-control input-login lato" placeholder="..." aria-label="Email" aria-describedby="basic-addon2">
                </div>
                <button type="submit" class="btn btn-light submit-button lato">Login</button>
            </form>
        </div>
        <a href="/register"><h3 class="lato red register">Register</h3></a>
        <button v-on:click="loginFacebook" class="btn btn-primary">Login/register with Facebook</button>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
import store from '../store';
import Header from './Header.vue';



export default {
    components: { Header },
    data() {
        return {
            email: "",
            password: "",
            router: useRouter(),
        }
    },
    methods: {
        async login() {
            try {
                await store.dispatch('login', {
                    email: this.email,
                    password: this.password
                })
            } catch (err) {
                console.log(err.message);
            }
            this.router.push("/profile");
        },

        async loginFacebook() {
            try {
                await store.dispatch('loginFacebook', {  })
            } catch (err) {
                console.log(err.message);
            }
            this.router.push("/profile");
        }
    }
}
</script>

<style>
    .login-main {
        width: fit-content;
        margin: 150px auto 0 auto;
        text-align: center;
    }
    .login-container > * {
        padding: 7px 0 7px 0;
    }
    .login-container {
        padding: 20px;
        background-color: rgb(119, 31, 31);
    }
    .lato {
        font-family: "Lato", sans-serif;
    }
    .register {
        text-align: end;
        text-decoration: underline;
        font-size: 14px;
        color: rgb(98, 25, 25);
    }
    .input-login, .button-login {
        border-radius: 0 !important;
        font-size: 20px;
    }
    .input-login {
        max-width: 80vw;
    }
    .submit-button {
        width: 100%;
        font-size: 20px;
    }
</style>