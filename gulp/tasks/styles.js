//here is all the packages you need for your main css styles sheet

var gulp = require ('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nestedcss = require('postcss-nested');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function(){
// this will make sure the code run through pipes and get updated for most browsers
//even if error comes up this task won't stop
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssimport, mixins ,cssvars ,nestedcss, autoprefixer]))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));

});