var gulp = require('gulp'),
    gulpLess = require('gulp-less'),
    gulpMyth = require('gulp-myth'),
    gulpUtil = require('gulp-util'),
    gulpUglify = require('gulp-uglify'),
    gulpJade = require('gulp-jade');

function errorLog(err) {
    gulpUtil.log(gulpUtil.colors.bgRed.white.bold(' Error: '), gulpUtil.colors.red(err.message))
        .beep();
}

gulp.task('default', function () {
    gulp.run('less', 'js', 'jade', 'php');
});

gulp.task('less', function () {
    return gulp.src('./src/**/*.less')
        .pipe(gulpLess())
        .on('error', errorLog)
        .pipe(gulpMyth({compress: true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('js', function () {
    return gulp.src('./src/**/*.js')
        .pipe(gulpUglify())
        .on('error', errorLog)
        .pipe(gulp.dest('./build'));
});

gulp.task('jade', function () {
    return gulp.src('./src/**/*.jade')
        .pipe(gulpJade())
        .on('error', errorLog)
        .pipe(gulp.dest('./build'));
});

gulp.task('php', function () {
    return gulp.src('./src/**/*.php')
        .pipe(gulp.dest('./build'))
        .on('error', errorLog);
});


gulp.task('watch', function () {
    gulp.watch('./src/**', function (event) {
        gulp.run('default');
    });
});
