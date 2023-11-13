<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      ></knowledge-element>
      <!-- <knowledge-element>에서 @select-topic="$emit('select-topic', $event)" 삭제 -->
  </ul>
</template>

<script>
export default {
  // props: ['topics'],
  // 삽입
  // 주의. 오직 상위 레벨에서 제공된 것만 삽입할 수 있음
  inject: ['topics'],
  // emits: ['select-topic']
};
</script>