module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
        options: {
            mangle: false,
        },
        build: {
            files: {
                'dist/slidejs.min.js': ['slidejs.js']
            }
        }
    },

    concat: {
            'dist/slidejs.min.js': ['dist/slidejs.min.js'],
            options: {
                banner: '/* slidejs <%= pkg.version %> | ' + 
                    '<%= pkg.homepage %> | (c) 2014 openhiun */ \n'
            }
        }
  });

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('default', ['uglify', 'concat']);

};