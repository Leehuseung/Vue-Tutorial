<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model="userName"/>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
<!--      v-model 사용시 자동으로 숫자로 변경됨.-->
      <input id="age" name="age" type="number" v-model="userAge" ref="ageInput"/>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
<!--        value가 없을경우 checkbox 해제시 전부 해제됨-->
<!--        name속성이 같을경우 data 변수에 배열로 생긴다. 한개면 true/false-->
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest"/>
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials"  v-model="interest"/>
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing"  v-model="interest"/>
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" v-model="how" value="video"/>
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" v-model="how" value="blogs"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" v-model="how" value="other"/>
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <!--        name속성이 같을경우 data 변수에 배열로 생긴다. 한개면 true/false-->
        <input type="checkbox" id="confirm-terms" name="confirm-terms" v-model="confirm"/>
        <label for="confirm-terms">Agree to terms of use?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'google', //option의 value 값을 선택한다.
      interest: [], //기본값을 null 로 할경우에 한개만 선택해도 모두 선택됨.
      how: null,
      confirm: false,
    };
  },
  methods: {
    submitForm(){
      console.log('usernmae: ' +  this.userName);
      this.userName = '';
      console.log('UserAge:');
      console.log(typeof this.userAge);
      console.log(31 + 5);
      console.log(typeof 31);
      //ref 사용시 type이 스트링으로 들어가게 된다.
      console.log(this.$refs.ageInput.value + 5); // 문자열로 더해짐.
      console.log(typeof this.$refs.ageInput.value);
      this.userAge = null;

      console.log('Checkboxes');
      console.log(this.interest);
      console.log('Radio buttons');
      console.log(this.how);
      this.interest = [];
      this.how = null;

      console.log('confirm')
      console.log(this.confirm);
      this.confirm=false;
    }
  }
}
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
