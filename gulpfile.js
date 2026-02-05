const gulp = require('gulp');
const saas = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(saas({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}