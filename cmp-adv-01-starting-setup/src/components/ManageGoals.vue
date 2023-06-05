<template>
<div>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal"/>
  <button @click="setGoal">Set Goal</button>
<!--  teleport 기능은 error-alert 같은 모달의 위치를 컴포넌트 안이 아니라 원하는 위치로 이동시킬 수 있다.-->
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter at leasy a few character...</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</div>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert.vue";

export default {
  components: {ErrorAlert},
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;

      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
}
</script>
