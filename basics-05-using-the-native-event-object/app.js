const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    },
    // 인수로 전달하지 않고 lastName 출력하는 다른 방법
    // 코드 상에 문제는 없지만, 카운트를 변경하는 과정에서 Vue가 내부에서 이상적이지 않은 무언가를 한다...?
    // event section 태그 내에서 count 이벤트가 일어난 부분을 찾아 Vue가 자동으로 업데이트하여 페이지에 렌더링하는데,
    // 이 때 Vue는 메서드가 하는 일을 알 수 없기 때문에 HTML 코드 내의 모든 메서드를 재실행한다
    // 이는 성능면에서 좋지 않기 때문에 연산 프로퍼티 방법을 사용한다
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Moon'
    }
  },
  // 연산(Computed) 프로퍼티 : Vue가 의존성을 인식하고, 의존성 중 하나가 변경된 경우에만 재실행한다
  // 위치는 어디든 상관 없음. data와 method 사이에 있어도 상관 없음. 이름 변경 x
  // methods처럼 객체를 취하고, 객체를 값으로 전달해서 연산
  // methods와 마찬가지로 많은 메서드를 정의하지만, computed에서 정의한 메서드는 다른방식으로 호출되고 실행된다
  computed: {
    // 기술적으로는 메서드이나 사용은 데이터 프로퍼티처럼 사용한다
    // 메서드처럼 사용하지 않고 호출하지도 않는다
    // 그래서 연산 프로퍼티의 이름은 데이터 프로퍼티처럼 정해야 한다. 명사
    // 연산 프로퍼티와 데이터 프로퍼티의 이름은 겹치면 안된다

    fullname(){
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName
    }
  },
  // 결론!
  // 재렌더링 될때마다 재실행이 필요한 부분에만 methods를 사용하고,
  // 그 외에는 computed를 사용한다!
  // 이벤트는 methods와 함께 사용한다
  
  // 감시자(Watcher)
  // 기본적으로 의존성 중 하나가 변경될 때 Vue에 실행하도록 지시할 수 있는 함수
  // 연산 프로퍼티와 비슷한 기능을 한다
  // 이름 변경 x, 위치는 상관없음
  watch: {
    // 데이터 프로퍼티와 연산 프로퍼티에 선언한 이름을 감시자 메서드의 이름으로 사용할 수 있다
    // 예를 들어, data에 있는 name을 가져다 사용할 경우, data에 있는 name과 연결이 된다.
    // name에 이벤트가 발생하면 watch의 name()도 실행된다
    // name(value) {
      //   // 반환 값을 사용하기 위해 HTML 코드에 감시자를 사용하는 것이 아니기 때문에 return이 필요 없음
      //   // 대신 이름이 변경되면 실행되어야 할 로직을 입력한다
      
      //   // 감시자 함수는 자동으로 watch 프로퍼티의 마지막 값을 인수로 가져오기 때문에
      //   // this.name 대신 value를 사용해도 된다
      //   // value 이름 그대로 사용해도 되고, 개발자가 정의해도 된다
      //   // this.fullname = this.name + ' ' + 'Moon';
      
      //   if(value === '') {
        //     this.fullname = '';
        //   } else {
          //     this.fullname = value + ' ' + this.lastName;
          //   }
          
          //   // value 외에 두 번째 인수를 받아들일 수도 있다
          //   // ex. name(newValue, oldValue) { ... }
          
          //   // 
          // },
          // lastName(value) {
            //   if(value === '') {
              //     this.fullname = '';
              //   } else {
                //     this.fullname = this.name + ' ' + value;
                //   }
                // }

                // 결론 : 의존성이 두 개인 경우, 감시자보다 연산 프로퍼티의 코드가 훨씬 짧다
                // 감시자의 용도는 따로 있음
                // 어떠한 조건을 주고 감시하는 용도
                // ex. 카운터가 50을 초과하면 재설정
                // counter(value) {
                //   if (value > 50) {
                //     this.counter = 0;
                //   }
                // }
                
                // 다른 예로 특정 데이터가 변경되면 보내는 HTTP 요청이나
                // 특정 값이 변경되면 설정하는 타이머
                // ex. 값이 50을 초과하면 타이머를 2초로 설정하고, 2초 후에 실행되는 함수에서 카운터를 재설정하는 경우
                counter(value) {
                  if (value > 50) {
                    const that = this;
                    setTimeout(function() {
                      // this.couter = 0; 은 작동하지 않음. this가 참조할 수 있는 값이 없음
                      that.counter = 0;
                    }, 2000);
                  }
                }
                
              }


            });
            
            app.mount('#events');
            