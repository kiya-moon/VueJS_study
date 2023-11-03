<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>

    <button @click="setAge">Change Age</button>
    <div>
      <!-- @input="" : input 이벤트를 수신할 수 있는 input 리스너 -->
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" /> -->
      
      <!-- 직접 input 이벤트를 수신하게 하고 함수를 호출하는 대신, v-model을 사용하는 방법 -->
      <!-- v-model에 ref와 reactive 값 사용이 가능. Vue가 알아서 처리해주니까 -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';

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

  setup() {
    // const uName = ref('Keeyeon');
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(30);

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    // watch는 인수 2개를 요구한다
    // 첫 번째 인수 : 의존성(Dependency) > 이 함수에 감시자 함수를 실행할 시점을 알려준다
    // 두 번째 인수 : 실제 호출 대상인 함수 
    
    // watch(uAge, function(newValue, oldValue) {
    //   console.log('Old age: ' + oldValue);
    //   console.log('New age: ' + newValue);
    // });
    
    // 첫 번째 인수에 의존성으로 여러 개의 배열을 전달하면, 
    // 둘 이상의 의존성을 지정해서 watch함수나 옵션API를 더욱 유연하게 사용할 수 있다
    // uAge나 연산된 ref인 uName이 변화하는 경우, watch 함수의 두 번째 인수인 함수는 다양한 값을 인수로 갖는다. 다수의 새로운 값(newValues)과 다수의 기존 값(oldValues)이 반환된다
    // 의존성이 둘 이상이기 때문에 두 인수 모두 배열을 갖는다. -s 붙여주기
    watch([uAge, uName], function(newValues, oldValues) {
      // 또한 의존성이 둘 이상인 경우, 이때 값의 순서는 의존성의 순서를 따라간다
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });
    
    function setNewAge() {
      uAge.value = 31;
    }

    return {
      userName: uName,
      userAge: uAge,
      setAge: setNewAge,
      firstName,
      lastName
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
