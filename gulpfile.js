var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./proj/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./proj/dist/'));
});

gulp.task('sass-watch', function () {
    gulp.watch('./proj/style/**/*.scss', ['sass'])
});