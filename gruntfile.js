/*
**	gruntfile.js for automating project task.
*	Tasks : Copying, Concatination, Minification, Watch, Less conversion, browser synchronization
*/


"use strict";

//Exporting project level automation configuration
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
           /* dist: {
                src: [
                    "node_modules/jquery/dist/jquery.min.js",
                    "node_modules/bootstrap/dist/js/bootstrap.min.js",
                    "node_modules/angular/angular.min.js",
                    "node_modules/angular-ui-router/release/angular-ui-router.min.js",
                    "node_modules/angular-animate/angular-animate.min.js",
                    "node_modules/angular-aria/angular-aria.min.js",
                    "node_modules/angular-sanitize/angular-sanitize.min.js",
                    "node_modules/angular-material/angular-material.min.js",
                    "node_modules/lodash/lodash.min.js",
                    "node_modules/angular-material-icons/angular-material-icons.js",
                    "node_modules/angular-messages/angular-messages.min.js",
                    "node_modules/ng-flow/dist/ng-flow-standalone.min.js",
                    "node_modules/angular-ui-grid/ui-grid.js",
                    "application/JS/*.*./*.js",
                ],
                dest: "dist/src/js/script.js"
            }*/
            basic_and_extras: {
                files: {
                  'dist/src/js/script.js': ['application/JS/**/*.js'],
                  'dist/src/js/scriptAll.js': [
                    "node_modules/jquery/dist/jquery.min.js",
                    "node_modules/bootstrap/dist/js/bootstrap.min.js",
                    "node_modules/angular/angular.min.js",
                    "node_modules/angular-ui-router/release/angular-ui-router.min.js",
                    "node_modules/angular-animate/angular-animate.min.js",
                    "node_modules/angular-aria/angular-aria.min.js",
                    "node_modules/angular-sanitize/angular-sanitize.min.js",
                    "node_modules/angular-material/angular-material.min.js",
                    "node_modules/lodash/lodash.min.js",
                    "node_modules/angular-material-icons/angular-material-icons.js",
                    "node_modules/angular-messages/angular-messages.min.js",
                    "node_modules/ng-flow/dist/ng-flow-standalone.min.js",
                    "node_modules/angular-ui-grid/ui-grid.js"
                ]
                }
              }
        },
        watch: {
            scripts: {
                files: ['application/JS/**/*.js', 'application/css/*.css'],
                tasks: ['concat','cssmin'],
                options: {
                    spawn: false,
                },
            },
        },
        cssmin: {
            dist: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1
                },
                files: {
                    'dist/src/css/style.min.css': ['application/css/*.css',]
                }
            }
        },
        uglify: {
            options: {
              mangle: false
            },
            my_target: {
              files: {
                'dist/src/js/index.min.js': ['dist/src/js/script.js']
              }
            }
          }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
        
    grunt.task.registerTask("build", ["watch","cssmin","concat","uglify"]);

}
