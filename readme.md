# Usage

## Step 1: Install

If you're using Laravel Elixir 5 or below:

```
npm install laravel-elixir-vueify@1.0.6
```

Otherwise, for Laravel Elixir 6 installs and up:

```
npm install laravel-elixir-vueify
```

## Step 2: Require

Within your main `Gulpfile`, add:

```js
var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

elixir(function(mix) {
    mix.browserify('main.js');
});
```

Notice above, where we require `laravel-elixir-vueify`. That's all you need. Behind the scenes, all of the necessary dependencies have been installed, and Vueify has been inserted into Laravel Elixir's Browserify transformers list.

## Step 3. Build Amazing Things

You're done. :)

> Having trouble? [Here's a starter example site that uses Laravel Elixir, Browserify, and Vueify](https://github.com/laracasts/Laravel-Elixir-Vueify-Setup).
