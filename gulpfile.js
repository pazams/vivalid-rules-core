var gulp=  require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require('vinyl-buffer');

gulp.task('build', function() {
    return browserify({ 
        entries: ['lib/vivalid-rules-core.js']
    })
    // waiting on https://github.com/substack/node-browserify/issues/968   to use:
    // using https://github.com/substack/browser-pack/compare/master...jmm:standalone-require3
    .external('vivalid')
    .bundle()
    .pipe(source('vivalid-rules-core-bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(buffer())
    .pipe(rename('vivalid-rules-core-bundle.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['build']);
