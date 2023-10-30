const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add() {
      // 버튼이 클릭될 때만 실행될 거니까 반환값은 필요하지 않다고 한다... 그렇다고 한다...
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    // html 단에서 전달한 파라미터를 매개변수 num이 받음
    add2(num) {
      this.counter = this.counter + 10;
    },
    reduce2(num) {
      this.counter = this.counter - 5;
    },
    // event : html에서 이벤트 발생 시 브라우저에서 전달되는 인수(기본 이벤트 객체)를 받는 매개변수
    // 기본 이벤트 객체에는 이벤트 정보가 들어있다 === input에 들어간 값을 알 수 있음
    setName(event, hello) {
      // event.target.value는 순수 JavaScript 요소. 사용자가 입력한 값
      // 사용자가 입력한 값을 data의 name에 전달하여, input 이벤트가 발생하면 실시간으로 반영되도록 한다
      this.name = hello + ' ' + event.target.value;
    },
    submitForm(event) {
      // 브라우저 기본값 방지 방법1
      // event.preventDefault();
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
