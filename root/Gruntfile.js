module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ejs: {
            template: ['src/ejs/*.ejs'],
            dest: './',
            options: 'src/ejs-option.yaml'
        }
    });

    grunt.loadNpmTasks('grunt-simple-ejs');

    grunt.registerTask('build', ['ejs']);
    grunt.registerTask('default', ['build']);
};