<template>
  <div>
    <h2>{{ userName }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
import { 
  computed, 
  inject,
  // vue로부터 불러올 수 있는 생명주기 함수
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted, 
} from 'vue';

export default{
  props: ['firstName', 'lastName'],

  setup(props, context) {
    const uName = computed(function() {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge'); 

    console.log(context);

    onBeforeMount(function() {
      console.log('onBeforeMount');
    })
    onMounted(function() {
      console.log('onMounted');
    })
    // >>> 렌더링되면서 onMounted까지 콘솔에 출력됨

    onBeforeUpdate(function() {
      console.log('onBeforeUpdate');
    })
    onUpdated(function() {
      console.log('onUpdated');
    })
    // >>> Change Age 버튼 클릭 시 onUpdated까지 콘솔에 출력됨 


    onBeforeUnmount(function() {
      console.log('onBeforeUnmount');
    })
    onUnmounted(function() {
      console.log('onUnmounted');
    })
    // >>> 데이터가 삭제되면 onUnmounted까지 출력됨

    return { userName: uName, age };
  }
}
</script>