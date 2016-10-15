# Base webpack

> Start your next project using technologies that you love

## Features

* [react](https://facebook.github.io/react/) + [react-router](https://react-router.now.sh/)
* [react-hot-loader v3](https://github.com/gaearon/react-hot-loader)
* [ESLint](http://eslint.org/)
* [Babel stage-0](https://babeljs.io/docs/plugins/preset-stage-0/)
* [SASS](http://sass-lang.com/)
* [PostCSS](https://github.com/postcss/postcss)
* [BrowserSync](https://www.browsersync.io/)

## Troubleshooting

* On each HMR react-router logs a error, this boilerplate uses  [react-hot-loader v3](https://github.com/gaearon/react-hot-boilerplate/blob/next/src/App.js#L8) (currently in beta)

## Development

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8000
$ npm run dev

# build for production with minification and serve dist files at localhost:8080
$ npm run build
```

In development if you are working with a backend, like [Laravel](https://laravel.com/), you will need add a script to your template:

```html
...
<script src="http:/[your IP]:8080/app.js"></script>
...
```

I used `IP` for see the web page from external devices.
