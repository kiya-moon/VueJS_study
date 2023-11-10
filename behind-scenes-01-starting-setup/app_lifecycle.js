const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },

  // 생명 주기 훅 메서드는 data나 methods 근처에 추가하면 된다
  // 생성 생명주기
  // 개발자도구 - sources에서 중단점을 설정하면 더 흐름을 잘 알 수 있다
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },

  // 업데이트 생명주기
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },

  // 언마운트 생명주기
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  }
})

app.mount('#app');

// unmount 메서드. 실제로 사용되는 일은 거의 없다
// 나중에 좀 더 현실적인 app의 마운트 해제 사례를 공부할 예정
// 3초 뒤 unmount
setTimeout(function() {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza',
    }
  }
});
app2.mount('#app2');
  