<template>
  <div id='app'>
    <div class='initial-message white'>{{ firstMessage }}</div>
    <div class='guess-who'>Kiki {{ selectedUser.firstName }}?</div>
    <div class='users-list-container'>
      <div
        v-for='user in users'
        class='user-container'
        @click='checkAnswer(user)'
      >
        <img class="mug-shot" :src="`photos/${user.photo}`">
        </img>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        firstMessage: "Skello",
        users: [],
        selectedUser: {firstName: '', photo: ''},
      }
    },
    mounted() {
      this.fetchUsers();
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
          { firstName: 'Bart', photo: 'bart.jpeg' },
          { firstName: 'Alex', photo: 'alex.jpeg' },
          { firstName: 'Ari', photo: 'ari.jpeg' },
          { firstName: 'Tristan', photo: 'dentiste.jpeg' },
          { firstName: 'Samy', photo: 'samy.jpeg' },
          { firstName: 'Kit', photo: 'Kit.jpeg' },
        ];
        this.selectedUser = this.users[Math.floor ( Math.random() * this.users.length )];
      },
      checkAnswer() {

      },
    }
  }
</script>

{/*<style lang='scss' scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
*/}
