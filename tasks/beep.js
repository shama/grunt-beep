module.exports = function(grunt) {
  var beepers = {
    charge: '****-*-*',
    // shave and a haircut, two bits :D
    twobits: '*-**-*-*---*-*-'
  };

  grunt.registerTask('beep', function(what) {
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

    what = what || 1;
    var many = parseInt(what);
    if (isNaN(many)) {
      if (beepers[what]) {
        what = beepers[what];
      }
      queue.push(what.split(''));
    } else {
      for (var i = 0; i < many; i++) {
        queue.push('*');
      }
    }
  });
};
