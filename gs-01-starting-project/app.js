// JavaScript 사용
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';  // 입력값 리셋
// }

// buttonEl.addEventListener('click', addGoal);


// Vue 사용
// Vue.createApp({Vue를 구성하는 자바스크립트 객체}) 
// 구성이란, Vue 앱에서 어떤 데이터를 사용할 지 설정한다는 뜻
Vue.createApp({
  // 사용자가 입력한 데이터를 받는다
  // 무조건 data로 적어야한다!★
  // ': function()'을 생략하여 data() {}로 사용 가능
  data: function() {
    // 항상 객체★를 반환해야 함
    return {
      // Vue 앱이 인식해야 하는 데이터를 이 객체에서 정의할 수 있다
      // 키-값 쌍형태
      // 어떤 프로퍼티를 적든, 정적이든 동적이든, HTML단에서 Vue가 사용할 수 있게 된다
      goals: [],
      enteredValue: ''
    };
  },
  // enteredValue로 들어온 값을 goals 배열에 전달하기
  // methods 키 사용. 이름 변경x
  // 메서드와 함수 정의 가능. 여기서 정의한 메서드와 함수를 HTML 코드에서 호출하여 사용
  // 호출 및 클릭 등 사용자 이벤트가 발생했을 때 실행할 함수 정의
  // data는 함수이자 메서드 그 자체라면, methods는 메서드 및 함수로 만둘어진 JavaScript 객체를 갖는다
  methods: {
    addGoal() { // addGoal: function() {}을 메서드 속기법을 이용하여 줄이기
      this.goals.push(this.enteredValue);
      this.enteredValue = ''; // 입력값 리셋
    }
  }
// mount()를 호출하여 Vue 앱이 페이지 어느 부분을 조정할 지 Vue에 알려주어야 한다 
// CSS 선택자를 이용해서 <div>태그의 id app을 명시한다 
}).mount('#app');