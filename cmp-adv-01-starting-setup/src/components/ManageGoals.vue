<template>
  <div>
    <h2>Manage Goals</h2>
    <!-- v-model을 사용하여 양방향 바인딩을 할 수도 있지만 이번엔 ref 사용 -->
    <input type="text" ref="goal" />
    <!-- 위 input창에 입력한 텍스트는 탭을 통해 ActiveGoals.vue로 넘어갔다가 ManageGoals.vue로 돌아오면 남아있지 않는다
         왜냐하면, 컴포넌트가 전환되면 DOM에 남아있는 값이 초기화되기 때문-->
    <!-- 해결책으로는 Vue가 제공하는 내장 컴포넌트 keep-alive 컴포넌트가 있다(App.vue에서 사용) -->
    <button @click="setGoal">Set goal</button>
    <!-- teleport의 to에는 CSS 선택자를 전달한다 -->
    <!-- DOM의 body 요소에서 렌더링 하라는 의미 -->
    <teleport to='body'>
      <error-alert v-if="inputIsInvalid">
        <!-- slot에 제공될 마크업 -->
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">OK</button>
      </error-alert>
      <!-- 현재 이 코드에는 문제가 있음
          dialog 태그가 h2, input, button 태그 아래에 있는 것은 겉보기에는 문제가 없으나 
          시맨틱 관점과 HTML 관점에서는 다이얼로그가 전체 페이지에 오버레이 된다는 문제가 있음 -->
      <!-- 이 때 코드를 물리적으로 옮기지 않고 teleport를 사용해서 원하는 위치로 옮겨줄 수 있다 -->
    </teleport>
    <!-- >>> 이제 화면은 이전과 같지만 개발자도구에서 dialog가 body 섹션 아래에 있어 div 및 다른 요소와 깊게 중첩되지 않는 것을 확인할 수 있다 -->
    <!-- 굳이 사용하지 않아도 되지만 시맨틱 측면으로 올바른 HTML 구조를 만드는데 도움이 된다 -->
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      inputIsInvalid: false
    }
  },
  // Set goal 버튼 클릭 시 입력 필드가 유효값이라면 별다른 조치를 하지 않지만
  // 비어있다면 요류 메시지를 사용자에게 보여주는 코드
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;  // this.$refs.goal을 사용하여 input 값에 접근
      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
}
</script>