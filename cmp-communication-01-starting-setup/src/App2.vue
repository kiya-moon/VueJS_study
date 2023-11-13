<!-- 부모 컴포넌트 -->

<!-- v-for 적용해보기 -->
<!-- script에 만들어둔 data를 가지고 와서 <friend-contact>에 v-for로 넣어줄 수 있다 -->
<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
      ></friend-contact>
    </ul>
  </section>
</template>
<!-- :is-favorite="true" >>> 전부 true로 출력되므로 :is-favorite="friend.isFavorite"로 변경하여
     friend 객체의 isFavorite 프로퍼티를 가진다 -->

<!-- 자식에서 emit()으로 전달하는 커스텀이벤트는, 부모에서 v-on으로 수신받으면 된다 -->
<!-- @커스텀이벤트명="이벤트가 발생했을 때 실행되어야 할 JavaScript 코드" -->

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false
        },
      ],  // 하지만 이 상태에서는 'Toggle Favorite' 버튼을 눌렀을 때 자식 컴포넌트 내부에서만 값이 바뀔 뿐
          // friends 데이터에서는 변경되지 않는다.
          // 이게 만약 데이터베이스에서 받은 값이라면 데이터베이스로 돌려보내기도 해야한다
          // 즉, 컴포넌트 내부에서만 바뀌는 건 의미가 없음
          // props를 부모에서 자식으로 전달했다면, 자식에서 부모로 'Toggle Favorite' 상태 변경 값을 전달해야한다
          
          // How?
          // 일반 HTML 코드에서는 버튼 클릭 시 우리가 수신할 수 있는 클릭 이벤트를 발생시켜서 알린다
          // 컴포넌트가 부모에게 무언가 일어났음을 알리고자 한다면, 컴포넌트는 부모가 수신할 이벤트를 발생시켜야 한다
    };
  },
  methods: {
    // FriendContact.vue에서 전달한 this.id는 toggleFavortieStauts의 첫번째 인수로 들어온다
    // 인수명은 개발자 자유
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(friend => friend.id === friendId);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
