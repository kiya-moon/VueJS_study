<!-- 설문조사 및 의견 작성 컴포넌트 -->
<!-- 입력 요소 및 라디오 버튼 등이 v-model로 바인딩되어 있으며, 양식 섹션에서 배운대로 관리되고 있다 -->
<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <!-- 이전 강의들에서 prevent로 브라우저 기본동작을 막은 이유는, 이렇게 하지 않으면 HTTP 요청이 전송되기 때문이다
           하지만 현재 코드에서 prevent를 사용하지 않을 경우, 
           데이터는 페이지와 동일한 주소의 로컬 컴퓨터로 전송되지만 해당 요청을 수신할 코드가 없어 기본 요청은 오류 페이지로 넘어간다
           만약 Vue 앱을 사용하고 Vue 앱을 제공하는 서버에서 자체적으로 요청을 처리하는 애플리케이션을 구축할 경우 브라우저 기본동작이 괜찮을 수 있다
           하지만 대부분의 경우 사용자에게 Vue 앱을 제공하는 별도의 Vue 앱 서버가 있고, 그 서버에서 사용자의 데이터를 모두 처리한다
           이런 경우에 브라우저 기본 동작을 막아 요청을 보내지 않고 JavaScript에서 제출된 데이터를 Vue로 처리해야 한다 
      -->
      <!-- 우리가 사용하는 Firebase로는 어떻게 요청을 보낼 수 있을까?
           Firebase는 실시간 데이터베이스이고 HTTP 주소가 있다
           특정 형식의 요청을 HTTP 주소로 보내면 Firebase가 데이터를 자동으로 선택하고 데이터베이스에 기록한다
           데이터베이스와 직접 통신하는 것처럼 보일 수 있지만 그렇지는 않다
           Firebase에서 제공하는 HTTP 주소는 Firebase 팀이 작성한 서버 사이드 코드로 연결되는 주소이다
           우리가 보낼 요청을 파싱해 데이터를 추출해서 데이터베이스에 기록하는 과정을 거친다
      -->
      <!-- https://vue-http-demo-87bc4-default-rtdb.firebaseio.com/ -->

      <!-- Vue 코드 내부에서 요청을 보내는 방법
           1. Axios 사용
              매우 인기있는 JavaScript 서드 파티 패키지
              JavaScript 내부에서 HTTP 요청을 보낼 수 있다
           2. fetch 메서드 사용
              HTTP 요청을 보낼 수 있는 브라우저 내장 메서드
              URL을 첫 번째 인수로 취한 다음 URL에서 데이터를 가져오도록 구성하거나 해당 URL로 데이터를 보낼 수 있음 
      -->
      <!-- 여기서는 fetch 사용 -->
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p
          v-if="invalidInput"
        >One or more input fields are invalid. Please check your provided data.</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
    };
  },
  emits: ['survey-submit'],
  methods: {
    // submit 메서드
    submitSurvey() {
      // 유효성 검사
      if (this.enteredName === '' || !this.chosenRating) {
        // 하나 이상의 입력 필드가 유효하지 않다면 오류 메시지 표시
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // 입력값이 유효하다면 survey-submit 이벤트가 발생된다
      this.$emit('survey-submit', {
        userName: this.enteredName,
        rating: this.chosenRating,
      });

      // 위에서 언급했듯이 fetch의 첫번째 인수로는 url이 들어오는데, 약간의 수정이 필요하다
      // https://vue-http-demo-87bc4-default-rtdb.firebaseio.com/ < 슬래시 뒤에 원하는 식별자를 추가할 수 있는데, 
      // 단어.json의 형태로 식별자를 추가해야 한다
      // 이러한 형태의 식별자는 firebase에서 요구하는 형태일뿐, Vue 또는 백엔드에서 요구하는 것이 아님
      // .json 앞의 단어는 키로, 해당 키로 firebase가 자동으로 데이터베이스에 노트를 생성하고 해당 노트에 데이터를 저장한다

      // 기본적으로 fetch는 데이터를 가져오지만, 여기서는 데이터를 보내야하기 때문에 두 번째 인수를 추가한다
      // 두 번째 인수는 JavaScript 객체 형태로 데이터 요청에 대한 구성을 명시한다
      fetch('https://vue-http-demo-87bc4-default-rtdb.firebaseio.com/surveys.json', {

        // method에는 POST, GET, DELETE, PATCH 등이 올 수 있다
        method: 'POST',

        // 발신 요청에 headers, 즉 메타데이터도 추가
        // Content-Type 헤더를 application/json으로 설정해서 JSON 형식의 일부 데이터가 요청에 추가된 걸 서버에 알리는 역할
        headers: {
          'Content-Type' : 'application/json',
        },

        // 요청에 본문(body) 추가
        // 여기서는 설문조사 결과인 name과 rating을 추가한다
        // 과거에 발생시킨 값이 이 객체에 추가된 것
        // 그리고 이 JavaScrip 객체를 JSON 데이터로 보내야 하기 때문에 stringify 메서드를 호출해서 JSON 형식으로 변환해 준다
        body: JSON.stringify({ name: this.enteredName, rating: this.chosenRating })
      })

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>