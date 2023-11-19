<!-- v-for를 사용해서 제출된 모든 설문조서 결과를 출력하는 컴포넌트 -->
<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button>Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  props: ['results'],
  components: {
    SurveyResult,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>