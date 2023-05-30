import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

/**
 * 모듈의 상태는 모듈 내에서만 관리한다.
 * Auth의 상태를 가져올 수 없다.
 * @type {any}
 */
//카운터 관련 로직을 하나의 모듈로 이동하였다.
//모듈을 이용한 확장
const counterModule = {
    state() {
        return {
          counter: 0,
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
            //모듈 내의 상태는 모듈 내의 지역상태로 치부된다.

            console.log(state);
            state.counter = state.counter + payload.value;
        },
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
        },
    },
    getters: {
        testAuth(state, getters, rootState, rootGetters) {
            console.log(getters)
            //root를 이용해 외부모듈에 접근할 수 있다.
            console.log(rootState)
            console.log(rootGetters)
            return state.isLoggedIn;
        },
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
        },
    }
};

const store = createStore({
    modules: {
        numbers: counterModule,
    },
    state() {
        return {
            counter: 0,
            isLoggedIn: false,
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', {isAuth: true});
        },
        logout(context) {
            context.commit('setAuth', {isAuth: false});
        }
    },
    getters: {
        userIsAuthenticated(state){
            return state.isLoggedIn;
        }
     },

});

const app = createApp(App);

app.use(store);

app.mount('#app');
