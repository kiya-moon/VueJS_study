<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import ProjectItem from './ProjectItem.vue';
import { ref, computed, watch, toRefs } from 'vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  setup(props) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableProjects = computed(function() {
      if (activeSearchTerm.value) {
        return props.user.projects.filter((prj) =>
          prj.title.includes(activeSearchTerm.value)
        );
      }
      return props.user.projects;
    });

    const hasProjects = computed(() => props.user.projects && availableProjects.value.length > 0 );

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }

    watch(enteredSearchTerm, function(newValue) {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });

    // 만약 props의 값이 많다면, toRefs()를 이용해서 특정 값만 ref() 형으로 만들어줄 수 있다 
    // const propsWithRefs = toRefs(props);
    // const user = propsWithRefs.user;

    // 축약형
    const { user } = toRefs(props);

    watch(user, function() {
    // watch(props, function() {  
      // >>> props.user 사용 시 감시자의 소스가 null이어서 유효하지 않다는 경고 메세지 발생
      // props를 사용해서 user에 접근할 때 문제가 발생하는 것
      // props는 반응형 객체이지만, props의 값은 반응형이 아님
      // 따라서 props 전체를 감시해야 한다!
      enteredSearchTerm.value = '';
    });

    // props에 선언된 프로퍼티는 따로 전달해주지 않아도 템플릿에서 사용 가능
    return {
      updateSearch,
      enteredSearchTerm,
      hasProjects,
      availableProjects
    }
  },
  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //   };
  // },
  // computed: {
  //   hasProjects() {
  //     return this.user.projects && this.availableProjects.length > 0;
  //   },
  //   availableProjects() {
  //     if (this.activeSearchTerm) {
  //       return this.user.projects.filter((prj) =>
  //         prj.title.includes(this.activeSearchTerm)
  //       );
  //     }
  //     return this.user.projects;
  //   },
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   },
  //   user() {
  //     this.enteredSearchTerm = '';
  //   },
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