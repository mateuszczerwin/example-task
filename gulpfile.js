const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const path = require('path');

const paths = {
    src: 'src/scss/**/*.scss',
    dest: 'assets/'
};

function compileScss() {
    return gulp.src(paths.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rename(function (file) {
            file.dirname = '';
            file.extname = '.css';
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dest));
}

function watchFiles() {
    gulp.watch(paths.src, compileScss);
}

exports.compile = compileScss;
exports.watch = watchFiles;
exports.default = gulp.series(compileScss, watchFiles);
