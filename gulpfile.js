var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat')
var rename = require("gulp-rename");
var minify = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');

var sassPaths = [
    'bower_components/foundation-sites/scss',
    'bower_components/motion-ui/src'
];

gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('sass', function () {
    return gulp.src('src/scss/app.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            includePaths: sassPaths,
            // outputStyle: 'compressed' // if css compressed **file size**
        })
            .on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9']
        }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.reload({ stream: true }));
});

// gulp.task('browser-sync', function () {
//     browserSync.init({
//         proxy: "http://jam2.dev:8888/"
//     });
// });

gulp.task('js', function (cb) {
    pump([
        // gulp.src('src/js/*.js'),
        gulp.src([
            'src/js/jquery.js',
            'src/js/foundation.js',
            'src/js/jquery.validate.js',
            'src/js/what-input.js',
            'src/js/app.js'
            ]),
        concat('app.js'),
        uglify(),
        rename({ suffix: '.min' }),
        gulp.dest('dist/js')
    ],
        cb
    );
});

gulp.task('compress-sass', ['sass'], function () {
    return gulp.src('dist/css/app.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(minify())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('serve', ['imagemin', 'sass', 'js', 'compress-sass'], function () {


    // browserSync.init({
    //     proxy: "http://jam2.dev:8888/"
    // });

    gulp.watch(['src/scss/**/*.scss'], ['sass', 'compress-sass']);
    gulp.watch(['src/css/*.css']).on('change', browserSync.reload);
    gulp.watch(['src/js/*.js'], ['js']);
    gulp.watch(['../js/*.js']).on('change', browserSync.reload);
    gulp.watch(["../*.html"]).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
