'use strict';

// var helper = require('./helper');

module.exports = function (grunt) {

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
			log_env: {
				options: {
					task: 'env:dummy',
					log: false,
					args: {
						foo: 'bar'
					},
					process: function (result) {
						if (!result.options.args) {
							grunt.log.fail('missing args in returned options');
							result.fail = true;
						}
						if (!result.options.args.foo) {
							grunt.log.fail('missing args value in returned options');
							result.fail = true;
						}
					}
				},
				src: ['Gruntfile-args.js']
			}
		}
	});

	grunt.registerTask('default', ['clean', 'run_grunt']);

};
