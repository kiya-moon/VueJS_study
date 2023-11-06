<template>
  <section class="container">
    <!-- 컴포넌트 사용하기 -->
    <!-- <user-data :user-name="userName" :age="userAge"></user-data> -->
    <!-- <user-data :first-name="firstName" :last-name="lastName" :age="userAge"></user-data> -->

    <!-- provide/inject API 사용해서 age 데이터 전달하기 -->
    <user-data :first-name="firstName" :last-name="lastName" :age="userAge"></user-data>

    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <!-- Template ref 사용해보기 -->
      <!-- 구성 객체의 일부 메서드에 $ref 변수를 사용해 Input으로부터 값을 읽어오는 방식을 적용할 예정 -->
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  // data() 주석처리
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31
  //   };
  // },
  // methods: {
  //     setNewAge() {
  //       this.age = 32;
  //     }
  // },
  // watch: {
  //   age(val) {
  //     console.log(val);
  //   }
  // }

  // 옵션 API에서 provide() 사용
  // provide() {
  //   return { age: this.age };
  // }

  components: {
    UserData
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    // template ref에 포함된 ref와 같은 방식으로 ref를 선언해준다
    // 자체 데이터를 관리하는 자체적인 ref와 DOM 요소에 바인딩하는 ref 사이에는 차이점이 없다
    // 여기에 선언한 lastNameInput, return의 lastNameInput, template의 lastNameInput을 Vue가 모두 이어준다
    const lastNameInput = ref(null);
    const uAge = ref(30);

    // provide 함수를 이용해 전달할 값으로 두 가지 인수 입력
    // 첫 번째는 우리에게 필요한 userAge,
    // 두 번째는 우리가 전달하고자 하는 실제 값
    provide('userAge', uAge);

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], function(newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });
    
    function setNewAge() {
      uAge.value = 31;
    }

    function setLastName(){
      // ref의 값으로 액세스하기 위해서는 항상 .value를 사용하며, 
      // 이 ref의 값은 input 요소 객체를 가리키는 포인터가 된다
      // 그러면 이 객체는 사용자 입력에 대한 값 프로퍼티를 갖게 된다

      // 두 번째 .value는 input 요소 객체의 값 프로퍼티로 액세스 하게끔 해주고
      // 첫 번째 .value는 이후에 input 요소 객체가 될 ref의 값으로 액세스 하게끔 해준다
      lastName.value = lastNameInput.value.value;
    }

    return {
      userName: uName,
      userAge: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName
    };
  },
};
</script>

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
