import Vue from 'vue';
import Vuex from 'vuex';

import { users } from '../constants.js'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    users: [],
    loaded: false,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    }, 
    setLoaded(state, loaded) {
      state.loaded = loaded;
    }
  },
  getters: {
    isLoaded: (state) => {
      return state.loaded;
    }
  },
  actions: {
    fetchUsers(context) {
      context.commit('setLoaded', false);
      context.commit('setUsers', users);
      context.commit('setLoaded', true);
    }
  },
})

export default store;