<template>
  <li>
    <h2>{{ name }} {{friendIsFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: [
  //     'name',
  //     'phoneNumber',
  //     'emailAddress',
  //     'isFavorite'
  // ],
  props: {
    name: {
      type: String,
      required: true, // name 을 요구하는지 표현 오류는 발생 안하지만 콘솔창에 경고 나옴.
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "0123 45678 90",
      //   email: "manuel@localhost.com",
      // },
      friendIsFavorite: this.isFavorite,  // 부모에서온 isFavorite을 사용하려면 초기값을 이용한다.
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {

      /**
       * Vue는 단방향 데이터 플로우 라는 개념을 사용하기 때문에 props를 변겨알 수 없다.
       *
       * App.vue에서 선언된 isFavorite는 App.vue에서만 변경 가능함.
       */
      // if(this.isFavorite === '1'){
      //   this.isFavorite = '0';
      // } else {
      //   this.isFavorite = '1';
      // }
      /**
       * 변경하기 위해 friendIsFavorite 로 변경
       */
      // if(this.friendIsFavorite === '1'){
      //   this.friendIsFavorite = '0';
      // } else {
      //   this.friendIsFavorite = '1';
      // }

      /**
       * boolean으로 변경되면서..
       */
      this.friendIsFavorite = !this.friendIsFavorite;
    }
  }
};
</script>
