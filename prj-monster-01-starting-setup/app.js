// methods의 attackMonster()와 attackPlayer()는 같은 공식을 이용해서 임의의 수를 계산하고 있으므로 개별 함수로 아웃소싱
// Vue의 메서드가 아니라 일반 JavaScript 함수를 사용한다
// JavaScript 코드 내에서만 호출할 것이고 Vue가 제어하는 데이터 프로퍼티 등은 사용하지 않을 것이며, 템플릿, 즉 HTML 코드에서도 호출하지 않을 거라면 일반 JavaScript 함수를 사용해도 ok
function getRandomValue(min, max) {
  return Math.floor(Math.random() *(max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      // player와 monster의 체력
      playerHealth: 100,
      monsterHealth: 100,

      // 지금이 몇 턴째인지를 인식하기 위한 data 프로퍼티
      currentRound: 0,

      // watch가 승자를 감시만하는 게 아니라 HTML 코드에 반영할 수 있게 데이터 프로퍼티를 추가한다
      // 게임 시작 시에는 승자가 없으므로 null
      winner: null,

      // 배틀 로그를 담을 수 있는 배열
      logMessages: []
    }
  },
  // 게임결과를 표시하기 위해 공격 시의 모든 methods마다 체력바를 체크하는 코드를 만드는 것은 비효율적이므로 watch를 이용해서 monster와 player의 체력바를 감시한다
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // A draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // Player lost
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // A draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // Monster lost
        this.winner = 'player';
      }
    }
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return {width: this.monsterHealth + '%'};
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return {width: this.playerHealth + '%'};
    },
    mayUserSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    // 몬스터를 공격하면 몬스터의 체력이 떨어진다(무작위 값 사용)
    attackMonster() {
      this.currentRound++;
      // 5 ~ 12 사이의 랜덤한 공격값
      // Math.random()에 최대값 - 최소값을 곱하고
      // Math.floor()를 사용하여 나온 값(반올림한 정수 값)에
      // 최소값을 더한다
      // const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;

      this.addLogMessage('player', 'attack', attackValue);

      // monster를 공격하면 monster도 바로 player를 공격하도록 만든다
      // this 키워드를 사용하면 데이터 프로퍼티도 액세스 할 수 있고, Vue 인스턴스 구성 객체 내의 메서드에도 액세스 할 수 있음
      // 데이터 프로퍼티와 마찬가지로 methods도 모두 다 내부에서 관리되는 전역적 객체로 통합되기 때문
      this.attackPlayer();
    },

    // player가 monster를 공격하면, monster도 player에게 피해를 입힌다
    attackPlayer() {
      // const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;

      this.addLogMessage('monster', 'attack', attackValue);
    },

    // attack보다 피해량이 큰 special attack
    // 3번째 턴마다 한 번씩 쓸 수 있다
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'special-attack', attackValue);
      this.attackPlayer();
    },

    // player 힐링
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      this.addLogMessage('player', 'heal', healValue);

      // player가 회복할 때도 monster가 공격하도록 한다
      this.attackPlayer();
    },

    // 재시작 기능. 모든 data 프로퍼티는 default 값으로 되돌린다
    restartGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },

    // 항복 기능
    surrender() {
      this.winner = 'monster';
    },

    // 배틀 로그 메세지 추가
    addLogMessage(who, what, value) {
      // 새 메세지는 언제나 배열의 맨 처음에 위치시킨다
      // .push()는 배열의 맨 뒤에 아이템을 추가해주지만, .unshift()는 배열의 맨 처음에 추가해준다
      this.logMessages.unshift({
        // 로그 메세지가 추가되는 형식을 정한다
        // who, what, value를 모두 받아야하므로 객체 사용
        // key-value 타입으로 들어간다
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    }
  }
});

app.mount('#game');
