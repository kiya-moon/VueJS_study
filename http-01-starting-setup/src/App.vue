<!-- 간단한 설문조사를 작성하고 학습 경험에 대한 의견을 입력하면, 그 데이터가 저장되어 아래에 출력되는 간단한 APP -->
<template>
  <!-- 더 이상 이벤트를 바인딩하지 않아도 되며 user-experiences에 결과를 제공하지 않아도 된다
       (결과를 제공하지 않아 UserExperiences 컴포넌트가 값을 얻지 못하고 있지만 추후 처리) -->
  <!-- LearningSuvey 컴포넌트에서 survey-sumit 이벤트가 발생되면 App.vue에서 인식하고 storeSurvey 메서드가 트리거된다 -->
  <!-- <learning-survey @survey-submit="storeSurvey"></learning-survey>
  <user-experiences :results="savedSurveyResults"></user-experiences> -->
  <learning-survey></learning-survey>
  <user-experiences></user-experiences>
</template>

<script>
// App.vue에는 두 개의 주요 컴포넌트가 있음
// 설문조사 컴포넌트
import LearningSurvey from './components/survey/LearningSurvey.vue';
// 제출된 결과를 출력하는 컴포넌트
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  // 데이터를 Firebase를 통해 관리하므로 더 이상 App.vue에서 관리하지 않는다
  // data() {
  //   return {
  //     // 제출된 설문 조사 결과 목록(배열)을 App.vue에서 관리하고 있음
  //     savedSurveyResults: [],
  //   };
  // },
  // methods: {
  //   // 사용자가 제출한 결과를 저장(추가)하는 메서드
  //   storeSurvey(surveyData) {
  //     const surveyResult = {
  //       name: surveyData.userName,
  //       rating: surveyData.rating,
  //       // 새로운 결과 데이터에 id 추가
  //       id: new Date().toISOString(),
  //     };
  //     // 결과 데이터 배열에 저장
  //     this.savedSurveyResults.push(surveyResult);
  //     console.log(surveyResult);
  //   },
  // },
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
</style>