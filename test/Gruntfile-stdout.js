'use strict';

// var helper = require('./helper');

module.exports = function (grunt) {

  var out = false;
	grunt.loadTasks('../node_modules/grunt-contrib-clean/tasks');

	// load run_grunt
	grunt.loadTasks('./../tasks');
	grunt.loadTasks('./test_tasks');

	grunt.initConfig({
		clean: {
      tests: ['tmp/help/**/*']
		},
		env: {
			dummy: {

			}
		},
		run_grunt: {
      dummy_help: {
				options: {
          help: true,
          stdout: function(data) {
            out = true;
            grunt.log.write('>>>>>' + data);
          },
					process: function (result) {
            if (!out) {
              grunt.log.fail('stdout has not been called');
              result.fail = true;
            }
					}
				},
        src: ['Gruntfile-dummy.js']
			}
		}
	});

	grunt.registerTask('default', ['clean', 'run_grunt']);

};
