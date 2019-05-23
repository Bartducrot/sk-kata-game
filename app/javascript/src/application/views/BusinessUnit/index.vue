<template>
  <div>
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
      {{ this.buBannerText }}
    </div>
  </div>
</template>

<script>
  import {
    users, coachBu, salesBu, recrutementBu, produitBu, grandsComptesBu,
    techBu, sdrBu, marketingBu, associesBu, opsBu, teamLeadersBu, BUList
  } from '../../constants.js'

  export default {
    data: function () {
      return {
        chosenGame: 'kiki',
        chosenUser: null,
        chosenBu: null,
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
