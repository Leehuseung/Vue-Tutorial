<template>
  <section>
    <base-card>
      <template v-slot:header>
        <h2>Available Badges</h2>
      </template>
<!--      기본 슬롯을 default로 명시할 수 있다.-->
      <template v-slot:default>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>

<!--기본적 인 style은 위치와 상관없이 전역 스타일로 취급된다.-->
<!--<style>-->
<style scoped>

section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
