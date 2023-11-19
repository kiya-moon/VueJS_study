<!-- 6-1. 페이지 전환용 컴포넌트
          학습 리소스 부분의 진입점으로 단 한 번만 쓰일 것이기 때문에 TheReources.vue로 이름 지음 -->
<template>
  <!-- 6-2. BaseCard 컴포넌트를 래퍼로 사용해서 버튼을 카드형으로 표시 -->
  <base-card>
    <!-- 6-3. 버튼은 BaseButton 컴포넌트 사용 -->
    <!-- BaseButton 컴포넌트에는 클릭 리스너 등 이벤트 요소가 설정되어 있지 않지만,
         해당 컴포넌트에서 클릭 리스너 추가 시 정상 작동한다
         Why?
         Vue에 있는 특별한 동작 덕분인데, 커스텀 컴포넌트에 프로퍼티나 이벤트 리스너를 추가하면
         기본적으로 그 커스텀 컴포넌트 템플릿의 루트 수준의 요소까지 추가된 설정이 자동으로 전달된다
         즉, 여기에서 클릭 리스너를 추가하면 BaseButton.vue 템플릿의 네이티브 HTML 버튼에도 적용된다 -->
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <!-- 7-6. 탭을 전환해도 addResource 컴포넌트에서 입력중이던 데이터가 사리지지 않도록 keep-alive 추가 -->
  <!-- 6-4. 페이지 전환은 동적 컴포넌트 기능을 사용하여 구현 -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  // 6-10. 선택된 탭 강조를 위한 스타일 선택 추가
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    // 7-2. AddResource 컴포넌트에서 입력받은 데이터를 storedResources배열에 추가하는 메서드 작성
    //      selectedTab 값을 'stored-resources'로 지정해서 리소스를 추가할 때 탭이 바뀌도록 한다
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },

    // 9-1. removeResource 메서드 추가
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },

  },
  // 6-7. provide 키를 메서드 형태로 추가하고 data 프로퍼티에 추가한 StoredResources를 포인터로 가리킨 resources를 반환. 이렇게 하면 resources가 모든 자식 컴포넌트 및 손자 컴포넌트에까지 제공된다
  provide() {
    return {
      resources: this.storedResources,
      // 7-3. AddResource.vue의 submitData에서도 TheResources.vue에 추가한 addResource 메서드를 추가하기 위해 provide에 추가해준다
      addResource: this.addResource,
      // 9-2. LearningResource.vue에 deleteResource를 삽입하기 위해 provide에 추가
      deleteResource: this.removeResource
    };
  },
};
</script>

<style></style>
