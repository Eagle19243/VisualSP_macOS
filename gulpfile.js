var gulp                = require('gulp');
var webpack             = require('webpack');
var webpackStream       = require('webpack-stream');
var runSequence         = require('run-sequence');

var webpackConfig = {
    entry: {
        host: './Extension/bootstrap.js'
    },
    output: {
        filename: './Extension/bootstrap.min.js',
    }
};

function addCommonPlugins(build) {
    webpackConfig.plugins = [];
    webpackConfig.plugins.push(new webpack.DefinePlugin({ 'process.env': { 'ENV': JSON.stringify(build) } }));

}

gulp.task('build-Debug', function (cb) {
    webpackConfig.devtool = 'source-map';
    const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
    addCommonPlugins(ENV);
    return gulp
        .src([
            './Extension/bootstrap.js'
        ], { base: 'Extension' })
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('./Extension/'));
});
gulp.task('build-Test', function (cb) {
    const ENV = process.env.NODE_ENV = process.env.ENV = 'test';
    addCommonPlugins(ENV);
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: true } }));
    return gulp
        .src([
            './Extension/bootstrap.js'
        ], { base: 'Extension' })
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('./Extension/'));
});
gulp.task('build-Release', function (cb) {
    const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
    addCommonPlugins(ENV);
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: true } }));
    return gulp
        .src([
            './Extension/bootstrap.js'
        ], { base: 'Extension' })
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('./Extension/'));
});

