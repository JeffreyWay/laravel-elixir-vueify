var Elixir = require('laravel-elixir');

Elixir.ready(() => {
    Elixir.config.js.browserify.transformers.push({
        name: 'vueify',

        // https://github.com/vuejs/vueify#usage
        options: {}
    });
});
