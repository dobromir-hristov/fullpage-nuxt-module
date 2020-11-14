const Vue = require('vue')

Vue.component('full-page', {
  name: 'FullPage',
  props: {
    options: Object
  },
  render (h) {
    return h('div', {
      class: 'FullPage-SSR'
    }, this.$slots.default)
  }
})
