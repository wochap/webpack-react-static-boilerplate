# Documentation

This boilerplate assumes you are somewhat familiar with Webpack.

**It is recommended to use npm 3+ for a more efficient dependency tree.**

## Project structure

```
.
├── .babelrc                  # babel config
├── .editorconfig             # editor config
├── .eslintrc                 # eslint config
├── .eslintignore             # eslint ignore config
├── .nvmrc                    # nvm config
├── .tern-project             # atom-ternjs project config
├── package.json              # https://docs.npmjs.com/files/package.json
├── yarn.lock                 # https://yarnpkg.com/en/docs/yarn-lock
├── src/                      # source code
│   ├── app/
│   │   ├── ...
│   │   ├── client-entry.js   # your react app entry file
│   │   └── static-entry.js   # the static-site-generator-webpack-plugin entry file
│   ├── posts                 # your posts files
│   ├── styles
│   │   └── main.scss         # main sass file
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev
│   └── index.html            # template used by html-webpack-plugin
└── build/                    # build tools (webpack)
    └── ...
```

## How it works?

This boilerplate uses `react` and `react-router`, `react-hot-loader` for HMR with `react`, the posts are loaded by custom loaders:

* bundle-loader: it will create split points for each post.
* markdown-loader: it will parse the post with [marked](https://www.npmjs.com/package/marked) + [highlight.js](https://www.npmjs.com/package/highlight.js) and [front-matter](https://www.npmjs.com/package/front-matter)

In production the `react` app will be rendered by [static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin), the routes to be rendered are in `build/routes.js`.

## Setup routes

Update the following files:

* `build/routes.js`

## Troubleshooting

* On each HMR react-router logs a error, this boilerplate uses  [react-hot-loader v3](https://github.com/gaearon/react-hot-boilerplate/blob/next/src/App.js#L8) (currently in beta)
* When you delete a post file, you must restart the dev-server or do a change.
