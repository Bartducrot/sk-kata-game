/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios';

import App from '../src/application/app.vue'
import router from '../src/application/router/index.js'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('application'))
  const $csrfToken = document.querySelector('meta[name="csrf-token"]');

  const axiosInstance = axios.create({
    headers: {
      'X-CSRF-Token': $csrfToken ? $csrfToken.content : '',
    },
  });
  
  Vue.use(VueAxios, axiosInstance);

  const app = new Vue({
    el,
    router,
    render: h => h(App)
  })
})
