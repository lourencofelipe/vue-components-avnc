import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.component('Async', (resolve) => {
//   setTimeout(() => {
//     resolve({
//       template: '<h2>Async Component</h2>'
//     })
//   }, 2000)
// })

// call reject in case of error

// Vue.component(
//   'Async',
//    () => import('./components/Asynchronous.vue')
// )
new Vue({
  render: h => h(App),
}).$mount('#app')
