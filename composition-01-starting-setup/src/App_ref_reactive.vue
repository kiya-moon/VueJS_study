<template>
  <section class="container">
    <!-- template에서 userName.value로 접근하지 않아도,
        setup() 메서드에서 ref를 template에 전달하면 Vue는 자동으로 .value 프로퍼티를 확인한다 -->
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3> -->

    <!-- user 객체 자체를 리턴받을 때는 템플릿에서 객체 안으로 접근해야 한다 -->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
// Vue가 내보낸 다양한 요소를 불러올 수 있게 해주는 중요한 구문

// ref 사용
// import { ref } from 'vue';

// ref는 setup()에서 호출할 수 있는 함수
// ref는 소위 참조를 생성하는데, DOM 요소에 대해서 참조하는 것이 아니라
// 값을 참조해서 템플릿에서 쓸 수 있게 해준다
// 반응형 값을 생성 > 이 값을 바꾸면 Vue도 인식하고 감시할 수 있음
// 값이 바뀌거나 템플릿에 사용되면, Vue는 DOM에서 템플릿을 재렌더링
// ref() 그 자체로는 딱히 하는 일은 없다

// reactive 사용
import { reactive } from 'vue';

export default {
  // 컴포넌트 옵션에 지역 컴포넌트가 등록되어 있거나 프로퍼티 옵션이 있다면 그 부분은 변경하지 않는다.

  // data() 주석처리
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },

  setup() {
    // setup() 메서드에서 this. 키워드를 사용할 수는 있지만, 
    // setup() 메서드는 export default 객체 내부에 있어서 methods에서 사용했을 때처럼 Vue 구성 객체를 참조하지 않는다
    // why? setup() 메서드는 Vue가 컴포넌트 초기화 프로세스의 초반에 실행하는 메서드라서 컴포넌트가 제대로 초기화되지 않은 시점에 실행되기 때문에 액세스할 수 없다.
    // 예를 들어 프로퍼티를 설정해 두었더라도 그 프로퍼티에 액세스 할 수 없음
    // 따라서 setup() 메서드에서 this.사용 x
    // 새로운 값을 이 구성 객체 전반의 프로퍼티에 저장x
    // 대신 평범한 순수 변수나 상수에 저장

    // 상수 userName에 ref()의 값이 저장됨
    // 저장하고 싶은 실제 값은 ref 함수에 인수로 전달

    // const uName = ref('Keeyeon'); 

    // >>> 이렇게 하면 반응형 문자열이 생성된다
    // 내부적으로는 객체를 생성하고 문자열은 그 객체에 저장된다
    // Vue는 이 객체를 감시해서 기존 문자열('Kiya')이 아닌 새로운 값(Something New)을 배치하면 변화를 인식하고 DOM을 업데이트

    // const uAge = ref(30);

    // ref를 객체로 넘기기
    // 비슷한 맥락의 값을 묶어서 객체로 넘기는 방법

    // const user = ref({
    //   name: 'Keeyeon',
    //   age: 30
    // })

    // ref는 숫자, 문자열, 객체 등 다양한 값을 전달할 수 있지만,
    // reactive는 오로지 객체용으로 만들어졌다
    // 숫자, 문자열 등을 이용할 땐 ref를 사용해야 하지만, 객체를 이용할 때는 개발자의 편의대로 사용하면 된다
    const user = reactive({
      name: 'Keeyeon',
      age: 30
    })

    // 사실 ref()를 사용하지 않아도 값은 출력되지만
    // 반응형 값을 사용하기 위해 ref()를 사용한다
    setTimeout(function() {
      // 만약 uName을 let으로 선언하고 uName = 'Kiya'로 재할당하게 되면,
      // ref('Keeyeon') 자체가 덮어씌워져서 Vue에서 값이 변경된 것을 인식하지 못하게 된다
      // 그래서 uName을 상수로 선언하고, uName에 직접 접근하는 대신, uName의 value에 접근한다

      // uName.value = 'Kiya';
      // uAge.value = 31;

      // user.value.name = 'Kiya';
      // user.value.age = 31;
      // >>> 2초가 지나도 값이 변경되지 않는다.
      
      // setTimeout() {} 밖에서 user 객체를 console.log로 확인해보면, value 프로퍼티에 Proxy가 있음
      // Proxy 강의 들어야겠군...
      // 일반적으로 FE와 BE를 분리해서 개발하고 각각을 별도의 포트로 운영하는데,
      // 클라이언트가 서버로 HTTP 요청을 하게되면 브라우저가 요청을 막는 보안정책으로 인해 문제가 발생(CORS)
      // 이 문제를 해결하기 위해 Proxy 서버가 사용된다
      // 클라이언트가 자신을 통해 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 응용 프로그램
      // 서버와 클라이언트 사이의 중계기로써 대리로 통신을 수행한다

      // ref로 전달한 객체에는 getter와 setter도 있음
      // Vue는 getter와 setter를 통해 value 프로퍼티에 액세스하여 값을 확인하거나 변경되는 것을 파악한다
      // 만약 user.value = {}; 로 새로운 객체를 할당하면, Vue는 이 변화를 감지할 수 있다.

      // 하지만 위 user.value.name처럼 객체 내부에 새로운 값을 할당하여 전달하면, 
      // Vue가 객체 내부의 변화를 파악할 수 있도록 그 객체는 Proxy로 래핑된다
      // 그런데 왜 변화를 파악하지 못했을까?

      user.name = 'Kiya';
      user.age = 31;
      // >>> reactive의 중요한 작업
      // 이름과 나이를 value 프로퍼티로 갖는 객체로 래핑하고, 기존 값에 포인터를 가리키는 것이 아니라 
      // reactive에 전달한 객체를 프록시로 래핑해서 반응형으로 만들어 객체를 사용할 수 있게 해준다
      // 즉, 래퍼가 없는 것처럼 사용할 수 있어서 바로 user.name, user.age로 액세스가 가능하다
      // value 프로퍼티로 객체를 래핑하지 않아 .value를 사용하지 않아도 되는 것

      // setTimeout() {} 밖에서 user 객체를 console.log로 확인해보면,
      // ref와 달리 Proxy 객체가 객체를 래핑하고 있는 것을 볼 수 있다
      // 이 때 내부 리스너로 프로퍼티의 변화를 감시한다 

    }, 2000); 

    // 옵션 API를 사용해서 데이터 프로퍼티, 연산 프로퍼티, 메서드 등에 DOM 내부에서 액세스가 가능했을 때는 현재 상태에서도 값이 template에 반영되었을 테지만, 
    // setup() 메서드에 설정한 상수는 DOM이나 템플릿에서 바로 사용할 수 없어 추가 작업 필요
    // >>> 'userName' is assigned a value but never used  no-unused-vars 에러 발생
    // 이 구성 객체가 속하는 컴포넌트의 템플릿에서 활용할 요소를 반환해야 함!
    // 이 때 반환하는 타입은 객체
    // 즉, setup() 메서드에는 템플릿에서 활용할 요소를 객체에 넣고 그 객체를 반환한다
    
    // return { userName: uName, userAge: uAge }; 
    
    // >>> userName 키에 선언한 uName 값을 저장 (키와 상수의 이름은 같아도 된다)
    // 템플릿에 userName에 액세스하기 때문에 반환 요소의 이름도 userName

    // return { userName: user.value.name, userAge: user.value.age };
    // >>> 2초가 지나도 값이 변경되지 않는 이유는 템플릿에 정보를 전달하는 방식이 잘못 되었기 때문!
    // return문에서도 객체 내부의 정보를 액세스 하고 있는데, 이러한 직접 접근 방식이 잘못 됨
    // 이렇게 직접 접근해서 얻은 값은 단순한 문자열과 숫자일뿐, 반응형 값이 아님
    // 즉, 이론상으로는 Vue가 값의 변경을 알아차려야 하지만, return문에서 user 객체 내부 정보를 직접 파악하고 있기 때문에 Vue는 문자열과 숫자가 활용된다는 것만 알고 구체적인 값의 정보를 지속해서 파악하지 못해 변화를 감지하지 못한다.
    // 따라서 return문에서는 미가공 객체를 전달해야 한다.

    return { user: user }

  }  
};
</script>

<!-- 부록1 -->
<!-- help 메서드 : isReactive, isRef
    반응형 여부를 확인해야 할 때 사용 가능하다 -->
<!-- 
  import { ref, reactive, isReactive, isRef } from 'vue';
  const uAge = ref(31);
  const user = reactive({
    name: 'Maximilian',
    age: 31
  });

  // 문자열이든 객체이든 그 안의 값에 직접적으로 접근 시에는 반응형 값이 아니어서 false
  // 실제 값에 접근한다기 보다는, 그 값을 찍어놓은 스냅샷에 접근하는 모양이기 때문이다
   console.log(isRef(uAge.vlaue)); // false
  console.log(isReactive(user.name)); // false

  cosnole.log(isRef(uAge)); // true
  console.log(isReactive(user));  // true
-->

<!-- 부록2 -->
<!-- toRefs -->
<!-- 
  import { ref, reactive, toRefs } from 'vue';
  const user = reactive({
    name: 'Maximilian',
    age: 31,
  });
  const userRefs = toRefs(user);
  return { user: user, userName: userRefs.name, userAge: userRefs.age };
-->
<!-- toRefs는 reactive 객체에만 사용 가능하고, 
    자동으로 객체의 프로퍼티 값을 모두 ref로 바꿔준다 -->

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
