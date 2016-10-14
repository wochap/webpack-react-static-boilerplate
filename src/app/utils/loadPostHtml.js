export default function loadPostHtml (name, callback) {
  let module = require(`src/posts/${name}.md`)

  module(function (post) {
    callback(post)
  })
}
