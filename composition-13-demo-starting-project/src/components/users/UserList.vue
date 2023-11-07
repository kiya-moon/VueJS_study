<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <div>
      <button @click="sort('asc')" :class="{selected: sorting === 'asc'}">Sort Ascending</button>
      <button @click="sort('desc')" :class="{selected: sorting === 'desc'}">Sort Descending</button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script>
import UserItem from './UserItem.vue';

import { ref, computed, watch } from 'vue';

export default {
  components: {
    UserItem,
  },
  props: ['users'],
  setup(props) {
    // 1. data 컴포지션 API로 변경하기
    // 검색 기능
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');
    
    // 2. 데이터 정의한 코드를 각각 분리 < 옵션 API에서는 할 수 없는 작업
    // 왜냐하면 검색과 관련된 항목이나 함수 등은 enteredSearchTerm, activeSearchTerm 이 두 ref 바로 아래에 모아두어야 하고,
    // 정렬과 관련된 로직은 sorting 아래에 두어야하기 때문
    // 그러면 검색 로직 다음에 정렬 로직이 오게 된다
    // 동일 로직이 여러 곳에 흩어져 있지 않고 함께 작용하게 만들 수 있음

    // 3. 연산(computed) 프로퍼티 컴포지션 API로 변경하기
    const availableUsers = computed(function() {
      let users = [];
      if (activeSearchTerm.value) {
        users = props.users.filter((usr) =>
          usr.fullName.includes(activeSearchTerm.value)
        );
      } else if (props.users) {
        users = props.users;
      }
      return users;
    })

    watch(enteredSearchTerm, function(newValue) {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }



    // 정렬 기능
    const sorting = ref(null);

    const displayedUsers = computed(function() {
      if (!sorting.value) {
        return availableUsers.value;
      }
      return availableUsers.value.slice().sort((u1, u2) => {
        if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
          return 1;
        } else if (sorting.value === 'asc') {
          return -1;
        } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
          return -1;
        } else {
          return 1;
        }
      })
    });

    function sort(mode) {
      sorting.value = mode;
    }

    return {
      enteredSearchTerm,
      updateSearch,
      displayedUsers,
      sorting,
      sort
    }
  }
  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //     sorting: null,
  //   };
  // },
  // computed: {
  //   availableUsers() {  // activeSearchTerm을 검사해서 검색어를 기반으로 필터를 적용하는 역할
  //     let users = [];
  //     if (this.activeSearchTerm) {
  //       users = this.users.filter((usr) =>
  //         usr.fullName.includes(this.activeSearchTerm)
  //       );
  //     } else if (this.users) {
  //       users = this.users;
  //     }
  //     return users;
  //   },
  //   displayedUsers() {  // 정렬을 담당
  //     if (!sorting.value) {
  //       return availableUsers.value;
  //     }
  //     return availableUsers.value.slice().sort((u1, u2) => {
  //       if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
  //         return 1;
  //       } else if (sorting.value === 'asc') {
  //         return -1;
  //       } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
  //         return -1;
  //       } else {
  //         return 1;
  //       }
  //     });
  //   },
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  //   sort(mode) {
  //     sorting.value = mode;
  //   },
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   }
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>