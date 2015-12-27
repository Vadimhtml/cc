var gulp = require('gulp'),
    gulpLess = require('gulp-less'),
    gulpMyth = require('gulp-myth'),
    gulpUtil = require('gulp-util'),
    gulpUglify = require('gulp-uglify'),
    gulpJade = require('gulp-jade'),
    gulpConcat = require('gulp-concat');

function errorLog(err) {
    gulpUtil.log(gulpUtil.colors.bgRed.white.bold(' Error: '), gulpUtil.colors.red(err.message))
        .beep();
}

gulp.task('default', function () {
    gulp.run('less', 'js', 'jade');
});

gulp.task('less', function () {
    return gulp.src('./src/**/*.less')
        .pipe(gulpLess())
        .on('error', errorLog)
        .pipe(gulpMyth({compress: true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('js', function () {
    //return gulp.src(['./node_modules/jquery/dist/jquery.min.js', './src/**/*.js'])
    //return gulp.src('./src/**/*.js')
    return gulp.src([
            './src/_toLowerCamelCase.js',
            './src/_toUpperCamelCase.js',
            './src/_getCookie.js',
            './src/app.js',
            './src/app.colors.js',
            './src/app.getColor.js',
            './src/app.hashValidate.js',
            './src/app.cases.js',
            './src/index.js'
        ])
        .pipe(gulpConcat('index.js'))
        //.pipe(gulpUglify())
        .on('error', errorLog)
        .pipe(gulp.dest('./build'));
});

gulp.task('jade', function () {
    return gulp.src('./src/**/*.jade')
        .pipe(gulpJade())
        .on('error', errorLog)
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**', function (event) {
        gulp.run('default');
    });
});
