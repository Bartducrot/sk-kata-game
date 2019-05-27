<template>
  <div id="app">
    <div class='initial-message white'>s<span class='blue'>k</span>ello</div>
    <div class="navbar">
      <router-link :to="{name: 'kiki'}">KIKI</router-link>
      <router-link :to="{name: 'businessUnit'}">businessUnit</router-link>
      <router-link :to="{name: 'trombi'}">Trombi</router-link>
      <router-link :to="{name: 'timeline'}">TimeLine</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    components: {},
    data: function () {
      return {}
    },
    mounted() {},
    computed: {},
    methods: {}
  }
</script>

<style lang='scss' scoped>
#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.blue {
  color: #1fbed4;
}

.white {
  color: white;
}

.initial-message {
  font-size: 3em;
  text-align: center;
  font-family: 'Lilita One', cursive;
  margin: 1em;
}
</style>
