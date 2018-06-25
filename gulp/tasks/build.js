var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var ccsnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();


/*this task will show a preview of the "dist" folder on the web browser*/
gulp.task('previewDist', function(){

	browserSync.init({
		notify:false,
		server: {
			baseDir: "docs"
		}
	});

});

/*will delet "dist" folder everytime we run "gulp build" task*/
gulp.task('deleteDistFolder',['icons'], function(){
	return del("./docs");
});

/*move any file exsept of the ones you tell it to*/
gulp.task('copyGeneralFiles',['deleteDistFolder'],function(){
	
	var pathsToCopy = [
		"./app/**/*",
		"!./app/index.html",
		"!./app/assets/images/**",
		"!./app/assets/styles/**",
		"!./app/assets/scripts/**",
		"!./app/temp/",
		"!./app/temp/**"

	]

	return gulp.src(pathsToCopy)
		.pipe(gulp.dest("./docs"));
});


/*copy all the images file into the "dist" folder and compress 
the image file before they reach there destenation*/
gulp.task('optimizeImages',['deleteDistFolder'], function(){
	return gulp.src(["./app/assets/images/**/*", '!./app/assets/images/icons/', '!./app/assets/images/icons/**/*'])
		.pipe(imagemin({
			progresive: true,/*for jepg*/
			interlaced: true, /*for gif*/
			multipass: true /*for svg*/
		}))
		.pipe(gulp.dest("./docs/assets/images"));
});


gulp.task('useminTrigger', ['deleteDistFolder'], function(){
	gulp.start("usemin");
});

/*copy the CSS and JS files to a new folder , compress them, and revesion them*/
gulp.task('usemin',['scripts','styles'], function(){
	return gulp.src('./app/index.html')
		.pipe(usemin({
			ccs:[function(){return rev()}, function(){return cssnano()}],
			js:[function(){return rev()}, function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/'));
});

gulp.task('build',['deleteDistFolder','copyGeneralFiles','optimizeImages','useminTrigger']);









