module.exports = function (grunt, name, tasks) {

  // Create a place to save valid and invalid tasks
  var validatedTasks = [];
  var invalidTasks = [];

  // Loop through all of the tasks that Gruntfile.js wants to use
  grunt.log.subhead('Validating the '+ name + ' tasks against the opt object.');

  for (var i = 0; i < tasks.length; i++) {

    // Save a reference to the current task
    var currentTask = tasks[i];

    // If the task validates then place it in the validatedTasks array.
    // If it fails to validate then place it in the invalidTasks array.
    if (validator(grunt, currentTask)) {
      validatedTasks.push(currentTask);
    } else {
      invalidTasks.push(currentTask);
    }

  }

  // Log messages to the concole
  if (validatedTasks.length > 0) {
    grunt.log.writeln('The following tasks have been validated and will run under the ' + name + ' task');
    grunt.log.ok(validatedTasks);
  }
  if (invalidTasks.length > 0) {
    grunt.log.writeln('The following tasks are invalid and will not run:');
    grunt.log.warn(invalidTasks);
  }

  return validatedTasks;
};

function validator(grunt, task) {

  // Grab config objects from Gruntfile.js
  var pkg = grunt.config('pkg');
  var opt = grunt.config('opt');

  switch (task) {
    case 'concat:lt-ie8':
      return opt && opt.ltIE8 && opt.ltIE8.src && opt.ltIE8.dest;
    case 'topdoc':
      return pkg && pkg.name && pkg.homepage;
    default:
      return true;
  }

}
