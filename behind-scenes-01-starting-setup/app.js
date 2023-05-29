const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

//앱은 독립적으로 움직인다. app1에서 선언한 변수를 사용할 수 없음.
const app2 = Vue.createApp({
  data() {
    return {
      favoriteMeal: 'pizza',
    }
  }
});
app2.mount('#app2');


//. .....

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    // console.log(target);  //data 객체
    // console.log(key);     //message
    // console.log(value);   //Hello!!!!
    if(key === 'message'){
      target.longMessage = value + ' World!';
    }

    target.message = value;

  },
};

const proxy = new Proxy(data, handler);

/**
 * proxy에 어떤값이 설정될 때마다 set이 실행된다.
 *
 */
proxy.message = 'Hello!!!!';  //

console.log(proxy.longMessage); // Hello!!!! World!









