<!-- 
  슬롯(Slots) 
  : 자체 컴포넌트를 동적 콘텐츠, 즉 다른 HTML 콘텐츠의 래퍼로 사용하는 경우
    래퍼로 사용될 컴포넌트로 이동해서 여기에 프로퍼티를 사용하는 대신 특수한 요소인 슬롯을 사용
    더 많은 유연성을 부여하고 슬롯 없이는 할 수 없거나 구축할 수 없는 작업을 가능하게 해준다
-->


<!-- UserInfo.vue와 BadgeList.vue에는 section 태그와 그 section에 적용된 스타일이 공통으로 들어간다 -->
<!-- 전역 범위의 style 태그를 갖는 App.vue에서 스타일을 지정하는 방법도 있지만,
     또 다른 대안은 section과 여기에 적용된 스타일을 가진 독립형 컴포넌트를 만드는 것
     독립형 컴포넌트를 만들 경우 콘텐츠를 유연하게 수신할 수 있게 된다 -->

<!-- 기본적으로 이 컴포넌트는 특정 스타일이 적용된 래퍼로 사용할 예정 -->
<template>
  <div>
    <header>
      <!-- 만약 slot이 두개 이상이라면? -->
      <!-- Vue가 제공된 콘텐츠가 어디로 가야하는지 알 수 없게 되기 때문에,
           슬롯 요소에 name 속성을 사용해서 이름을 추가할 수 있음
           이름은 개발자가 마음대로 지으면 된다 -->
      <slot name="header">
        <!-- slot에 기본 콘텐츠 제공 -->
        <!-- 수신하는 콘텐츠가 없는 슬롯에 기본 콘텐츠를 렌더링할 수 있다는 의미 -->
        <!-- h2 태그의 콘텐츠는 현재는 화면에 표시되지 않는다
             BaseCard.vue를 사용한 모든 곳이 header slot에 콘텐츠를 제공하고 있기 때문
             만약 BadgeList.vue에 v-slot:header 템플릿을 주석처리하면,
             header slot에 제공되는 콘텐츠가 없기 때문에 The Default를 확인할 수 있다 -->
        <h2>The Default</h2>
      </slot>
    </header>
    <!-- 만약 이름 없는 슬롯을 하나 남겨두면 그것이 기본 슬롯이 된다
         하지만 이름이 없는 슬롯은 오직 하나여야 한다 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>