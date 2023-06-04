<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'],

  /**
   * 부모 컴포넌트 App.vue 에서 전달한 topics를 반환받는다.
   */
  inject: ['topics'],
  // emits: ['select-topic']
};
</script>
