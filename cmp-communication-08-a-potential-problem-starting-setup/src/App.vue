<!-- Purpose
    1. 컴포넌트가 함께 작동하는 방식에 대해 감 잡기
    2. 더 큰 애플리케이션을 구축하거나 데이터를 전달할 때 자주 겪는 문제들 확인하기 -->

<!-- 총 세 군데의 컴포넌트에서 'select-topic' 이벤트를 발생시켜 app에 전달하고 있고,
     'topic'도 두 곳의 컴포넌트에서 전달되고 있음
     중복처리로 보이기는 하나 이게 꼭 나쁘다고는 할 수 없음
     이 부분을 인지하고 고쳐보기로 하쟈 -->

<!-- App.vue는 topics가 필요한 active-element도 있고 knowledge-base도 있으며 마지막에 KnowledgeGrid.vue에 연결된다. 그러면 KnowledgeBase.vue에서 topic을 지우면 KnowledgeGrid.vue에 어떻게 전달할 수 있을까? -->

<!-- provide/inject 사용은 부모-자식 간에만 가능하고 이웃끼리는 x -->
<!-- 컴포넌트 간의 데이터 통신 매커니즘은 실제 프로퍼티와 커스텀 이벤트를 기본으로 해야 한다
     다만 불필요하게 통과해야만 하는 컴포넌트가 있을 때 provide/inject 사용을 고려해볼 수 있다 -->
<!-- provide/inject 사용 시에는 값이 어디에서 사용되었는 지 이해하려면 컴포넌트를 모두 살펴보아야 하기 때문에,
     큰 프로젝트에서는 번거로워질 수 있다 -->

<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <!-- <knowledge-base :topics="topics" @select-topic="activateTopic"></knowledge-base> -->
    <!-- porvide & inject 
         Vue가 제공하는 기능
         한 곳에서 데이터를 제공(provide)하고 해당 데이터를 다른 곳에서 사용(inject)하는 패턴-->
    <knowledge-base></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },

  // 제공
  // provide: {
  //   topics: [
  //       {
  //         id: 'basics',
  //         title: 'The Basics',
  //         description: 'Core Vue basics you have to know',
  //         fullText:
  //           'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
  //       },
  //       {
  //         id: 'components',
  //         title: 'Components',
  //         description:
  //           'Components are a core concept for building Vue UIs and apps',
  //         fullText:
  //           'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
  //       },
  //     ],
  // },  // => 이제 KnowledgeBase를 거치지 않아도 데이터가 전달됨
  //     //    하지만 topics 배열 코드가 중복되는 문제가 있음
  //     //    또한 provide의 topics 배열은 메모리에 새로 할당되는 데이터로, data의 topics와는 다르다
  //     //    때문에 data의 topics가 변경되어도 provide의 topics에 반영되지 않는다 

  // provide를 메서드로 변경
  provide() {
    return {
      // this 키워드로 data의 topics에 접근
      // key 이름은 개발자 마음대로
      topics: this.topics,
      selectTopic: this.activateTopic // this.activeTopic() x!!! 그냥 포인터로 가리키기만!!!
    }
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
  // 이걸로 provide/inject가 잘 작동하는 걸 알 수 있다는데 how??? 이해가 안되네ㅠㅠ
  mounted() {
    setTimeout(() => {
      this.topics.push({
        id: 'events',
        title: 'Events',
        description: 'Events are important in Vue',
        fullText: 'Events allow you to trigger code on demand!'
      });
    }, 3000);
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>