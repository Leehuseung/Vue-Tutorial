<template>
  <base-container title="Vuex" v-if="isAuth">
<!--    <h3>{{ $store.state.counter }}</h3>-->
<!--    <h3>{{ counter }}</h3>-->
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth>

    </user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from "@/components/ChangeCounter.vue";
import FavoriteValue from "@/components/FavoriteValue.vue";
import UserAuth from "@/components/UserAuth.vue";

export default {
  components: {
    UserAuth,
    FavoriteValue,
    ChangeCounter,
    BaseContainer,
    TheCounter,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods: {
    addOne(){
      // mutation 사용 첫번째 방법
      // this.$store.commit('increase', { value : 10);
      //  mutation 사용 두번째 방법
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10,
      // })

      //actions 사용. commit과 비슷하다. 두번째 인자로 객체등 가능
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
