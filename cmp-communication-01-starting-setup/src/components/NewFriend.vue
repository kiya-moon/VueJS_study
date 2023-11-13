<!-- 친구 정보를 직접 입력 가능하도록 컴포넌트 추가 -->
<template>
  <!-- @submit으로 양식 제출 이벤트를 수신 -->
  <!-- .prevent 수식어를 사용해서 제출할 때 페이지가 새로 고쳐지게 만드는 브라우저 기본 동작을 방지해 준다 -->
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-Mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <button>Add Contact</button>
  </form>
</template>


<script>
export default {
  emits: ['add-contact'],
  data(){
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: ''
    }
  },
  methods: {
    submitData() {  // 양식을 제출할 때 트리거 된다
      // 커스텀 이벤트를 수신하는 대상에 해당 데이터를 전달할 수 있도록 add-contact 이벤트를 발생시킨다
      // 수신 대상은 App.vue
      this.$emit(
        'add-contact',
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );  // 세 개의 인수 전달
          // 객체로 그룹화해서 하나의 인수로 만들어 전달할 수도 있고 지금처럼 개별로 전달할 수도 있다
    }
  }
};
</script>