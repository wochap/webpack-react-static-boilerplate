const postsContext = require.context('!!front-matter-loader!src/posts', true, /\.md$/)

const posts = postsContext.keys().map(function (path) {
  // extract file name from path file
  let fileName = (path.split('/').pop().split('.'))[0]
  let frontMatter = postsContext(`./${fileName}.md`)

  return {
    slug: fileName,
    title: fileName.replace(/-/g, ' '),
    ...frontMatter
  }
})

export default posts
