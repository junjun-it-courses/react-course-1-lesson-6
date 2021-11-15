const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

const buildSass = () => {
    console.log('Компиляция SASS');

    return src('dist/sass/*.scss')
        .pipe(sass())
        .pipe(dest('build/styles/'));
}

const buildPug = () => {
    console.log('Компиляция Pug');

    return src('dist/pages/*.pug')
        .pipe(pug())
        .pipe(dest('build/'));
}

exports.build = parallel(buildSass, buildPug);