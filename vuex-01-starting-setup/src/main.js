import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        //여러 컴포넌트에서 counter를 접근하는게 아니라 이 함수를 이용해 바꾼다.
        //중복제거, 실수제거 등 가능.
        increment(state) {
            state.counter += 1;
        },
        //payload는 객체, 숫자 ,, 종류는 상관없다.
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
