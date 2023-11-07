const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      // splice(index, num) : num에 해당하는 index 항목을 배열에서 삭제해준다
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
