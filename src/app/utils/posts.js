const postsContext = require.context('src/posts', true, /\.md$/)
const postsRoutes = postsContext.keys().map(function (path) {
  // extract file name from path file
  let fileName = (path.split('/').pop().split('.'))[0]

  return {
    slug: fileName,
    title: fileName.replace(/-/g, ' ')
  }
})

export default postsRoutes
