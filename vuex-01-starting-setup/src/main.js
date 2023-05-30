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
            state.counter += 2;

            //setTimeout을 그대로 쓰는건 좋은게 아니다. actions를 고려하자.
            // setTimeout( function() {
            //     state.counter += 2;
            // },2000);

        },
        //payload는 객체, 숫자 ,, 종류는 상관없다.
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    getters: {
        //여기서만 바꾸면 된다.
        finalCounter(state) {
            return state.counter * 2;
        },
        nomalizedCounter(_, getters) {
            //getters를 이용해 finalCounter (중복되지않도록) 계산된 값을 가져온다
            const finalCounter = getters.finalCounter;
            if(finalCounter < 0) return 0;
            if(finalCounter > 100)return 100;
            return finalCounter;
        }
     },
    actions: {
        //mutation 과 같은 이름을 쓰면 직관적이다.
        increment(context) {
            setTimeout( function() {
                //mutation을 실행한다.
                context.commit('increment');
            },2000);
        },
        increase(context, payload) {
            context.commit('increase', payload);
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
