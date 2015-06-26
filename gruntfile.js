'use strict';

var config = require('./config/config'),
    assets = require('./config/assets');

module.exports = function (grunt) {
    var assetsAll = assets(config.assets).all;

    var library_src = assetsAll.javascripts.library_src;
    var less_src = assetsAll.less.src;

    // Project Configuration
    grunt.initConfig({
        copy: {
            bootcust: {
                files: [
                    {
                        cwd: 'public/lib/bootstrap/less', expand: true,
                        src: ['**'], dest: 'public/lib/bootstrap/less_custom'
                    },
                    {
                        cwd: 'public/bootcust/less', expand: true,
                        src: ['**'], dest: 'public/lib/bootstrap/less_custom'
                    }
                ]
            }
        },

        less: {
            // Compile all targeted LESS files individually
            components: {
                options: {
                    imports: {
                        // Use the new "reference" directive, e.g.
                        // @import (reference) "variables.less";
                        reference: [
                            "../lib/bootstrap/less/mixins.less",
                            "../lib/bootstrap/less/variables.less"
                        ]
                    }
                },
                files: [
                    {
                        expand: true,
                        cwd: './public/less',
                        // Compile each LESS component excluding "bootstrap.less",
                        // "mixins.less" and "variables.less"
                        src: ['*.less'],
                        dest: './public/generated_css/',
                        ext: '.css'
                    }
                ]
            },
            bootcust: {
                files: [
                    {
                        expand: true,

                        cwd: 'public/lib/bootstrap/less_custom',
                        src: ['bootstrap.less'],
                        dest: './public/lib/bootstrap/dist/css_custom/',
                        ext: '.css'
                    }
                ]
            }
        },

        cssjanus: {
            theme: {
                options: {
                    generateExactDuplicates: true
                },
                files: assetsAll.cssjanus
            }
        },


        uglify: {
            dist: {
                files: [{
                    src: config.library_distdir + '/*.js',
                    dest: config.library_distdir + '/' + config.library_name + '.min.js'
                }]
            }
        },

        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    nodeArgs: ['--debug'],
                    ext: 'js,html'
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        concurrent: {
            default: ['nodemon'],
            debug: ['nodemon'],
            options: {
                logConcurrentOutput: true,
                limit: 10
            }
        }
    });

    // Load NPM tasks
    require('load-grunt-tasks')(grunt);

    // Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    // generate new bootstrap css from custom variables.less
    grunt.registerTask('bootcust', ['copy:bootcust', 'less:bootcust']);

    // Default task(s).
    grunt.registerTask('default', ['less', 'cssjanus', 'concurrent:default']);
};