<!-- 6. 사용자가 학습 리소스를 추가할 수 있게 하는 페이지 
        사용자가 제목, 설명 및 링크를 입력할 수 있는 양식이 필요
        또한 버튼을 두 개 만들어서 학습 리소스 목록을 확인할 수 있는 화면과
        학습 리소스를 추가하는 양식 화면으로 전환할 수 있게 만들 예정-->
<template>
  <!-- 6-11. 양식을 base-card로 래핑해서 카드 형식으로 제작 -->
  <base-card>
    <!-- 7. 사용자에게서 입력받은 데이터 가져오기   -->
    <!-- 7-5. form이 제출되었을 때 submitData() 메서드가 트리거되도록 form 태그에 submit 리스너를 추가한다
              또한 브라우저 기본동작을 막기 위해 prevent 식별자를 사용한다  -->
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" >
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <!-- rows="3" : textarea에 세 줄까지 작성 가능 -->
        <textarea name="description" id="description" rows="3" ref="descInput" ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Title</label>
        <!-- url은 네이티브 HTML의 입력 요소 타입 중 하나
             type을 url로 설정하면 URL을 입력할 수 있다 -->
        <input id="link" name="link" type="url" ref="linkInput" >
      </div>
      <div class="form-control">
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  // 7-1. 양식이 제출되었을 때 트리거 될 메서드 작성
  // textarea와 input에 입력된 값을 가지고 오는 방법은 크게 두 가지
  // 1) data 프로퍼티를 통해 v-model과 입력 리스너로 모든 키 입력에 업데이트를 실행
  // 2) ref 활용 
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;
      
      // 8. AddResource 컴포넌트에서 사용자에게 빈테이터는 제출할 수 없다고 알려주는 방법
      // 8-1. trim을 사용하여 사용자가 입력한 값의 처음과 끝에서 공백을 없에 공백을 유효한 값으로 인식하지 않게 하고,
      //      enteredTitle, enteredDescription, enteredUrl 어느 쪽이든 빈값일 때는 그 결과를 반환해 addResource가 실행되지 않도록 한다 
      if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredUrl.trim() === '') {
        return;
      }

      // 7-4. addResource 메서드를 inject 키로 가져왔으므로 submitData에서도 addResource 메서드를 호출할 수 있다
      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    }
  }
}
</script>

<style>
  label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
