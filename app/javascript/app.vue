<template>
  <div id='app'>
    <div class='initial-message white'>{{ firstMessage }}</div>
    <div class='guess-who'>Kiki {{ electedUser.firstName }}?</div>
    <div class='users-list-container'>
      <div
        v-for='user in batch'
        class='user-container'
        :key="user.firstName"
        @click='checkAnswer(user)'
      >
        <img :class="checkAnswerClass(user)" class="mug-shot" :src="`photos/${user.photo}`"/>>
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
        if (this.rightAnswer) return 'Yay! We did it!!';
        return `Tu as confondu ${this.chosenUser.firstName} avec ${this.electedUser.firstName}, gros boulet`;
      },
    },
    methods: {
      fetchUsers() {
        this.users = [
          { firstName: 'Aéla', photo: 'aela.jpeg' },
          { firstName: 'Agathe R', photo: 'agathe_r.jpeg' },
          { firstName: 'Agathe T', photo: 'agathe_t.jpeg' },
          { firstName: 'Alexis', photo: 'alex.jpeg' },
          { firstName: 'Ariane', photo: 'ari.jpeg' },
          { firstName: 'Arthur', photo: 'arthur.jpeg' },
          { firstName: 'Bart', photo: 'bart.jpeg' },
          { firstName: 'Carlotta', photo: 'carlos.jpeg' },
          { firstName: 'Celestin', photo: 'celo.jpeg' },
          { firstName: 'Charlotte', photo: 'charlotte.jpeg' },
          { firstName: 'Chloé', photo: 'chloe.jpeg' },
          { firstName: 'Constance C', photo: 'constance_c.jpeg' },
          { firstName: 'Constance P', photo: 'constance_p.jpeg' },
          { firstName: 'Darivath', photo: 'dari.jpeg' },
          { firstName: 'Eliott', photo: 'eliott.jpeg' },
          { firstName: 'Florian', photo: 'flo.jpeg' },
          { firstName: 'Foucauld', photo: 'foucauld.jpeg' },
          { firstName: 'Héloïse', photo: 'heloise.jpeg' },
          { firstName: 'Hortense', photo: 'hortense.jpeg' },
          { firstName: 'Jeremy', photo: 'jeremy.jpeg' },
          { firstName: 'Julia', photo: 'julia.jpeg' },
          { firstName: 'Quitterie', photo: 'kit.jpeg' },
          { firstName: 'Jubeo', photo: 'jubeo.jpeg' },
          { firstName: 'Julie', photo: 'julie.jpeg' },
          { firstName: 'Lola', photo: 'lola.jpeg' },
          { firstName: 'Emmanuelle', photo: 'manue.jpeg' },
          { firstName: 'Marie', photo: 'marie.jpeg' },
          { firstName: 'Mathilde', photo: 'mathilde.jpeg' },
          { firstName: 'Minéa', photo: 'mims.jpeg' },
          { firstName: 'Nicolas', photo: 'nico.jpeg' },
          { firstName: 'Nisrine', photo: 'niss.jpeg' },
          { firstName: 'Raphaël', photo: 'raph.jpeg' },
          { firstName: 'Samy', photo: 'samy.jpeg' },
          { firstName: 'Thibault', photo: 'thib.jpeg' },
          { firstName: 'Thomas', photo: 'toto.jpeg' },
          { firstName: 'Tristan', photo: 'tristan.jpeg' },
          { firstName: 'Victor C', photo: 'victor_c.jpeg' },
          { firstName: 'Victor L', photo: 'victor_l.jpeg' },
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
        setTimeout(this.fetchUsers, 1500);
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
