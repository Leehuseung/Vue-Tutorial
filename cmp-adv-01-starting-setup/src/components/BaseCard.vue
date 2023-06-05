<template>
  <div>
<!--    props는 html로 넘어올 때 해결책이 되지 않는다.?-->
<!--    {{content}}-->

<!--    v-if로 header slot 안에 내용이 없다면 빈 dom이 생성되지 않도록 막는다.-->
    <header v-if="$slots.header">

<!--      컴포넌트에 header slot을 명시하지 않는다면 default 슬롯 생성.-->
      <slot name="header">
<!--        <h2>The Default</h2>-->
      </slot>
    </header>
<!--    이름 없는 slot은 하나만 가능함.-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  // props: ['content']

  mounted() {
    //header 출력시 컴포넌트에서 header 슬롯을 명시하지 않았다면 undefined가 출력된다.
    // console.log(this.$slots.header);
    // console.log(this.$slots.default);
  }
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
