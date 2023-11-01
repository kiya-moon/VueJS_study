const app = Vue.createApp({
  data() {
    return {
      userInput1: '',
      // false 상태가 보이고 있는 상태
      toggleStatus: false,
      userInput2: ''
    };
  },
  methods: {
    saveInput1(event) {
      this.userInput1 = event.target.value;
    },
    buttonClicked() {
      this.toggleStatus = !this.toggleStatus;
      console.log(this.toggleStatus);
    },
    saveInput2(event) {
      this.userInput2 = event.target.value;
    }
  },
  computed: {
    userClasses() {
      if (this.userInput1 === 'user1') {
        return { user1: true }
      } else if (this.userInput1 === 'user2') {
        return { user2: true }
      } else {
        return '';
      }
    },
    buttonClasses() {
      if (this.toggleStatus) {
        return { hidden: true }
      } else {
        return { visible: true }
      }
    },
    // 강사님 답안
    // p태그에 줄 동적 스타일링을 한 번에 처리!
    paraClasses() {
      return {
        user1: this.userInput1 === 'user1',
        user2: this.userInput1 === 'user2',
        visible: !this.toggleStatus,
        hidden: this.toggleStatus
      };
    }
  }
});

app.mount('#assignment');