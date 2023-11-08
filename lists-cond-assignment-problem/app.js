const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      isShow: true,
      buttonName: 'Hide'
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    buttonClicked() {
      this.isShow = !this.isShow;
      this.buttonName = this.isShow ? 'Hide' : 'Show';
    }
  }
});

app.mount('#assignment');