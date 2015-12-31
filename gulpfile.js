/// <binding BeforeBuild='node_modules:copy' ProjectOpened='ts:watch' />

var gulp = require('gulp');
var joinPath = require('join-path');
var stringformat = require('stringformat').extendString('format');
var pad = require('pad');
var pathExists = require('path-exists').sync;
var ts = require('gulp-typescript');
var tsGlob = 'wwwroot/app/**/*.ts';

gulp.task('node_modules:copy', function () {

    var libs = [
        "angular2",
        "systemjs",
        "es6-promise",
        "es6-shim",
        "reflect-metadata",
        "rxjs",
        "zone.js"
    ];
    var src = 'node_modules';
    var dest = 'wwwroot/node_modules';

    console.info(' ');
    console.info('Copying folders');
    for (i in libs) {
        gulp.src(joinPath(src, libs[i], '**/*')).pipe(gulp.dest(joinPath(dest, libs[i])));
        console.info('  "{0}"'.format(libs[i]));
    }
    console.info("from '{0}' to '{1}'".format(src, dest));
    console.info(' ');
});

gulp.task('ts:compile', function () {
    return gulp.src(tsGlob)
		.pipe(ts(ts.createProject('tsconfig.json')))
		.pipe(gulp.dest('wwwroot/app'));
});

gulp.task('ts:watch', function () {
    gulp.watch(tsGlob, ['ts:compile']);
});
