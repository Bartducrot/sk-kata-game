import Vue from 'vue';
import Vuex from 'vuex';

import { users } from '../constants.js'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    fetchUsers(context) {
      context.commit('setUsers', users)
    }
  },
})

export default store;