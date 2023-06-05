<template>
  <section>
    <base-card>
<!--      base-card라는 컴포넌트에  <slot name="header"></slot> 형식으로 들어가 있을때 v-slot을 이용핸다.-->
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
<!--      template 태그 안에 내용은 header slot으로, 나머지는 slot으로 들어간다.-->
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
