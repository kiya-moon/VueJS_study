<!-- 파일 이름이 자동으로 컴포넌트의 이름이 되지는 않지만, 파일 이름과 컴포넌트의 이름을 갖게 해주는 것이 좋다 -->

<!-- 1-5. 더미 학습 리소스를 담을 수 있는 템플릿 추가 -->
<template>
  <li>
    <!-- 3-1. div 태그를 BaseCard 태그로 변경 -->
    <!-- 3-2. BaseCard 컴포넌트를 사용하기 위해서는 import를 해야하는데, 
              보통 Base 컴포넌트의 경우 전역적으로 사용되기 때문에 글로벌 컴포넌트로 추가한다 -->
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <!-- 5-5. BaseButton 적용 -->
        <!-- 5-6. 디자인이 어울리지 않아 mode 프로퍼티 추가 후 flat으로 설정 -->

        <!-- 9. 리소스 삭제 기능 추가하기 -->
        <!-- 동적 컴포넌트를 사용하고 있기 때문에 커스텀 이벤트를 사용해서 삭제 기능을 만들 수 없다
             대신, 리소스 추가를 처리할 때 사용한 방식(TheResources.vue - addResource() 추가)을 사용 -->
        <!-- 9-3. 사용자가 Delete 버튼을 클릭했을 때, 클릭 리스너를 통해 삽입한 deleteResource 메서드를 가리키도록 한다
                  또한 실행을 위해 해당 리소스의 id를 프로퍼티로 가져와 deleteResource 메서드에 입력해준다 -->
        <base-button mode="flat" @click="deleteResource(id)">Delete</base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  //  1-6. props를 추가하여 이 컴포넌트에 입력하려는 프로퍼티가 무엇인지 Vue에 알려준다
  //  하드코딩을 하면 컴포넌트를 재사용할 수 없지만, 이 방법을 사용하면 재사용이 가능하다
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource']
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>