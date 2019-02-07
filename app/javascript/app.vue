<template>
  <div id='app'>
    <div class='initial-message white'>{{ firstMessage }}</div>
    <div class='guess-who'>Kiki {{ electedUser.firstName }}?</div>
    <div class='users-list-container'>
      <div
        v-for='user in batch'
        class='user-container'
        @click='checkAnswer(user)'
      >
        <img :class="checkAnswerClass(user)" class="mug-shot" :src="`photos/${user.photo}`">
        </img>
      </div>
    </div>
    <div id="banner" v-if='userHasChosen' :class='bannerClass()'>
      {{this.bannerText}}
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        chosenUser: null,
        firstMessage: "Skello",
        users: [],
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
      wrongAnswer() {
        return (this.userHasChosen && this.chosenUser !== this.electedUser);
      },
      rightAnswer() {
        return (this.userHasChosen && this.chosenUser === this.electedUser);
      },
      bannerText() {
        if (this.rightAnswer) return 'YOU DID IT (again)';
        return 'YOU DIED';
      },
    },
    methods: {
      fetchUsers() {
        this.users = [
          { firstName: 'Bart', photo: 'bart.jpeg' },
          { firstName: 'Celestin', photo: 'celo.jpeg' },
          { firstName: 'Agathe', photo: 'agathe.jpeg' },
          { firstName: 'Victor', photo: 'victor_l.jpeg' },
          { firstName: 'Benoit', photo: 'benoit.jpeg' },
          { firstName: 'Hien-Chanh', photo: 'HC.jpeg' },
          { firstName: 'Alex', photo: 'alex.jpeg' },
          { firstName: 'Ari', photo: 'ari.jpeg' },
          { firstName: 'Tristan', photo: 'dentiste.jpeg' },
          { firstName: 'Samy', photo: 'samy.jpeg' },
          { firstName: 'Kit', photo: 'Kit.jpeg' },
        ];
        this.chosenUser = null;
        for (let i = this.users.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.users[i], this.users[j]] = [this.users[j], this.users[i]];
        }
        this.batch = this.users.slice(0, 6)
        this.electedUser = this.batch[Math.floor ( Math.random() * this.batch.length )];
      },
      checkAnswer(selectedUser) {
        this.chosenUser = selectedUser;
        setTimeout(this.fetchUsers, 1250);
      },
      checkAnswerClass(user) {
        const uRight = this.rightAnswer && this.chosenUser === user
        const uWrong = this.wrongAnswer && this.chosenUser === user
        return {
          correct: uRight,
          wrong: uWrong,
        }
      },
      bannerClass() {
        return {
          'banner--right': this.rightAnswer,
          'banner--wrong': this.wrongAnswer,
        }
      }
    }
  }
</script>

<style lang='css' scoped>

</style>
