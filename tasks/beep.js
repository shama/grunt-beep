module.exports = function(grunt) {
  grunt.registerTask('beep', function() {
    grunt.log.write('\x07');
  });
};
