import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import Parallax from 'vue-parallaxy'
import VueParticles from 'vue-particles'

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false
})

Vue.use(Parallax)
Vue.use(VueParticles)
