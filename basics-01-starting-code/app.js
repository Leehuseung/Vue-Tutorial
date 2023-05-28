const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course are learn Vue!',
            vueLink: 'https://vuejs.org/' // v-bind 를 이용해  html "" 안에 변수를 사용할 수 있다
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return 'Learn Vue!';
            } else {
                return 'Master Vue!'
            }
        }
    }
});


app.mount('#user-goal');
