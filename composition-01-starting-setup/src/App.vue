<template>
  <section class="container">
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->

    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>

    <!-- 옵션 API를 사용했다면 클릭 리스너에서 포인터로 메서드를 가리키고,
        구성객체에는 관련 데이터 프로퍼티와 메서드를 추가하여 사용했을 것이다  -->
    <!-- 컴포지션 API를 사용할 때는? -->
    <!-- <button @click="setNewAge">Change Age</button> -->
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
// reactive 사용 시
// import { reactive } from 'vue';

// ref 사용 시
import { ref } from 'vue';

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
    // setup()에서는 데이터 정의뿐만 아니라 함수 정의도 가능하다

    // const user = reactive({
    //   name: 'Keeyeon',
    //   age: 30
    // })

    // function setNewAge() {
    //   user.age = 31 ;
    // }

    const uName = ref('Keeyeon');
    const uAge = ref(30);

    function setNewAge() {
      uAge.value = 31 ;
    }

    // 함수도 일반 데이터를 리턴하듯이 키-값 쌍을 추가하여 리턴한다
    // setNewAge() 함수가 아니라, setNewAge 가리키는 포인터를 setAge 프로퍼티에 저장한다
    return { userName: uName, userAge: uAge, setAge: setNewAge }
  }  
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
