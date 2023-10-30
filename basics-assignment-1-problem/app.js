const app = Vue.createApp({
  data() {
    return{
      name: 'Dalkkubuk',
      Age: 30,  // 숫자는 '' 안 붙여도 됨
      imgUrl: 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg'
    }
  },
  methods: {
    agePlus() {
      return this.Age + 5;
    },
    randomNum() {
      return Math.random();
    }
    // addName() {
    //   return this.enteredValue;
    // }
  }
});

app.mount('#assignment');