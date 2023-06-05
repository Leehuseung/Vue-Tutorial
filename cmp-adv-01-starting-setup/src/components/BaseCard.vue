<template>
  <div>
<!--    props는 html로 넘어올 때 해결책이 되지 않는다.?-->
<!--    {{content}}-->

    <header>
      <slot name="header"></slot>
    </header>
<!--    이름 없는 slot은 하나만 가능함.-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  // props: ['content']
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
