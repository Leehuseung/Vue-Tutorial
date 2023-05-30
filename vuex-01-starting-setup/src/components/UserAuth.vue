<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
<!--  아무것도 나타나지 않는다. 외부 모듈의 state에 접근하기 때문.-->
  <p>{{ isTestAuth }}</p>
</template>


<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
    isTestAuth() {
      return this.$store.getters.testAuth;
    }
  }
}
</script>
