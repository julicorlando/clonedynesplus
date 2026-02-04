const gulp = require('gulp');
const saas = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(saas({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function (){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}