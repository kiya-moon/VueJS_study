<!-- 파일 이름이 자동으로 컴포넌트의 이름이 되지는 않지만, 파일 이름과 컴포넌트의 이름을 갖게 해주는 것이 좋다 -->

<!-- 1-5. 더미 학습 리소스를 담을 수 있는 템플릿 추가 -->
<template>
  <div>
    <header>
      <h3>{{ title }}</h3>
      <button>Delete</button>
    </header>
  </div>
  <p>{{ description }}</p>
  <nav>
    <a :href="link">View Resource</a>
  </nav>
</template>

<script>
export default {
  // 1-6. props를 추가하여 이 컴포넌트에 입력하려는 프로퍼티가 무엇인지 Vue에 알려준다
  //      하드코딩을 하면 컴포넌트를 재사용할 수 없지만, 이 방법을 사용하면 재사용이 가능하다
  props: ['title', 'description', 'link']
}
</script>

<style>
  
</style>