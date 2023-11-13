<template>
  <section>
    <base-card>
      <!-- h3 태그와 base-badge 태그가 header 슬롯으로 가야한다고 Vue에 지시하려면,
          기본 HTML 요소인 template 태그(화면에는 아무것도 렌더링하지 않기 때문에 여기에서 컨테이너로 사용한다)로 래핑한 다음 name 슬롯에 들어갈 콘텐츠가 포함된 template 태그에 특수 디렉티브인 v-slot 디렉티브를 추가한다 -->
      <!-- v-slot을 이용해서 Vue에 특정 콘텐츠가 어디로 가야 할지 알려줄 수 있다 -->
      <template v-slot:header>
        <!-- <header> -->
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        <!-- </header> -->
      </template>
      <!-- slot이 있는 템플릿 내부에 포함되지 않은 콘텐츠는 자동으로 기본 슬롯으로 이동한다 -->
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<!-- style 태그에 scoped 속성을 추가하면, 해당 컴포넌트에 정의된 스타일이 다른 부모, 자식, 형제 컴포넌트에 영향을 미치지 않는다 -->
<style scoped>
/* section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
} */
/* section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
</style>