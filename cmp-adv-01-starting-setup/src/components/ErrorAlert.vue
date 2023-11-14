<template>
  <!-- 내장 다이얼로그 요소를 표시하려면 open 속성을 사용한다 -->
  <dialog open>
    <slot></slot>  
  </dialog>
</template>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>