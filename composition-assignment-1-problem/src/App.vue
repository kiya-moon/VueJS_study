<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- 컴포지션 API를 이용해 내 목표 출력하기 -->
  
  <!-- Separate refs -->
  <!-- <h3 :class="goalStatus">{{ goal }}</h3> -->
  
  <!-- Ref Object -->
  <h3 :class="goalStatus">{{ assignment.goal }}</h3>
  <p>{{ goalStatus }}</p>

  <!-- v-if를 사용하면 태그에 ture, false만 전달해도, 해당 태그를 보이게 할 수도 있고 안 보이게 할 수도 있음!!!
      computed 메서드를 사용할 필요가 없었음!!! 띠로리~
      ex. <h3 v-if="isVisible">{{ goal }}</h3> -->


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
// Separate refs
// Ref Object
// import { ref, computed } from 'vue';

// Reactive
import { reactive, computed } from 'vue';

export default {
  setup() {
    // Separate refs
    // const goal = ref('Finish the Vue');
    // const isVisible = ref(true);
    
    // function buttonClicked() {
    //   isVisible.value = !isVisible.value;
    // }
    
    // const goalStatus = computed(() => {
    //   if(isVisible.value) {
    //     return 'show';
    //   } else {
    //     return 'hide';
    //   }
    // });

    // return { goal: goal, buttonClicked, goalStatus }


    // Ref Object 
    // const assignment = ref({
    //   goal: 'Finish the Vue',
    //   isVisible: true
    // })

    // function buttonClicked() {
    //   assignment.value.isVisible = !assignment.value.isVisible;
    // }
    
    // const goalStatus = computed(() => {
    //   if(assignment.value.isVisible) {
    //     return 'show';
    //   } else {
    //     return 'hide';
    //   }
    // });

    // return { assignment: assignment, buttonClicked, goalStatus } 
    
    
    // reactive
    const assignment = reactive({
      goal: 'Finish the Vue',
      isVisible: true
    })
    
    function buttonClicked() {
      assignment.isVisible = !assignment.isVisible;
    }
    
    const goalStatus = computed(() => {
      if(assignment.isVisible) {
        return 'show';
      } else {
        return 'hide';
      }
    });

    return { assignment: assignment, buttonClicked, goalStatus } 
  }
  

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