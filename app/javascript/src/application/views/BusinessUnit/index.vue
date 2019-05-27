<template>
  <div>
    <div class="section-description">
      A quelle BU appartient {{ electedUser.firstName }}?
      <div class="user-container">
       <img class="mug-shot" :src="`photos/${electedUser.photo}`"/>
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
      userHasChosenBu() {
        return this.chosenBu !== null;
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
        this.chosenBu = null;
        for (let i = this.users.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.users[i], this.users[j]] = [this.users[j], this.users[i]];
        }
        this.batch = this.users.slice(0, 6)
        this.electedUser = this.batch[Math.floor ( Math.random() * this.batch.length )];
      },
      checkBuAnswer(selectedBu) {
        this.chosenBu = selectedBu;
        setTimeout(this.fetchUsers, 1500);
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

<style lang="sass" scoped>
  .section-description {
    font-size: 2em;
    font-family: 'Lilita One', cursive;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
  }

  .bu-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
 
  .mug-shot {
    border-radius: 50%;
    height: 200px;
    border: 4px solid transparent;
    transition: .5s ease linear;
  }
 
  .bu-choice {
    color: #1fbded;
    font-family: 'Lilita One', cursive;
    padding: 12px 30px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    cursor: pointer;
    transition: .5s ease;

    &:hover {
      border: 1px solid #1fbded;
      color: white;
    }
  }

  .banner--right {
    background-image: url('https://media.giphy.com/media/qvkiDE3xwRPdm/giphy.gif');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    font-size: 3em;
    text-align: center;
  }

  .banner--wrong {
    background-image: url('https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif');
    background-size: contain;
    color: white;
    font-size: 3em;
    text-align: center;
  }

  #banner {
    position : absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 50vw;
  }

  .banner-hidden {
    display: none;
  }
</style>
