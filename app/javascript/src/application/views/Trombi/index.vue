<template>
  <div id="trombi">
    <div class="section-description">
      Trombi de tout Skello - truc
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
  #trombi {
    display: flex;
    justify-content: center;
  }
</style>

