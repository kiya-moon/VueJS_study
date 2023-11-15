<!--  3. 카드 컴포넌트 생성
      로직이 포함되지 않은 아주 단순한 컴포넌트
      다른 콘텐츠의 래퍼 역할을 하게 되며, 특정한 외형을 가지게 된다 -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>