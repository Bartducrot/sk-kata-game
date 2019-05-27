<template>
  <div id="navbar">
    <div class='initial-message white'>s<span class='blue'>k</span>ello</div>
    <div class="navbar-link">
      <router-link :to="{name: 'kiki'}">KIKI</router-link>
      <router-link :to="{name: 'businessUnit'}">Business Unit</router-link>
      <router-link :to="{name: 'trombi'}">Trombi</router-link>
      <router-link :to="{name: 'timeline'}">TimeLine</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
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
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.navbar-link {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  a {
    min-height: 5%;
    color: white;
    text-decoration: none;
    width: 20%;
    text-align: center;
    padding: 50px 0;
    font-size: 1.5em;
    font-family: 'Permanent Marker', cursive;

    &:hover {
      color: #1fbed4;
      font-weight: bold;
    }
  }
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
  margin-left: 20px;
}
</style>
