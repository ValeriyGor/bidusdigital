var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    uncss = require('gulp-uncss'),
    concat = require('gulp-concat'),
    uglyfly = require('gulp-uglyfly'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('gulp-clean'),
    server = require('gulp-server-livereload'),
    cache = require('gulp-cache'),
    browsersync = require('browser-sync'),
    watch = require('gulp-watch'),
    cssnano = require('gulp-cssnano');
 

//Компиляция Sass
gulp.task('sass', ['clean-css'], function () {
    return gulp.src('./src/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('mincss', ['sass'], function () {
    return gulp.src('./src/css/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename("bundle.min.css"))
        .pipe(cssnano())
    
    .pipe(gulp.dest('./src/css'));
});

//Проставление префиксов для кроссбраузерности 
gulp.task('autoprefix', ['mincss'], function () {
    return gulp.src('./src/css/**/*.css')
    
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
    
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/css'));
});

//Минимизация JS
gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
    //.pipe(concat('script.js'))
    //.pipe(uglyfly())
    .pipe(gulp.dest('./src/js/'));
});

//Сжатие изображений 
gulp.task('images', () =>
    gulp.src('./src/img/*')
        //.pipe(imagemin())
        .pipe(gulp.dest('./build/img'))
);

//Очистка папки с проектом 
gulp.task('clean', function () {
    return gulp.src('./build/*', {read: false})
        .pipe(clean());
});

gulp.task('clean-css', function () {
    return gulp.src('./src/css*', {read: false})
        .pipe(clean());
});

//Запуск сервера 
gulp.task('webserver', function() {
  gulp.src('./src')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
      open: true
    }));
});


//Слежение
gulp.task('watch', ['autoprefix', 'scripts'], function() {
    gulp.watch('./src/sass/**/*.sass', ['autoprefix']);
    gulp.watch('./src/*.html', browsersync.reload);
    gulp.watch(['./src/js/*.js'], ['scripts']);
    gulp.run('webserver');
});

gulp.task('build', ['clean', 'autoprefix', 'images'], function() {
    var buildCss = gulp.src('./src/css/bundle.min.css')
        .pipe(gulp.dest('./build/css'));

    var buildFonts = gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./build/fonts'));


    var buildJS = gulp.src('./src/js/*.js')
        .pipe(uglyfly())
        .pipe(gulp.dest('./build/js/'));

    var buildHtml = gulp.src('./src/*.html')
        .pipe(gulp.dest('./build/'));
});

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('default', ['watch']);
