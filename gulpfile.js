const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const paths = {
    scripts: {
        src: ['./dist/js/**/*.js', '!./dist/js/**/*.min.js'],
        dest: './dist/js/'
    }
};

function compileScripts() {
    return src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify()) // Minify et
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.scripts.dest));
}

function watcher() {
    watch(paths.scripts.src, parallel(compileScripts));
}

exports.compileScripts = compileScripts;
exports.watcher = watcher;

exports.default = series(
    parallel(compileScripts),
    watcher
);

exports.build = parallel(compileScripts);

// # JS derler ve izlemeye başlar
// gulp

// # Tek seferlik build (izleme olmadan)
// gulp build