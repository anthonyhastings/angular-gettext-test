'use strict';

/**
 *  Cycles through source files and extracts singular and
 *  plural translation strings, including optional
 *  comments to accompany them.
 *
 *  Example Usage:
 *  gulp gettext-extract
 */

var gulp = require('gulp');
var globalSettings = require('../../_global');
var common = require('./_common');
var gettext = require('gulp-angular-gettext');

gulp.task('gettext-extract', function() {
    return gulp.src(common.srcPaths)
        .pipe(gettext.extract('template.pot', {}))
        .pipe(gulp.dest(globalSettings.destPath + common.outputFolder));
});
