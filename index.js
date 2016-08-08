var Elixir = require('laravel-elixir');

require('laravel-elixir-browserify-official');

Elixir.config.js.browserify.transformers.push({
    name: 'vueify',

    // https://github.com/vuejs/vueify#usage
    options: {}
});
