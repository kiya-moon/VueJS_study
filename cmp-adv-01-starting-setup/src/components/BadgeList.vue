<template>
  <section>
    <base-card>
      <!-- v-slot의 축약어 : # -->
      <template #header>
        <h2>Available Badges</h2>
      </template>
      <!-- 남아있는 콘텐츠는 자동으로 기본 슬롯으로 이동하지만, 
           조금 더 확실하게 명시하기 위해 v-slot:default를 추가 -->
      <template v-slot:default>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>

<style scoped>
/* section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
} */
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>