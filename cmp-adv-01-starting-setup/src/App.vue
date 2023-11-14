<!-- 118강. 동적 컴포넌트 -->
<!-- 여러 탭을 가진 컴포넌트를 구축한다고 가정 -->
<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <!-- >>> 컴포넌트가 많아지면 v-if 코드도 그만큼 반복되게 된다  -->

    <!-- 동적 컴포넌트 사용 -->
    <!-- component: Vue가 제공하는 특별한 HTML 요소 -->
    <!-- 특이점은 혼자서는 작동하지 않는다는 점이다. 
         <component></componet> 요소만 있을 경우 화면에 아무것도 보여주지 않는다 -->
    <!-- 'is'라는 키 프로퍼티 필수★ -->
    <!-- is 프로퍼티는 component 요소에 우리가 정의한 컴포넌트 중 어떤 컴포넌트를 component 요소 안에서 보여줄 지 알려준다 -->

    <!-- v-bind로 동적 바인딩 -->
    <!-- selectedComponent는 'active-goals'로 초기화되어 있지만, 
      setSelectedComponent(cmp) 메서드를 통해 'active-goals'와 'manage-goals' 간에 전환이 이루어진다 -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!-- >>> keep-alive는 동적 컴포넌트 개념으로, keep-alive로 component를 감싸면 해당 component의 상태를 캐시로 저장하도록 Vue에 알려준다
             Vue가 데이터를 캐시로 갖고 있기 때문에, 탭을 변경하더라도 ManageGoals.vue에서 input에 입력한 텍스트가 사라지지 않는다 -->
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader: TheHeader,
    ActiveGoals,
    ManageGoals
},
  data() {
    return {
      // 관리해야하는 데이터 추가
      // DOM에서 사용하는 HTML 태그 이름을 초기값으로 지정
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  // 메서드 추가
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>