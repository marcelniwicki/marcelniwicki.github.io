<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import store from './store';
import { auth } from './firebaseInit';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    auth.onAuthStateChanged(user => {
        store.dispatch("fetchUser", user);
    });
  },

  data() {
    return {
      router: useRouter(),
      store: store,
    }
  }
}
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>
