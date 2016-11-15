export default {
  getComponent (location, cb) {
    require.ensure([], () => {
      cb(null, require('./components/HomeScreen').default)
    }, 'HomeScreen')
  }
}
