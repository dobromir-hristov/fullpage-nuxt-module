module.exports = {
  name: 'FullPage',
  render (h) {
    return h('div', {
      class: 'FullPage-SSR'
    }, this.$slots.default)
  }
}
