var gulp = require ('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nestedcss = require('postcss-nested')



gulp.task('default', function(){
	console.log("omeisi");
});

gulp.task('new', function(){

	console.log('this is a new task');
});


gulp.task('styles', function(){

	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars, nestedcss, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));

});

gulp.task('watch', function(){

	watch('./app/index.html',function(){
		gulp.start('new');
	});

	watch('./app/assets/styles/**/*.css', function(){
			gulp.start('styles');
	});

});