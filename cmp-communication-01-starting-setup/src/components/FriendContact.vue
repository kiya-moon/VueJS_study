<!-- App.vue의 템플릿 내부에서 사용하는 자식 컴포넌트 -->
<template>
  <li>
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
    <!-- 삭제 버튼 추가 -->
    <!-- <button @click="deleteFriend">Delete</button> -->
    <!-- template에서 $emit 호출. template에서 호출 시에는 this 키워드는 없어도 된다! -->
    <!-- Remember. When binding to an event, you can either point at a method, execute a method or execute any other basic JS code -->
    <button @click="$emit('delete', id)">Delete</button>
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
  emits: [ 'toggle-favorite', 'delete' ], 
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    // // 삭제 메서드 추가
    // deleteFriend() {
    //   // 커스텀 이벤트 발생시키기
    //   // friends 배열은 App.vue가 관리하므로 FriendContact.vue 내부에서는 삭제 버튼을 클릭했다는 정보를 전달해주기만 하면 된다
    //   this.$emit('delete');
    // }
    // => 메서드를 추가하지 않고 템플릿에서 $emit을 호출할 수도 있다!!!
  },
};
</script>
