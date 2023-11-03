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
import { ref, computed } from 'vue';

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
  // }

  setup() {
    // const uName = ref('Keeyeon');
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(30);

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
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
