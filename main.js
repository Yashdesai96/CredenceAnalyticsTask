// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
const apikey = '6b7e1bc8'
var imdb = ''
var url = ''

new Vue({
  el: '#app',
  data: {
    results: {},
    newdata: {
      title: null,
      year: null,
      img: null,
      genre: null,
      actors: null
    }
  },
  mounted () {
    this.getId()
  },
  methods: {
    getId () {
      imdb = document.getElementById('myText').value
      url = 'http://www.omdbapi.com/?t=' + imdb + '&apikey=' + apikey
      axios.get(url).then(response => { this.results = response.data })
    },
    display () {
      document.getElementById('ta').style.display = 'block'
      document.getElementById('ta1').style.display = 'block'
      document.getElementById('ta3').style.display = 'block'
      document.getElementById('ta4').style.display = 'block'
    },
    hide () {
      document.getElementById('ta').style.display = 'none'
      document.getElementById('ta1').style.display = 'none'
      document.getElementById('ta3').style.display = 'none'
      document.getElementById('ta4').style.display = 'none'
    },
    add () {
      document.getElementById('title').value = ''
      document.getElementById('year').value = ''
      document.getElementById('img').value = ''
      document.getElementById('genre').value = ''
      document.getElementById('actors').value = ''
    }
  }
})
