const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course are learn Vue!',
            vueLink: 'https://vuejs.org/' // v-bind 를 이용해  html "" 안에 변수를 사용할 수 있다
        }
    }
});


app.mount('#user-goal');
