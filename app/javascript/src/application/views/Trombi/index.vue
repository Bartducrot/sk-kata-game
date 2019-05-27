<template>
  <div id="trombi">
    <div class="section-description">
      Trombi de tout Skello
    </div>
    <div class="users-list-container trombi-list">
      <div v-for="user in users" :key="user.firstName" class="user-container user-container-trombi">
        <img class="mug-shot" :src="`photos/${user.photo}`"/>
        <div class="name">
          {{ user.firstName }}
          <ul class="user-bu-list-container user-bu-list">
            <li v-for="bu in user.businessUnits" :key="bu + user.firstName">
              {{ bu }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

moment.locale('fr');

import { users } from '../../constants.js'

export default {
  props: {},
  data() {
    return {
      users: users,
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
  .section-description {
    font-size: 2em;
    font-family: 'Lilita One', cursive;
    color: white;
  }

  .users-list-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1em;
    font-family: 'Lilita One', cursive;
    width: 1000px;
  }

  .mug-shot {
    border-radius: 50%;
    height: 200px;
    border: 4px solid transparent;
    transition: .5s ease linear;


    &.small {
      height: 50px;
    }

    &.mug-shot-kiki {
      cursor: pointer;
    }
  }
 
  .user-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .3s ease linear;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 20px;

    &.user-container-trombi {
      min-height: 375px;

      &:hover {
        border: 1px solid #1fbed4;
      }
    }

    .user-bu-list {
      opacity: 0;
    }
    &:hover .user-bu-list {
      opacity: 1;
    }
  }
</style>

