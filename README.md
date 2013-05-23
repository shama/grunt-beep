# grunt-beep

I present to you the best Grunt task ever! It beeps!

## install it!

```
npm install grunt-beep --save-dev
```

## load it!

```js
grunt.loadNpmTasks('grunt-beep');
```

## use it!

Originally I made this so I can have a beep when my watch task is done:

```js
grunt.initConfig({
  watch: {
    files: ['*'],
    tasks: ['jshint', 'nodeunit', 'beep'],
  },
});
```

You can beep anywhere:

```js
grunt.registerTask('default', ['jshint', 'nodeunit', 'beep']);
```

> But I want more beeps!

You got it!

```shell
grunt beep:7
```

> Seven beeps is boring can you beep me a tune?

Sure!

```js
// shave and a haircut, two bits :D
grunt.task.run('beep:twobits');
```

> Any other tunes?

Umm how about that "charge" one?

```shell
grunt beep:charge
```

> Any more?

Uhh no... write your own:

```shell
grunt beep:**-*-**-*--**-*-**-*
```

## Release History
* 0.2.0 - needs more beeps
* 0.1.0 - let there be beeps

## License
Copyright (c) 2013 Kyle Robinson Young  
Licensed under the MIT license.
