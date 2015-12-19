var gulp = require('gulp'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({
        advanced: true,
        compatibility: 'ie8'
    });


gulp.task('default', function () {
    gulp.run('less', 'jade', 'js', 'php');
});

gulp.task('less', function () {
    return gulp.src('./src/**/*.less')
        .pipe(less({
            plugins: [cleancss]
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('jade', function () {
    return gulp.src('./src/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./build'));
});

gulp.task('js', function () {
    return gulp.src('./src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('php', function () {
    return gulp.src('./src/**/*.php')
        .pipe(gulp.dest('./build'));
});

gulp.watch('./src/**', function (event) {
    gulp.run('default');
});