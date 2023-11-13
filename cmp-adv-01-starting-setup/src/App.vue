<template>
  <div>
    <!-- <the-header></the-header> -->
    <!-- 아래 components key에 TheHeader를 적어도 Vue가 자동으로 the-header로 번역한다 -->

    <!-- PascalCase로 사용할 경우 셀프 클로징 가능 -->
    <TheHeader />
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  // 지역(local) 컴포넌트 등록
  components: {
    // 'the-header': TheHeader  // key: value 구조
    // 이렇게도 작성 가능
    TheHeader: TheHeader,  // >>> key를 삭제하고 TheHeader만 작성해도(객체에 단일 값만 제공해도),
                          //    모던 JavaScript 구문 기능으로 인해 자동으로 TheHeader: TheHeader로 확장된다
    BadgeList,
    UserInfo
  }, // >>> 여기에 등록된 컴포넌트는 App.vue만 사용 가능
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<!-- 앱 전체에 영향을 미치는 스타일은 일반적으로 App.vue 파일의 style 태그에서 정의된다 -->
<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>