// Vue.createApp()은 변수나 상수에 저장할 수 있다
const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h2>Master Vue and build amazing apps!</h2>', // >>> HTML 요소가 일반 텍스트로 출력된다(HTML로 인식x)
                                                                  // 크로스 사이트 스크립팅 공격으로부터 보호하기 위한 보안 기능 때문
                                                                  // HTML 태그를 사용하고 싶을 때는 html 페이지에서 v-html 디렉티브 사용
                                                                  // 다만 크로스 사이트 스크립팅 공격에 대한 보안 위험성 때문에 잘 사용하지는 않는다
      vueLink: 'https://vuejs.org/'
    }
  } ,
  methods: {
    outputGoal() {
      const randomNumber = Math.random(); // 0과 1 사이의 숫자를 무작위로 출력
      if (randomNumber < 0.5) {
        // return 'Learn Vue!';
        // methods 부분에 this를 사용하면, Vue가 알아서 data를 참조한다
        return this.courseGoalA;
      } else {
        // return 'Master Vue!';
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');
