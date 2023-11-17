<!-- 8-2. 경고 메세지를 띄울 커스텀 다이알로그 컴포넌트 추가 -->
<template>
  <!-- Dialog에 open 속성을 추가해서 항상 열려 있는 상태로 설정
       가시성은 BaseDialog를 DOM에 추가 및 삭제하며 제어하도록 한다 -->
  <dialog open>
    <!-- header 안에 slot을 추가하여 사용자가 헤더를 사용할 수 있게 하고,
         slot 내부에 사용자가 헤더를 지정하지 않았을 때 사용될 기본 콘텐츠를 추가한다 -->
    <header>
      <slot>
        <h2>{{ title }}</h2>
      </slot>
    </header>
    <section>

    </section>
  </dialog>
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
      required: false
    }
  }
}
</script>
<style>
  
</style>