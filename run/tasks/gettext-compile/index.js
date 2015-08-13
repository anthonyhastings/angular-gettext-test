'use strict';

/**
 *  Compiles PO files into Angular translation modules.
 *
 *  Example Usage:
 *  gulp gettext-compile
 */

var gulp = require('gulp');
var globalSettings = require('../../_global');
var common = require('./_common');
var gettext = require('gulp-angular-gettext');

gulp.task('gettext-compile', function() {
    return gulp.src(common.srcPaths)
        .pipe(gettext.compile({}))
        .pipe(gulp.dest(globalSettings.destPath + common.outputFolder));
});
