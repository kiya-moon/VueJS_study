<template>
  <ul>
    <!-- 2-1. v-for에 필요한 storedResources 사용을 위해 props를 추가하고 그 이름에 맞게 변경해준다 -->
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
// 2-4. LearningResource.vue import
import LearningResource from './LearningResource.vue';

export default {
  // 6-8. props를 inject로 수정
  inject: ['resources'],
  // 2-5. LearningResource를 StoredResources 컴포넌트에서 로컬 리소스로 등록
  components: {
    LearningResource
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>