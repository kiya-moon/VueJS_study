<template>
  <main>
    <!-- template 내의 두 컴포넌트에 데이터를 전송 -->
    <user-list :users="activeUsers" @list-projects="selectUser"></user-list>
    <projects-list :user="selectedUser"></projects-list>
  </main>
</template>

<script>
import USER_DATA from './dummy-data.js';

import UserList from './components/users/UserList.vue';
import ProjectsList from './components/projects/ProjectsList.vue';

import { ref } from 'vue';

export default {
  components: {
    UserList,
    ProjectsList,
  },
  // data() {
  //   return {
  //     // 선택된 유저(slectedUser)와 화면에 표시할 유저(activeUsers) 데이터
  //     // activeUsers는 dummy-data.js의 더미데이터로 채워져 있다
  //     // 긴 배열을 갖는 데이터를 다른 파일(dummy-data.js)에 아웃소싱함으로써 App.vue 파일의 코딩을 간략하게 만듦
  //     selectedUser: null,
  //     activeUsers: USER_DATA,
  //   };
  // },
  // methods: {
  //   selectUser(uid) {
  //     this.selectedUser = this.activeUsers.find((usr) => usr.id === uid);
  //   },
  // },

  // 옵션 API를 컴포지션 API로 변경하기 위해 첫번째로 data를 어떻게 관리할 지 결정해야 한다
  // ref, reactive를 사용해서 하나의 객체로 관리할 수도, 두 데이터를 각각 관리할 수도 있다
  // selectedUser는 ref, activeUsers는 reactive로 각각 관리하는 것 또한 가능하다
  // 편한 방법을 사용하면 되고, 강사님은 ref를 사용해 각각 관리

  // 두 번째로 method를 function으로 setup()에 옮겨준다

  setup() {
    const selectedUser = ref(null);
    const activeUsers = USER_DATA;  // USER_DATA는 이미 만들어진 더미 데이터로, 변할 일이 없기 때문에 ref()를 사용하지 않는다.
                                    // VUE가 이 데이터에는 반응하지 않도록 분명하게 명시

    function selectUser(uid) {
      selectedUser.value = activeUsers.find((usr) => usr.id === uid);
    }    

    return { selectedUser, activeUsers, selectUser };
  },

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

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>