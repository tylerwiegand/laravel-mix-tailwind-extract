# Tailwind -> JSON

Ever wanted to just have your tailwind config in JSON format? Me too.

Simply add this to a project with Laravel Mix:

```
yarn add laravel-mix-tailwind-extract
```

and add it to your webpack.mix.js:

```
const mix = require('laravel-mix');  
			...
            require('laravel-mix-tailwind-extract');
```

And then finally, tell us where your config file is and where you want the json!

```
mix.tailwindExtract('tailwind.config.js', 'tailwind.json');
```

Done!