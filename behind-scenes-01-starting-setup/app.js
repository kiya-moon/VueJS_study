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
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

// .................................................
// 순수 JavaScript로 자체적인 반응형 시스템 구축
let message = 'Hello';
let longMessage = message + ' world!';
console.log(longMessage); // Hello world!

message = 'Hello!!!';
console.log(longMessage); // Hello world!
                          // message 변수에 Hello!!!를 재할당했지만 반영x
                          // JavaScript는 반응형이 아니기 때문에 
                          // message가 변한다고 해서 앞서 작성한 longMessage가 재연산되지 않는다 

const data = {
  message: 'Hello',
  // 프로퍼티 추가
  // message가 변경되면 longMessage도 변경되어야 한다
  longMessage: 'Hello world!'
};

const handler = {
  // Proxy가 지원하는 일명 트랩을 설정할 수 있다
  // set 트랩 설정
  // handler 내에 set 함수를 추가하면 자동으로 target, key, value를 전송받는다
  // proxy에 새로운 프로퍼티가 설정될 때마다 트리거 된다
  // 설정된 새 값은 무엇이고 래핑된 원본 객체가 무엇인지 알 수 있다
  set(target, key, value) {
    console.log(target);  // {'Hello'}
    console.log(key); // message
    console.log(value); // Hello!!!

    if (key === 'message') {
      target.longMessage = value + 'world!';
    }
    target.message = value;
  }
};

// data 객체를 new Proxy를 통해 JavaScript 프록시로 래핑
// 모던 JavaScript에 내장된 생성자 함수이기 때문에 이 코드를 테스팅할 때는 Chrome과 같은 모던 브라우저에서 작업해야 함
// 첫 번째 인자는 target, 두 번째 인자는 handler
const proxy = new Proxy(data, handler);

// Proxy로 data 객체를 매핑하여 message에 접근이 가능하다는 얘기인듯...
proxy.message = 'Hello!!!';

console.log(proxy.longMessage); // Hello!!! world!

// .................................................
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
  