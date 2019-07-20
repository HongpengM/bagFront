import Vue from 'vue'
import App from './App'

import store from './store'
import cuCustom from './colorui/components/cu-custom.vue'
import {uniList, uniListItem} from '@dcloudio/uni-ui'

Vue.component('cu-custom',cuCustom)


Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
