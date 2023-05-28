
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event){
      // event.preventDefault();
      // alert('submit');
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    setName2(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
  }
});

app.mount('#events');
