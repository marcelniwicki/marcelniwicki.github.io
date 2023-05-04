<template>
    <div class="login-main">
        <div class="login-container">
            <h2 class="text-white lato">Create new account</h2>
            <form action="/profile" @submit.prevent="register">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text button-login lato" id="basic-addon1">Email</span>
                    </div>
                    <input type="text" v-model="userEmail" class="form-control input-login lato" placeholder="..." aria-label="Email" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text button-login lato" id="basic-addon2">Password</span>
                    </div>
                    <input type="password" v-model="userPass" class="form-control input-login lato" placeholder="..." aria-label="Password" aria-describedby="basic-addon2">
                </div>
                <button type="submit" class="btn btn-light submit-button lato">Register</button>
            </form>
        </div>
        <a href="/login"><h3 class="lato login-text">Login</h3></a>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Header from './Header.vue';

export default {
    data() {
        return {
            userEmail: "",
            userPass: "",
            store: useStore(),
            router: useRouter(),
        };
    },
    components: { Header },
    methods: {
        async register() {
            try {
                await this.store.dispatch('register', {
                    email: this.userEmail,
                    password: this.userPass
                })
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
    .login-text {
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