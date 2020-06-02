import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style/style.styl'
import 'noto-sans-tc/noto_sans_tc_regular/css.css'
import 'vue-loaders/dist/vue-loaders.css'
import VueLoaders from 'vue-loaders'

// 必要引用
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faTrashAlt, faCog, faListUl, faClock, faHistory, faBellSlash } from '@fortawesome/free-solid-svg-icons'

import draggable from 'vuedraggable'
import VuePageTransition from 'vue-page-transition'
import VueAudio from 'vue-audio-better'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'UA-168244762-1' }
})

Vue.use(VueLoaders)

Vue.use(VueAudio)
Vue.use(VuePageTransition)
library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faTrashAlt, faCog, faListUl, faClock, faHistory, faBellSlash)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('draggable', draggable)

Vue.config.productionTip = false
const template = `
<div>
  <vue-loaders-ball-beat color="red" scale="1"></vue-loaders-ball-beat>
  <hr/>
  <vue-loaders name="ball-beat" color="red" scale="1"></vue-loaders>
</div>
`
new Vue({
  router,
  store,
  template,
  render: h => h(App)
}).$mount('#app')
