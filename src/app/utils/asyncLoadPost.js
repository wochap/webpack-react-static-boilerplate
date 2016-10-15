/**
 * load post asynchronously (bundle-loader)
 * @param  {String}   fileName
 * @param  {Function} callback
 * @return {Object}
 */
export default function asyncLoadPost (fileName, callback) {
  try {
    let module = require(`src/posts/${fileName}.md`)

    module(function (post) {
      callback(post)
    })
  } catch (error) {
    let errorMsg = `Error: Cannot find '${fileName}.md' post file.`
    console.warn(errorMsg) // eslint-disable-line
  }
}
