module.exports = function(grunt) {
  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['beep', 'beep:3', 'beep:twobits']);
};
