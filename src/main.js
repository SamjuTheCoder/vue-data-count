import Vue from 'vue'
import DataCount from './components/DataCount.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(DataCount),
}).$mount('#app')
