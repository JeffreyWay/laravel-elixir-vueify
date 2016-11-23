var Elixir = require('laravel-elixir');

Elixir.ready(() => {
    Elixir.config.js.browserify.transformers.push({
        name: 'vueify',

        // https://github.com/vuejs/vueify#usage
        options: {}
    });
});

Elixir.config.js.browserify.watchify.options.poll = true;
