<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Your Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Your Age</label>
      <input type="age" v-model="enteredAge" />
    </div>
    <button>Update User</button>
  </form>
</template>

<script>
  export default {
    emits: ['update-user'],
    data() {
      return {
        enteredName: '',
        enteredAge: ''
      }
    },
    methods: {
      submitData() {
        this.$emit(
          'update-user',
          this.enteredName,
          this.enteredAge
        );
      }
    }
  }
</script>