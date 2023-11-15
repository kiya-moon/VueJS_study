<!--  -->
<!-- header는 한글자이고(컴포넌트의 이름은 두 단어의 조합을 추천),
     앱 전체에서 하나의 header만 갖으므로 'TheHeader'로 이름 짓는다 -->
<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>.
<script>
export default {
  props: ['title']
}
</script>

<style scoped>
  header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>