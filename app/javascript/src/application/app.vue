<template>
  <div id="app">
    <Navbar/>  
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Navbar from './partials/Navbar';

  export default {
    name: 'MainApp',
    components: { Navbar },
    data: function () {
      return {}
    },
    mounted() {
      // this.$store.commit('setUsers', users);
      this.fetchUsers();
      console.log("1");
    },
    computed: {},
    methods: {
      ...mapActions(['fetchUsers'])
    }
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
}
</style>
