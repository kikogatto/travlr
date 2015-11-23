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

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= config.app %>/*.js', '<%= config.app %>/assets/**/*.js', '<%= config.app %>/components/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            less: {
                files: ['<%= config.app %>/assets/styles/{,*/}*.less', '<%= config.app %>/assets/directives/{,*/}*.less', '<%= config.app %>/components/{,*/}*.less'],
                tasks: ['less']
            },
            templates :{
                files: ['<%= config.app %>/*.html', '<%= config.app %>/assets/**/*.html', '<%= config.app %>/components/**/*.html' ],
                tasks: ['ngtemplates']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: []
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/components/**/*.js',
                '<%= config.app %>/assets/**/*.js',
                '<%= config.app %>/*.js',
                '<%= config.test %>/**/*.specs.js',
            ]
        },
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
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.tmp %>/assets/styles/',
                    src: '*.css',
                    dest: '<%= config.tmp %>/assets/styles/'
                }]
            }
        },
        htmlmin: {
            options:    {
                collapseBooleanAttributes:      true,
                collapseWhitespace:             true,
                removeAttributeQuotes:          true,
                removeComments:                 true, // Only if you don't use comment directives!
                removeEmptyAttributes:          true,
                removeRedundantAttributes:      true,
                removeScriptTypeAttributes:     true,
                removeStyleLinkTypeAttributes:  true
            },

            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '**/*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },
        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>',
                    src: '**/*.{gif,jpg,png}',
                    dest: '<%= config.dist %>'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>',
                    src: '**/*.svg',
                    dest: '<%= config.dist %>'
                }]
            }
        },
        ngtemplates:    {
            options:    {
                htmlmin:  '<%= htmlmin.options %>',
                standalone : true
            },
            compiledTemplates: {
                cwd: '<%= config.app %>',
                src: '**/*.html',
                dest: '<%= config.tmp %>/templates.js',
            }
        },

        jasmine: {
            taskName: {
                src: [
                    '<%= config.app %>/*.js',
                    '<%= config.app %>/**/*.js',
                    '<%= config.tmp %>/*.js',
                ],
                options: {
                    specs: '<%= config.test %>/**/*.specs.js',
                    vendor: [
                        '<%= config.lib %>/jquery/jquery.js',
                        '<%= config.lib %>/jquery-ui/jquery-ui.js',
                        '<%= config.lib %>/angular/angular.js',
                        '<%= config.lib %>/angular-mocks/angular-mocks.js',
                        '<%= config.lib %>/angular-cookies/angular-cookies.js',
                        '<%= config.lib %>/angular-resource/angular-resource.js',
                        '<%= config.lib %>/angular-sanitize/angular-sanitize.js',
                        '<%= config.lib %>/angular-route/angular-route.js',
                        '<%= config.lib %>/angular-animate/angular-animate.js',
                        '<%= config.lib %>/moment/moment.js',
                        '<%= config.lib %>/moment/locales/pt-br.js',
                        '<%= config.lib %>/ngstorage/ngstorage.js',
                    ],
                    helpers: [
                        '<%= config.test %>/core/IdentityProvider.spec.js',
                        '<%= config.test %>/config.tests.js',
                        '<%= config.test %>/backend/*.backend.js'
                    ],
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'bin/coverage/coverage.json',
                        report: 'bin/coverage',
                        thresholds: {
                            lines: 90,
                            statements: 90,
                            branches: 90,
                            functions: 90
                        }
                    }
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: './lib',
                    layout: 'byComponent',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },
        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/*.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/**/*.css']
        },
        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/yellowCake.min.js',
                        '<%= config.dist %>/assets/yellowCake.min.css'
                    ]
                }
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'assets/data/{,*/}*.json',
                        '*.html',
                    ]
                }]
            },
            config: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.config %>',
                    dest: '<%= config.tmp %>',
                    src:[
                        '*.js',
                    ]
                }]
            },
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= config.tmp %>',
                        '<%= config.lib %>',
                        '<%= config.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= config.dist %>',
                    livereload: false
                }
            }
        },

    });


    grunt.registerTask('test', function (target) {
        grunt.task.run([
            'clean:test',
            'ngtemplates',
            'jshint',
            'less',
            'jasmine',
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'clean:test',
        'ngtemplates',
        'jshint',
        'jasmine',
        'less',
        'useminPrepare',
        'copy:config',
        'copy:scripts',
        'copy:lib',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'imagemin',
        'svgmin',
        'copy:dist',
        'rev',
        'usemin',
        'htmlmin:dist'
    ]);

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run([ 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'ngtemplates',
            'jshint',
            'less',
            'copy:config',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
