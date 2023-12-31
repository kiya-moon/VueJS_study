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

      // Vue가 지원하는 모든 프로퍼티는 $로 시작한다
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount('#app');

// 두 번째 app 추가
const app2 = Vue.createApp({
  // 명시적으로(?) template을 적어줄 수도 있다
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza',
    }
  }
});
app2.mount('#app2');
  