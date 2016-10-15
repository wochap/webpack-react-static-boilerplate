import fs from 'fs'
import path from 'path'

import {projectRootPath} from './config'

// get all post markdown files
const postsFiles = fs.readdirSync(path.join(projectRootPath, 'src/posts'))
// create posts routes
const postsRoutes = postsFiles.map(function (path) {
  // extract file name from path file
  let fileName = (path.split('/').pop().split('.'))[0]

  return `/posts/${fileName}`
})

// exports routes that static-site-generator-webpack-plugin will use
export default [
  '/',
  '/404',
  ...postsRoutes
]
