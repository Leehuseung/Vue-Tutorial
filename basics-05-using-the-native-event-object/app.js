const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }
    }
  //   name(value) {
  //     if(value == ''){
  //       this.fullname = ''
  //     } else {
  //       this.fullname = value + ' ' + this.lastName;
  //     }
  //   },
  //   lastName(value) {
  //     if(value == ''){
  //       this.fullname = ''
  //     } else {
  //       this.fullname = this.name + ' ' + value;
  //     }
  //   }
  },
  computed: {
    //함수처럼 사용하지 않고 변수처럼 사용한다.
    fullname(){
      //computed 프로퍼티를 사용하면 counter에대한 이벤트 조작 사용시 재랜더링 하지 않는다.
      //name 이 변경된 경우에만 다시 계산한다.
      console.log('Running again...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullname() {
      //counter를 up down 해도 실행된다. 더 나은 해결책은??
      console.log('Running again');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'abcdef';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
