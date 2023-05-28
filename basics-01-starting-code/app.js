const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course are learn Vue!',
            courseGoalB: '<h2>Master Vue and build</h2>',
            vueLink: 'https://vuejs.org/' // v-bind 를 이용해  html "" 안에 변수를 사용할 수 있다
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});


app.mount('#user-goal');
