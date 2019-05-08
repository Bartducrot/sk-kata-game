<template>
  <div v-if="chosenGame ==='kiki'" id='app'>
    <div class='initial-message white'>{{ firstMessage }}</div>
    <div class="select-container">
      <select v-model="chosenGame">
        <option value="kiki">Kiki</option>
        <option value="BU">BU</option>
        <option value="trombi">trombi</option>
        <option value="timeline">Timeline</option>
      </select>
    </div>
    <div class='section-description'>Kiki {{ electedUser.firstName }}?</div>
    <div class='users-list-container'>
      <div
        v-for='user in batch'
        class='user-container'
        :key="user.firstName"
        @click='checkAnswer(user)'
      >
        <img :class="checkAnswerClass(user)" class="mug-shot" :src="`photos/${user.photo}`"/>
      </div>
    </div>
    <div id="banner" v-if='userHasChosen' :class='bannerClass()'>
      {{this.kikiBannerText}}
    </div>
  </div>
  <div v-else-if="chosenGame ==='BU'" id="app">
    <div class='initial-message white'>{{ firstMessage }}</div>
    <div class="select-container">
      <select v-model="chosenGame">
        <option value="kiki">Kiki</option>
        <option value="BU">BU</option>
        <option value="trombi">trombi</option>
        <option value="timeline">Timeline</option>
      </select>
    </div>
    <div class="section-description">
      A quelle BU appartient {{ electedUser.firstName }}?
      <div class="user-container">
       <img :class="checkAnswerClass(electedUser)" class="mug-shot" :src="`photos/${electedUser.photo}`"/>
      </div>
    </div>
    <div class="bu-list">
      <div v-for="bu in BUList" class="bu-choice" :key="bu" @click="() => checkBuAnswer(bu)">
        {{ bu }}
      </div>
    </div>
    <div id="banner" v-if='userHasChosenBu' :class='buBannerClass()'>
      {{this.buBannerText}}
    </div>
  </div>
  <div v-else-if="chosenGame ==='trombi'" id="app">
    <div class='initial-message white'>{{ firstMessage }}</div>
    <div class="select-container">
      <select v-model="chosenGame">
        <option value="kiki">Kiki</option>
        <option value="BU">BU</option>
        <option value="trombi">trombi</option>
        <option value="timeline">Timeline</option>
      </select>
    </div>
    <div class="section-description">
      Trombi de tout Skello
    </div>
    <div class="users-list-container trombi-list">
      <div v-for="user in users" :key="user.firstName" class="user-container">
        <img :class="checkAnswerClass(user)" class="mug-shot" :src="`photos/${user.photo}`"/>
        <div class="name">
          {{ user.firstName }}
          <ul class="user-bu-list-container user-bu-list">
            <li v-for="bu in user.businessUnits" :key="bu + user.firstName">
              {{ bu }}{{ ' ' }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div v-else id="app">
    <div class='initial-message white'>{{ firstMessage }}</div>
    <select v-model="chosenGame">
      <option value="kiki">Kiki</option>
      <option value="BU">BU</option>
      <option value="trombi">trombi</option>
      <option value="timeline">Timeline</option>
    </select>
    <div class='section-description'>Qui est arrivé quand?</div>
    <TimeLine
      :users="users"
    />
  </div>
</template>

<script>
  import {
    users, coachBu, salesBu, recrutementBu, produitBu, grandsComptesBu,
    techBu, sdrBu, marketingBu, associesBu, opsBu, teamLeadersBu, BUList
  } from './constants.js'

  import TimeLine from './TimeLine'

  export default {
    components: { TimeLine },
    data: function () {
      return {
        chosenGame: 'kiki',
        chosenUser: null,
        chosenBu: null,
        firstMessage: "skello",
        users: users,
        BUList: BUList,
        electedUser: {firstName: '', photo: ''},
        batch: [],
      }
    },
    mounted() {
      this.fetchUsers();
    },
    computed: {
      userHasChosen() {
        return this.chosenUser !== null;
      },
      userHasChosenBu() {
        return this.chosenBu !== null;
      },
      kikiWrongAnswer() {
        return (this.userHasChosen && this.chosenUser !== this.electedUser);
      },
      kikiRightAnswer() {
        return (this.userHasChosen && this.chosenUser === this.electedUser);
      },
      kikiBannerText() {
        if (this.kikiRightAnswer) return 'Yay! We did it!!';
        return `Tu as confondu ${this.chosenUser.firstName} avec ${this.electedUser.firstName}, gros boulet`;
      },
      buRightAnswer() {
        return (this.userHasChosenBu && this.electedUser.businessUnits.includes(this.chosenBu) )
      },
      buWrongAnswer() {
        return (this.userHasChosenBu && !this.electedUser.businessUnits.includes(this.chosenBu) )
      },
      buBannerText() {
        if (this.buRightAnswer) return 'Yay! We did it!!';
        return `Nope!`;
      },
    },
    methods: {
      fetchUsers() {
        this.chosenUser = null;
        this.chosenBu = null;
        for (let i = this.users.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.users[i], this.users[j]] = [this.users[j], this.users[i]];
        }
        this.batch = this.users.slice(0, 6)
        this.electedUser = this.batch[Math.floor ( Math.random() * this.batch.length )];
      },
      checkAnswer(selectedUser) {
        this.chosenUser = selectedUser;
        setTimeout(this.fetchUsers, 1500);
      },
      checkBuAnswer(selectedBu) {
        this.chosenBu = selectedBu;
        setTimeout(this.fetchUsers, 1500);
      },
      checkAnswerClass(user) {
        const uRight = this.kikiRightAnswer && this.chosenUser === user
        const uWrong = this.kikiWrongAnswer && this.chosenUser === user
        return {
          correct: uRight,
          wrong: uWrong,
        }
      },
      bannerClass() {
        return {
          'banner--right': this.kikiRightAnswer,
          'banner--wrong': this.kikiWrongAnswer,
        }
      },
      buBannerClass() {
        return {
          'banner--right': this.buRightAnswer,
          'banner--wrong': this.buWrongAnswer,
        }
      }
    }
  }
</script>

<style lang='css' scoped>

</style>
