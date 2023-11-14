<template>
  <!-- 1. 더미 학습 리소스 목록으로 출력 -->
  <ul>
    <!-- 1-2. 모든 요소를 컴폰너트로 분리해야 하는 것은 아니지만,
              loop 기능이 들어가는 목록 같은 경우에는 일반적으로 개별 컴포넌트를 생성한다
              ResourceItem.vue 생성 -->
    <!-- 1-4. v-for로 더미 학습 리소스 인스턴스 생성. key★ -->
    <!-- 1-7. 모든 프로퍼티에 값이 입력되도록 하기 -->
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>
<script>
//  1-3. 컴포넌트 import 및 component 추가
import LearningResource from './component/learning-resources/LearningResource.vue';

export default {
  component: {
    LearningResource,
  },
  data() {
    return {
      // 1-1. 더미 학습 리소스 데이터 추가
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://www.google.com',
        },
      ],
    };
  },
};
</script>
<style></style>
