var gulp = require('gulp');
var path = require('path');
var include = require("gulp-include");
var sass = require('gulp-sass');

var themeResourcesPath = 'www/Neos/Packages/Sites/WebExcess.Theme/Resources';

gulp.task('css', function () {
    var postcss    = require('gulp-postcss');
    var cssnext = require('postcss-cssnext');
    var sourcemaps = require('gulp-sourcemaps');
    var cssnano = require('cssnano');

    return gulp.src(themeResourcesPath + '/Private/*.css')
        .pipe( sourcemaps.init() )
        .pipe(sass().on('error', sass.logError))
        .pipe( postcss([
            require('postcss-import'),
            require('precss'),
            require('lost'),
            require('postcss-custom-selectors'),
            cssnext({warnForDuplicates:false}),
            require('postcss-merge-rules'),
            cssnano({
                autoprefixer: {
                    add: true,
                    browsers: ['last 2 version', '> 1%', 'safari 7', 'ie 9', 'bb 10', 'android 4']
                },
                discardComments: {
                    removeAll: true
                }
            })
        ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest(themeResourcesPath + '/Public/') );
});

gulp.task('assets', function () {
    gulp.src(themeResourcesPath + '/Private/Assets/**/*')
        .pipe(gulp.dest(themeResourcesPath + '/Public/Assets/'))

});

gulp.task('build', ['css', 'assets']);

gulp.task('default', function() {
    gulp.watch(themeResourcesPath + '/Private/Styles/**/*.css', ['css']);
    gulp.watch(themeResourcesPath + '/Private/Assets/**/*', ['assets']);
});
