module.exports = function(grunt) {
  var beepers = {
    charge: '****-*-*',
    // shave and a haircut, two bits :D
    twobits: '*-**-*-*---*-*-'
  };

  grunt.registerTask('beep', function(what, n) {
    var done = this.async();
    var queue = grunt.util.async.queue(function(note, next) {
      if (note !== '-') {
        grunt.log.write('\x07').write('♪');
      } else {
        grunt.log.write(' ');
      }
      setTimeout(next, 200);
    }, 1);

    queue.drain = function() {
      grunt.log.writeln();
      done();
    };

    function beep(x) {
      for (var i = 0; i < x; i++) queue.push('*');
    }

    what = what || 1;
    var many = parseInt(what);
    if (isNaN(many)) {
      if (what === 'error') {
        if (grunt.fail.errorcount > 0) beep(n || 1);
      } else if (what === 'warn') {
        if (grunt.fail.warncount > 0) beep(n || 1);
      } else {
        if (beepers[what]) {
          what = beepers[what];
        }
        queue.push(what.split(''));
      }
    } else {
      beep(many);
    }

    if (queue.length() === 0) {
      done();
    }

  });
};