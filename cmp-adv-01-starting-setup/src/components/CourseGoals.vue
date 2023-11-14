<template lang="">
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- 여기에 slot을 넣으면 HTML 마크업인 콘텐츠가 목록 항목에 전달되고,
           CourseGoals.vue가 사용되는 장소 내에서 정의된다 -->
      <slot :item="goal" another-prop="..."></slot>
      <!-- >>> slot에 프로퍼티 추가 시 이름은 마음대로. v-bind를 사용하여 동적 값에 바인드 -->
      <!-- => 반복될 때마다 생성되는 goal을 item에 전달한다 -->
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue']
    };
  }
}
</script>
<style lang="">
  
</style>