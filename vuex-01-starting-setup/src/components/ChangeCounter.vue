<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export  default  {
  methods: {
    addOne() {
      //store에 mutation에서 정의한함수.
      // this.$store.commit('increment');

      //actions 실행
      this.$store.dispatch('increment');
    }
  }
}
</script>
