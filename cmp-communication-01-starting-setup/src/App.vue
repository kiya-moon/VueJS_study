<!-- 부모 컴포넌트 -->
<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <!-- NewFriend.vue에서 데이터를 수신받기 위해 연결해준다 > @add-contact -->
    <!-- addContact > 여기서 정의해야 하는 메서드. 이벤트에 썼던 이름과 똑같게 할 필요는 없다. 개발자 마음대로 -->
    <new-friend @add-contact="addContact"></new-friend>
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
        @delete="deleteContact"
      ></friend-contact>
    </ul>
  </section>
</template>

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
      ], 
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(friend => friend.id === friendId);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },

    // 위에서 정의한 addConcat()
    // 이름, 전화번호, 이메일 주소 총 세 개의 데이터를 받아야 한다
    // 매개변수의 이름은 개발자 마음이지만 순서는 변경x. 이벤트를 발생시킬 때 정한 순서와 같아야 한다!!
    addContact(name, phone, email){
      const newFriendContact = {
        // 왼: 프로퍼티 이름 / 우: 인수 이름
        // 여기서 프로퍼티 이름과 인수 이름이 같은 것은 우연
        // 프로퍼티 이름은 더미 객체에 있었던 것과 같아야 한다
        id: new Date().toISOString(), // 가상 고유 id > JavaScript에서 얻을 수 있는 현재 날짜를 예시로 사용
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };
      this.friends.push(newFriendContact); // this.friends를 통해 App.vue의 Config 객체에 있는 friends 데이터 프로퍼티에 접근하여 newFriendContact를 푸쉬해준다
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter(friend => friend.id !== friendId); // filter : JavaScript 내장 메서드
                                                                            // 호출하는 배열에 기반한 새 배열을 반환한다
                                                                            // 따라서 filter에는 함수를 인수로 제공해야 한다
                                                                            // 함수가 참을 반환하면 요소가 유지되고, 거짓을 반환하면 요소가 없어진다
                                                                            // 요소 내 friend의 id가 friendId와 같으면 거짓을 반환(friends에서 삭제해야 하니까)
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
#app li,
#app form {
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
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
