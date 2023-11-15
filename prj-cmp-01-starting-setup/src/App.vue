<template>
  <!-- 4-1. header 컴포넌트 추가 및 title 설정 -->
  <the-header title="RememberMe"></the-header>

  <the-resources></the-resources>

  <!-- 2. 루트 App.vue 파일에 마크업을 아예 넣지 않기 위해 ul과 루프 부분을 컴포넌트로 생성 -->
  <!-- 2-3. StoredResources의 resources props에 storedResources data 전달 -->
  <!-- <stored-resources :resources="storedResources"></stored-resources> -->
  <!-- <ul>
    1. 더미 학습 리소스 목록으로 출력
    1-2. 모든 요소를 컴폰너트로 분리해야 하는 것은 아니지만,
         loop 기능이 들어가는 목록 같은 경우에는 일반적으로 개별 컴포넌트를 생성한다
         ResourceItem.vue 생성
    1-4. v-for로 더미 학습 리소스 인스턴스 생성. key★
    1-7. 모든 프로퍼티에 값이 입력되도록 하기
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul> -->
</template>

<script>

// 6-5. StoredResources를 TheResources.vue에서 사용하면서 App.vue에서는 더 이상 필요하지 않으므로 주석 처리
// 2-2. LearningResource import는 여기서 더 이상 필요하지 않기 때문에 지우고 StoredResources.vue를 import 한다
// import StoredResources from './components/learning-resources/StoredResources.vue';

import TheHeader from './components/layouts/TheHeader.vue';

// 6-9. TheResources import 및 component 추가
import TheResources from './components/learning-resources/TheResources.vue';

// //  1-3. 컴포넌트 import 및 component 추가
// import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
  components: {
    TheHeader,
    TheResources
  },
  // 6-6. TheResources.vue로 이동시킨 StoredResources에 프로퍼티를 전달하기 위해 1-1 데이터를 TheResources.vue로 이동시키고 필요없어진 data() {}는 지운다
  // data() {
  //   return {
  //     // 1-1. 더미 학습 리소스 데이터 추가
  //     storedResources: [
  //       {
  //         id: 'official-guide',
  //         title: 'Official Guide',
  //         description: 'The official Vue.js documentation.',
  //         link: 'https://vuejs.org',
  //       },
  //       {
  //         id: 'google',
  //         title: 'Google',
  //         description: 'Learn to google...',
  //         link: 'https://www.google.com',
  //       },
  //     ],
  //   };
  // },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
