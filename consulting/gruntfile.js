'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: {
            // Configurable paths
            app: 'src/app',
            dist:'dist',
            test: 'src/tests',
            tmp : '.tmp',
            config : 'config',
            lib : 'lib',
        },

        // Empties folders to start fresh
        clean: {
            server: '<%= config.tmp %>',
            test: ['<%= config.tmp %>', '<%= config.app %>/**/templates.js'],
            dist: ['<%= config.tmp %>', '<%= config.dist %>']
        },

        // Builds the css style files
        less: {
            development: {
                options: {
                    paths: ['<%= config.app %>/assets/styles']
                },
                files: {
                    '<%= config.tmp %>/assets/styles/travlr.css':'<%= config.app %>/assets/styles/travlr.less'
                }
            },
        },
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**/*.ts"],
                 watch: "."
            }
        }

    });
};
