<!-- 부모 컴포넌트 -->
<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <!-- FriendContact 컴포넌트를 사용하고 있는 부분 -->
      <!-- 첫 번째는 Manuel 정보를, 두 번째는 Julie 정보를 전달하고자 함 -->
      <!-- 같은 컴포넌트를 여러 번 사용할 때 매번 다른 데이터로 설정한다는 개념은 핵심적인 개념이고, Vue에서는 이를 프롭스(props)라는 개념으로 사용할 수 있다  -->
      <!-- 프롭스(props)는 프로퍼티(property)의 줄임말로, 일종의 커스텀 HTML 속성 -->
      <!-- HTML 단에서 이름을 쓸 때는 kebob-case 사용 -->
      <friend-contact
        name="Manuel Lorenz"
        phone-number="0123 45678 90"
        email-address="manuel@localhost.com"
        is-favorite="1"
      ></friend-contact>
      <friend-contact
        name="Julie Jones"
        phone-number="0987 654421 21"
        email-address="julie@localhost.com"
        is-favorite="0"
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
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
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
