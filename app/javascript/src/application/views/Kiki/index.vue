<template>
  <div id='kiki'>
    <div class='section-description'>Kiki {{ electedUser.firstName }}?</div>
    <div class='users-list-container'>
      <div
        v-for='user in batch'
        class='user-container'
        :key="user.firstName"
      >
        <img
          :class="checkAnswerClass(user)"
          :src="`photos/${user.photo}`"
          class="mug-shot mug-shot-kiki"
          @click='checkAnswer(user)'
        />
      </div>
    </div>
    <div id="banner" v-if='userHasChosen' :class='bannerClass()'>
      {{ this.kikiBannerText }}
    </div>
  </div>
</template>

<script>
  import {
    users, coachBu, salesBu, recrutementBu, produitBu, grandsComptesBu,
    techBu, sdrBu, marketingBu, associesBu, opsBu, teamLeadersBu, BUList
  } from '../../constants.js'

  export default {
    name: 'Kiki',
    data: function () {
      return {
        chosenUser: null,
        users: users,
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
    },
    methods: {
      fetchUsers() {
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
    }
  }
</script>

<style lang="sass" scoped>
  #kiki {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .section-description {
    font-size: 2em;
    font-family: 'Lilita One', cursive;
    color: white;
    width: 100%;
    text-align: center;
  }
 
  .mug-shot {
    border-radius: 50%;
    height: 200px;
    max-height: 33vh;
    border: 4px solid transparent;
    transition: .5s ease linear;


    &.small {
      height: 50px;
    }

    &.mug-shot-kiki {
      cursor: pointer;
    }
  }

  .correct {
    background-color: red;
    border: 4px solid green;
  }

  .wrong {
    border: 4px solid red;
  }

  .user-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .users-list-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1em;
    font-family: 'Lilita One', cursive;
    width: 800px;
  }

  .banner--right {
    background-image: url('https://media.giphy.com/media/qvkiDE3xwRPdm/giphy.gif');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    font-size: 3em;
    text-align: center;
    height: 50vh;
    width: 50vw;
  }

  .banner--wrong {
    background-image: url('https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif');
    background-size: contain;
    color: white;
    font-size: 3em;
    text-align: center;
    height: 50vh;
    width: 50vw;
  }
 
  #banner {
    position : absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .banner-hidden {
    display: none;
  }
</style>
