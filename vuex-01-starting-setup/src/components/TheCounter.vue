<template>
<!--  <h3>{{ counter }}</h3>-->
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
    //연산(computed) 프로퍼티에 병합되는 객체를 제공한다. 위에처럼 선언을 안해도 된다.
    //게터 여러개 사용시 코드가 효율적임.
    // ...mapGetters(['finalCounter'])

    //namespace 적용
    ...mapGetters('numbers',['finalCounter'])
  },
}
</script>
