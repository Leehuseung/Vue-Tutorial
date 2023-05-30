<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({value:11})">Add 11</button>
</template>

<script>
import {mapActions} from "vuex";
export  default  {
  methods: {
    // addOne() {
    //   //store에 mutation에서 정의한함수.
    //   // this.$store.commit('increment');
    //
    //   //actions 실행
    //   this.$store.dispatch('increment');
    // }

    //actions를 한번에 선언한다. 위에처럼 addOne이 필요 없다.
    ...mapActions(['increment', 'increase'])

    // ...mapActions({
    //     inc: 'increment',  //매핑되어야하는 키를 넣어준다.
    //     increase: 'increase' //
    //   })
    //<button @click="inc">Add 2</button>  이렇게 사용한다.
  }
}
</script>
