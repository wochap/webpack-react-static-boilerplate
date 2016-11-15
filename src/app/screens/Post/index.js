export default {
  path: 'posts/:slug',
  getComponent (location, cb) {
    require.ensure([], () => {
      cb(null, require('./components/PostScreen').default)
    }, 'PostScreen')
  }
}
