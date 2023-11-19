<!-- 8-2. 경고 메세지를 띄울 커스텀 다이알로그 컴포넌트 추가 -->
<template>
  <!-- 10. 개발자 도구에서 확인 시, BaseDialog 컴포넌트가 div 요소 여기저기에 중첩되어 있기 때문에 teleport 컴포넌트 추가하여 정리 -->
  <teleport to="body">
    <!-- 8-7. 백드롭 버튼을 눌렀을 때도 다이얼로그가 닫히도록, 백드롭에 해당하는 div에 클릭 리스너 추가 -->
    <!-- 백드롭 버튼 >>> 모달창 뒤에 백그라운드를 클릭하면 모달창이 꺼짐 -->
    <div @click="$emit('close')"></div>
    <!-- Dialog에 open 속성을 추가해서 항상 열려 있는 상태로 설정
        가시성은 BaseDialog를 DOM에 추가 및 삭제하며 제어하도록 한다 -->
    <dialog open>
      <!-- header 안에 slot을 추가하여 사용자가 헤더를 사용할 수 있게 하고,
          slot 내부에 사용자가 헤더를 지정하지 않았을 때 사용될 기본 콘텐츠를 추가한다 -->
          <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions">
          <base-button @click="$emit('close')">Close</base-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    // title 프로퍼티도 추가해서 props 키에 입력할 수 있도록 함
    // 해당 컴포넌트에 props 키를 통해 입력될 title을 추가하면 개발자의 작업 유연성이 증가한다
    // 기본 다이얼로그를 만들 때 title 프로퍼티를 그대로 쓰거나,
    // 커스텀 HTML 구조를 사용해서 헤더에 집어넣으면 된다
    // 따라서 title에 required: false를 전달해 title이 선택사항임을 명시한다
    title: {
      type: String,
      required: false,
    },
  },
  emits: ['close']
};
</script>

<style scoped>
  div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>