<!-- App.vue의 템플릿 내부에서 사용하는 자식 컴포넌트 -->
<template>
  <li>
    <!-- friendIsFavorite은 더 이상 사용하지 않으므로 변경해준다 -->
    <!-- <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2> -->

    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true 
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    }
  },  
  // props처럼 컴포넌트가 발생시킬 이벤트를 정의할 수 있다
  // props처럼 필수적인 것은 아니지만 권장됨
  // 이 컴포넌트의 작동 방식과 어떤 이벤트를 수신하는지 등을 다른 개발자가 명확히 알 수 있게 된다
  emits: [ 'toggle-favorite' ], // toggle-favorite이 포함된 이벤트가 있음을 명시
  // props처럼 객체로 나타낼 수도 있다
  // emits: { 
  //   'toggle-favorite': function(id) {  // toggle-favorite이 id를 가지는 함수에 의해 처리되는 이벤트라는 것을 명시
  //     // 유효성 검사 추가
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missing!') // 콘솔에 경고를 띄우면 이벤트 발생 중 오류를 개발자가 더 빠르게 잡아낼 수 있다
  //       return false;
  //     }
  //   } 
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite은 isFavorite 값을 자식에서 변경해 쓰기 위해 사용한 data 프로퍼티이므로 삭제
      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      
      // 부모에 이벤트를 전달하기 위해 Vue에서 제공해주는 내장 메서드 사용
      // emit() 메서드가 부모 컴포넌트에서 수신할 수 있는 커스텀 이벤트를 발생시켜준다
      // emit()은 최소한 하나의 커스텀 이벤트 이름을 인수로 요구한다
      // 이름은 개발자 마음대로 지으면 됨
      // kebob-case 사용!
      this.$emit('toggle-favorite', this.id);
    }
  },
};
</script>
