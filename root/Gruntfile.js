module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html: {
                files: ['src/ejs/*.ejs', 'src/ejs/**/*.ejs', 'src/option.dev.yaml'],
                tasks: ['ejs']
            }
        },
        ejs: {
            template: ['src/ejs/*.ejs'],
            dest: './',
            options: 'src/option.dev.yaml'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-simple-ejs');

    grunt.registerTask('build', ['ejs']);
    grunt.registerTask('default', ['build']);
};