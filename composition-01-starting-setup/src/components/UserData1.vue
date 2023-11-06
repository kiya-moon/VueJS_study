<template>
  <!-- 루트 노드가 여러 개일 경우 폴스루 동작이 제대로 작동하지 않아 console 창에 경고 메시지가 발생한다 -->
  <!-- <h2>{{ userName }}</h2>
  <h2>{{ age }}</h2> -->

  <!-- div 태그를 사용해 하나의 루트 노트로 래핑 -->
  <div>
    <h2>{{ userName }}</h2>
    <h2>{{ age }}</h2>
  </div>

  <!-- 슬롯 데이터는 slot 태그 사용 -->
  <!-- <slot></slot> -->
  <!-- slot 프로퍼티를 통해 프로그래밍 방식으로 엑세스 가능 -->
</template>

<script>
// 컴포지션 API 사용 방법
import { computed, inject } from 'vue';
// >>> App.vue에서 provide로 값을 전달하고, UserData.vue에서 Inject로 주입

export default{
  // App.vue에서는 컴포지션 API + 컴포넌트에서는 옵션 API < 이런식으로 사용해도 문제 없음
  // 어떤 것을 사용할 지는 개발자의 선택 사항
  
  // props: ['userName', 'age']
  // props: ['firstName', 'lastName', 'age'],
  props: ['firstName', 'lastName'],

  // 옵션 API에서 두 개의 프로퍼티(firstName, lastName)를 computed를 통해 하나의 연산 프로퍼티로 합치는 방법
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }

  // setup()은 두 개의 매개변수를 받는다
  // this를 사용하는 대신 setup()의 첫 번째 인수로 props 전달
  // 인수명은 개발자가 마음대로 정하면 된다

  // 두 번째 인수는 항상 Vue가 입력 > context object
  setup(props, context) {
    const uName = computed(function() {
      // setup()에서는 this를 사용해서 props를 받아올 수 없음
      // 만약 this를 사용하면, TypeError: Cannot read property 'fristName' of undefined at eval 에러 발생
      // Vue가 setup()을 너무 일찍 호출해서 Vue 인스턴스 객체가 이 시점에는 존재하지 않으므로 this라는 키워드가 정의되지 않음
      // return this.firstName + ' ' + this.lastName;

      return props.firstName + ' ' + props.lastName;
      
      // Vue는 props는 객체 내 개별데이터에 반응하는 것이 아니라, props 객체 자체에 반응한다
      // 때문에 객체 내 데이터 하나라도 변동이 있다면, Vue는 props에 의존하는 모든 코드를 재실행한다
    });

    // provide에서 'userAge'에 넣어 전달한 uAge(ref()) 값이 'age'에 inject됨
    const age = inject('userAge'); 

    // 값을 변경할 때는, inject 받은 변수에서 변경하지 말고 provide 쪽에서 변경
    // age.value = 32; xxxxxx

    console.log(context);
    // >>> 세 가지 중요한 프로퍼티인 attrs, emit, slots을 확인할 수 있다

    // attrs : 폴스루(fallthrough; 대체) 속성
    //         컴포넌트에 전달되는 속성 또는 v-on 이벤트 리스너이지만,
    //         이것을 받는 컴포넌트의 props 또는 emits에서 명시적으로 선언되지 않은 속성
    //         일반적인 예로 class, style, id 속성이 있음
    //         가령 UserData.vue에 클래스를 하나 설정한다고 했을 때,
    //         해당 클래스가 이 위치에서 정의된 프로퍼티가 아닌 경우에는 
    //         자동으로 fallthrough 프로퍼티가 된다
    //         선택적 프로퍼티라고 할 수 있음
    
    // slots : 컴포넌트에 있는 slot 데이터에 엑세스 할 수 있음

    // emit : 함수로 커스텀 이벤트를 발생(emit)시키고자 할 때 호출 가능
    // 컴포지션 API : context.emit('save-data', 1);
    // 옵션 API : this.$emit('save-data', 1);

    return { userName: uName, age };
    // >>> return을 통해 다시 App.vue에 age를 전달하면 프로퍼티(props)가 아니어도 App.vue에서 받아서 사용이 가능하다
  }
}
</script>