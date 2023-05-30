const app = Vue.createApp({
    data() {
        return {
          friends: [
              {
                  id: 'manuel',
                  name: 'Manuel Lorenz',
                  phone: '01234 5678 991',
                  email: 'manuel@localhost.com'
              },
              {
                  id: 'julie',
                  name: 'Julie Jones',
                  phone: '09876 543 221',
                  email: 'julie@localhost.com'
              },
          ],
        };
    },
});

// app에게 컴포넌트를 만들겠다고 알려줌.
// 첫번째 인수 식별자 대시를 포함한 항상 두단어로 해야한다. html 충돌 되기 때문에..
// 두번 째 인수 createApp과 같은 구성객체
// 앱에 하위 앱
app.component('friend-contact', {
    template: `
            <li>
                <h2>{{ friend.name}}</h2>
                <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
                <ul v-if="detailsAreVisible">
                    <li><strong>Phone:</strong> {{friend.phone}}</li>
                    <li><strong>Email:</strong> {{friend.email}}</li>
                </ul>
            </li>
    `,
    data() {
        return {
            detailsAreVisible:false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            },
        };
    },
    methods: {
        toggleDetails(id) {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');
