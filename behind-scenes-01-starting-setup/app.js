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
      // this.message = this.currentUserInput;
      // this.message = this.$refs.userText;
      // console.log(this.$refs.userText); // js dom이 찍힌다.
      // console.dir(this.$refs.userText); // js dom이 찍힌다.
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');  // 화면에 Vue 관련 값이 아무것도 떠있지 않다.
  },
  created() {
    console.log('created()');  // 화면에 아무것도 떠있지 않다.
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');  // 실제로 update된 값이 출력되지 않는다.
  },
  updated() {
    console.log('updated()');   // 실제 출력됨.
  },
  beforeUnmount() {
    console.log('beforeUnmount()');   //실제로 내용이 사라지지 않는다.
  },
  unmounted() {
    console.log('unmounted()');  //앱 종료.
  },
});

app.mount('#app');

// app.unmount();  //실제로 unmount 할일은 별로 없다.

//앱은 독립적으로 움직인다. app1에서 선언한 변수를 사용할 수 없음.
const app2 = Vue.createApp({
  template: `
    <p>{{favoriteMeal}}</p>
  `,
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

// console.log(proxy.longMessage); // Hello!!!! World!









