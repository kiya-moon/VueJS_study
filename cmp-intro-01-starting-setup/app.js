const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "Julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {},
});

// 새로운 컴포넌트를 사용할 것이라고 알려주기
// 첫번째 인수로는 식별자, 두 번째 인수로는 createApp에 전달한 것과 같은 구성객체를 전달한다

// 식별자에는 커스텀 HTML 태그를 넣는다
// 커스텀 HTML 태그에는 대시(-)을 이용하여 복수의 단어를 사용
// 왜냐하면 내장된 모든 HTML 요소와의 중복을 피하기 위해서~ (내장된 모든 HTML 요소는 한 단어이다)

// createApp({}) 객체에서 필요한 부분만 가져와서 붙여넣기
// 컴포넌트는 일종의 미니 Vue 앱이다
// 메인 앱과는 별개여서 컴포넌트만의 템플릿이 필요하다
// .mount()로 연결하지 않고 아래처럼 template을 정의한다
app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friends.name }}</h2>
    <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friends.phone }}</li>
      <li><strong>Email:</strong> {{ friends.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return { 
      detailsAreVisible: false,
      friends: {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
      } 
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
