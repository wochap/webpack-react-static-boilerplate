/**
 * get all posts' front-matter
 * @return {array} all posts
 */
export function getPosts (fileName) {
  return new Promise((resolve, reject) => {
    try {
      let module = require(`src/posts/${fileName}.md`)

      module(resolve)
    } catch (error) {
      console.warn(`Error: Cannot find '${fileName}.md' post file.`) // eslint-disable-line
      reject(error)
    }
  })
}

/**
 * get post's bodyHTML and front-matter
 * @return {object} post
 */
export function getPost () {
  return new Promise((resolve, reject) => {
    try {
      const postsContext = require.context('!!front-matter-loader!src/posts', true, /\.md$/)

      const posts = postsContext.keys().map(function (path) {
        // extract file name from path file
        let fileName = (path.split('/').pop().split('.'))[0]
        let frontMatter = postsContext(`./${fileName}.md`)

        return Object.assign({}, {
          slug: fileName,
          title: fileName.replace(/-/g, ' ')
        }, frontMatter)
      })

      resolve(posts)
    } catch (error) {
      reject(error)
    }
  })
}
