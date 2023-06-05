<template>
  <div>
    <the-header></the-header>
<!--    <badge-list></badge-list>-->
<!--    <user-info-->
<!--      :full-name="activeUser.name"-->
<!--      :info-text="activeUser.description"-->
<!--      :role="activeUser.role"-->
<!--    ></user-info>-->
<!--    <course-goals>-->
<!--      <template #default="slotProps">-->
<!--        <h2>{{ slotProps.item }}</h2>-->
<!--        <p>{{ slotProps['another-prop'] }}</p>-->
<!--      </template>-->
<!--    </course-goals>-->

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

<!--    기존 방법을 이용해 동적컴포넌트를 만들지만, 많아질때 불편한 점이 있다.-->
<!--    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>-->
<!--    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>-->

<!--    is는 정의한 컴포넌트 중 어떤 컴포넌트를 보여줄지 알려준다.-->
    <component :is="selectedComponent"></component>

  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "@/components/BadgeList.vue";
// import UserInfo from "@/components/UserInfo.vue";
// import CourseGoals from "@/components/CourseGoals.vue";
import ActiveGoals from "@/components/ActiveGoals.vue";
import ManageGoals from "@/components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
