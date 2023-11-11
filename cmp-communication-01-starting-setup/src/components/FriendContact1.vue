<!-- App.vue의 템플릿 내부에서 사용하는 자식 컴포넌트 -->
<template>
  <li>
    <!-- 이곳은 HTML 코드이지만 중괄호를 통해 props를 받을 때는 camelCase를 사용한다 -->
    <!-- this.키워드 없이 props를 적어주면 된다 -->
    <!-- <h2>{{ name }} {{ isFavorite === "1" ? "(Favorite)" : "" }}</h2> -->

    <!-- <h2>{{ name }} {{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2> -->
    
    <!-- isFavorite이 boolean 타입이기 때문에 변경 -->
    <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2>

    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // JavaScript에서 이름을 쓸 때는 camelCase 사용
  // JavaScript는 kebob-case를 인식하지 못함

  // HTML 단에서 전달한 정보를 props를 통해서 받는다
  // props는 해당 컴포넌트 내에서 this. 키워드를 통해 가져다 사용 가능하다
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],  
  
  // props를 나열하는 것은 얻게 될 프로퍼티가 무엇인지만 Vue에 알려주고 나머지 정보는 알려주지 않는다
  // 최소한의 정보만 전달하는 것
  // 복잡한 프로젝트나 팀 프로젝트에서는 프로퍼티에 대한 정보를 더 많이 공유해야 할 수도 있다
  // (필요한 프로퍼티를 빠트렸을 때 알려주기 위한 역할 등을 위해서)
  // 배열 >>> 객체
  props: {
    // name: String  // name 프로퍼티의 타입을 명시
    // 객체도 전달할 수 있다
    name: {
      type: String,
      required: true  // required: true > 해당 컴포넌트가 필수적으로 요구하는 프로퍼티
                      // required: false > 필수x
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    // isFavorite: {
    //   type: String,
    //   required: false,
    //   // required가 false일 때 기본값을 설정할 수 있다
    //   default: '0',  // function(){} 도 설정 가능. 기본값을 얻기 위해 복잡한 코드 스니펫을 실행하는 것
    //   // 검증자 함수
    //   // 프로퍼티에 제공되는 값을 가져온 다음 선택된 유효성 검사 로직을 적용해 유효한 값인지 아닌지를 확인해 준다
    //   validator: function(value){
    //     return value === '1' || value === '0';  // isFavorite의 값이 1일 경우 true, 0일 경우 false를 반환
    //                                             // 이로써 isFavorite의 값은 1 또는 0만 가지게 된다
    //   }
    // }
    // >>> isFavorite type을 boolean 타입으로 변경한다면, 무조건 true or false이기 때문에 유효성검증을 하지 않아도 된다
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    }
  },  
  // props에 대한 정보를 얼마나 상세히 적을 것인가에 대한 부분은 개발자가 정하는 것
  // required: true일 때 해당 props를 사용하지 않으면 오류는 나지 않지만
  // 개발자 도구에서 확인 시 경고가 뜬다
  // props를 상세하게 적을 경우 이런 경고를 통해 잘못된 부분을 찾을 수 있다

  data() {
    return {
      detailsAreVisible: false,
      // 지금까지는 Vue app 내부에 필요한 데이터를 저장했지만,
      // 컴포넌트는 마크업과 특정 로직이 포함된 재사용 가능한 컴포넌트가 목적이기 때문에
      // 외부에서 데이터를 받는 형태가 바람직하다
      // 여기서 외부란 이 컴포넌트를 사용하는 앱 또는 컴포넌트를 의미한다
      // 이 예제의 경우는 FriendContact 컴포넌트를 사용하고 있는 App.vue가 됨
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },

      // 부모에게 받은 데이터를 FriendContact.vue의 초기 데이터 취급하기 위해 data 프로퍼티 추가
      // props와는 다른 이름 사용
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    // toggleFavorite() {
    //   if(this.isFavorite === '1') {
    //     this.isFavorite = '0';
    //   } else {
    //     this.isFavorite = '1';
    //   }
    // } // => error  Unexpected mutation of "isFavorite" prop 발생
      // props는 불변하기 때문에 props를 변경하려는 로직으로 인해 에러가 발생한다
      // props는 왜 불변해야 할까?
      // Vue는 단방향 데이터 플로우(Unidirectional data flow) 개념을 사용하기 때문
      // App.vue에서 FriendContact.vue로 전달되는 데이터는 App.vue에서는 변경 가능하지만 FriendContac.vue에서는 변경이 불가한 개념

      // props 값의 변경이 필요할 때는 어떻게 할까?
      // 1. 부모에게 변경하고 싶다고 알린다
      //    그러면 부모가 자체적으로 데이터를 변경하고, 업데이트된 데이터를 자식에게 돌려보낸다
      // 2. 전달받은 데이터를 FriendContact.vue의 초기 데이터로 취급해 직접 변경한다
      //    다만 변경사항은 자식에만 적용되고 부모에는 적용되지 않는다

    toggleFavorite() {
      // if(this.friendIsFavorite === '1') {
      //   this.friendIsFavorite = '0';
      // } else {
      //   this.friendIsFavorite = '1';
      // }

      // boolean 타입으로 변경되었으니 로직도 변경
      this.friendIsFavorite = !this.friendIsFavorite;

    } // => friendIsFavorite은 부모에게서 받은 props의 값을 사용하지만, 
      //    FriendContact.vue에서 초기화하였기 때문에 값을 변경해도 에러가 발생하지 않는다
  },
};
</script>
