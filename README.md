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

Or "jaws"

```shell
grunt beep:jaws
```

> Any more?

Uhh no... write your own:

```shell
grunt beep:**-*-**-*--**-*-**-*
```

> Okay... how about only when Grunt has an error or warning?

Good idea!

```js
grunt.initConfig({
  watch: {
    files: ['*'],
    // make sure you don't have spawn: false or else whenever jshint has an error,
    // beep:error will always be executed. Check https://github.com/shama/grunt-beep/issues/6 for reference.
    // only beep if jshint had an error (works with --force too!)
    tasks: ['jshint', 'beep:error'],
  },
});
```

or beep 3 times if jshint has a warning but only 2 if nodeunit has an error:

```shell
grunt jshint beep:warn:3 nodeunit beep:error:2
```

## Release History
* 1.0.0 - Peer deps are now `grunt>=0.4.0`
* 0.3.2 - Fix syntax error (@toverux).
* 0.3.1 - Close out async done() if queue.length() is zero. (@gcpantazis)
* 0.3.0 - needs smarter beeps
* 0.2.0 - needs more beeps
* 0.1.0 - let there be beeps

## License
Copyright (c) 2016 Kyle Robinson Young  
Licensed under the MIT license.
