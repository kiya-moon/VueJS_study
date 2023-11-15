<!-- 5. 기본 버튼 컴포넌트 생성 -->
<template>
  <!-- <button :type="type" :class="mode"> -->
  <button :class="mode">
    <!-- 5-3. 버튼 안에 들어갈 텍스트 같은 콘텐츠는 외부에서 전달받아야 하기 때문에 slot 사용 -->
    <!-- slot을 사용하면 텍스트 뿐만 아니라 아이콘, SVG, 원하는 마크업 등 유연성 있게 전달할 수 있다 -->
    <slot></slot>
  </button>
  <!-- 5-2. (if) base-button의 mode를 flat으로 해서 나중에 다른 컴포넌트에서도 사용할 수 있음
            이렇게 하면 flat 텍스트가 위 button의 css 클래스로 추가된다
            아래 스타일 코드를 보면 이 클래스에 대한 선택자가 있어 버튼의 외형을 다르게 할 수 있다 -->
  <!-- <base-button mode="flat"></base-button> -->
</template>

<script>
export default {
  // 6-12. 폴스루(fall through)을 막기 위해 type 프로퍼티를 삭제하고 자체적으로 추가하는 프로퍼티만 사용
  // type을 사용하지 않더라도 base-button 요소의 type은 BaseButton.vue 파일 내 템플릿 안의 루트 HTML 요소에 자동으로 전달되어 작동하는데 문제가 없다

  // 5-1. type은 버튼의 타입을 정할 수 있도록 하는 프로퍼티
  //      mode는 css 클래스로 설정할 수 있도록 하는 프로퍼티
  props: ['mode']
}
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
} 
</style>