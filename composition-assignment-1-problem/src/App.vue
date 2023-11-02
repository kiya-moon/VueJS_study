<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- 컴포지션 API를 이용해 내 목표 출력하기 -->
  <h3 :class="goalStatus">{{ goal }}</h3>

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <!-- 버튼 클릭 시 목표가 사라졌다가 나타나는 토글 기능 부여 -->
  <button @click="buttonClicked">Toggle Goal</button>

  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- 데이터 세가지 버전으로 template에 전달하기
        1. 분리된 refs
        2. ref 객체
        3. reactive 객체
   -->

  <!-- Task 4: Also solve the assignment with the Options API -->
  <!-- options API 사용해서도 문제 풀이하기 -->
</template>

<script>
// Task 1 ~ 3
import { ref } from 'vue';

export default {
  // Separate refs
  

  // Task 4
  // data() {
  //   return {
  //     goal: "Finish the Vue",
  //     isVisible: true
  //   };
  // },
  // methods: {
  //   buttonClicked() {
  //     this.isVisible = !this.isVisible;
  //   }
  // },
  // computed: {
  //   goalStatus() {
  //     return {
  //       show: this.isVisible,
  //       hide: !this.isVisible
  //     };
  //   }
  // }
  
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>