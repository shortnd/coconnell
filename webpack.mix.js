let mix = require('laravel-mix');
let build = require('./tasks/build.js');
let tailwindcss = require('tailwindcss');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/');
mix.webpackConfig({
    plugins: [
        build.jigsaw,
        build.browserSync(),
        build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss']),
    ]
});

mix.js('source/_assets/js/main.js', 'js')
    // .sass('source/_assets/sass/main.scss', 'css/main.css')
    .postCss('source/assets/css/main.css', 'css/main.css', [
      tailwindcss('./tailwind.js'),
    ])
    .version();
