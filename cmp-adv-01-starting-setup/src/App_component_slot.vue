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
    <course-goals #default="slotProps">
      <!-- 이렇게 목표에 대한 텍스트를 h2 태그에 넣어 CourseGoals.vue에 전달할 수 있다 -->
      <!-- 하지만 문제가 있는데, 마크업은 전달할 수 있지만 목록 항목이 렌더링 되는 개별 목표에는 접근할 수 없다
           goal 변수는 오직 CourseGoals.vue에서 사용할 수 있는데, 여기에 출력되어야 하는 마크업은 App.vue에서 전달되고 있음
           이럴 때 범위가 지정된(scoped) 슬롯을 사용할 수 있다 -->
      <!-- 범위가 지정된 슬롯(scoped slot)은,
           슬롯을 정의한 컴포넌트 내부에서 슬롯에 대한 마크업을 전달한 컴포넌트에 데이터를 전달할 수 있게 한다 -->
      <!-- 이를 위해 데이터를 가진 컴포넌트, 즉 슬롯을 정의한 컴포넌트에서 slot에 프로퍼티를 추가
           이 예제에서는 CourseGoals.vue에서 추가한다 -->
      <!-- 잘 사용하지는 않는 심화 개념이다 -->

      <!-- slot에 보내고 싶은 마크업을 template으로 감싸서 데이터에 접근 가능하도록 해준다 -->
      <!-- <template #default="slotProps"> -->
      <!-- >>> 변수의 이름은 마음대로 지으면 된다. -->
      <!-- 변수의 값은 언제나 객체. Coursegoals.vue slot에서 정의한 모든 프로퍼티가 병합된 객체
           CourseGoals.vue slot에 another-prop을 추가한다면, 이 역시도 slotProps 객체의 일부가 되고 another-prop이란 키로 접근할 수 있다 -->
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['another-prop'] }}</p>
        <!-- >>> another-prop에 대쉬(-)가 사용되었으므로 대괄호를 사용해준다
                 Vue가 자동으로 변환해주지 않으므로 CourseGoals.vue에서 선언한 이름 그대로 사용해야 엑세스가 가능하다 -->
      <!-- </template> -->
      <!-- 하나의 슬롯만 사용할 경우에는 template을 굳이 사용하지 않고 course-goals 컴포넌트 태그에 직접 명시해 코드를 줄일 수 있다 -->
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  // 지역(local) 컴포넌트 등록
  components: {
    // 'the-header': TheHeader  // key: value 구조
    // 이렇게도 작성 가능
    TheHeader: TheHeader,  // >>> key를 삭제하고 TheHeader만 작성해도(객체에 단일 값만 제공해도),
                          //    모던 JavaScript 구문 기능으로 인해 자동으로 TheHeader: TheHeader로 확장된다
    BadgeList,
    UserInfo,
    CourseGoals
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