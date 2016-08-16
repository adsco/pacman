var fs = require("fs");
var gulp = require('gulp');
var del = require('del');
var babel = require('gulp-babel');
var minify = require('gulp-minify');
var gulpSync = require('gulp-sync')(gulp);
var babelify = require('babelify');
var browserify = require('browserify');

gulp.task('default', gulpSync.sync(['cleanup', 'babelify', 'transpile', 'minify', 'copy']));

gulp.task('cleanup', function() {
	return del([
		'./lib/*',
		'./dist/*'
	]);
});

gulp.task('transpile', function() {
	return gulp.src('./app/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./lib/'));
});

gulp.task('minify', function() {
	return gulp.src('./dist/app.js')
		.pipe(minify({
			ext: {
			},
			exclude: [],
			ignoreFiles: []
		}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('copy', function() {
    return gulp.src(['./app/index.html'])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('babelify', function() {
    return browserify('./app/index.js')
        .transform(babelify)
        .bundle()
        .pipe(fs.createWriteStream('./dist/app.js'));
});
