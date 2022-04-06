const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

// 编译less
gulp.task('css', async function () {
   return  gulp.src('../packages/styles/index.less')
        .pipe(less(
            {
                plugins: [autoprefix]
            }
        ))
        .pipe(cleanCSS())
        .pipe(rename('index.css'))
        .pipe(gulp.dest('../lib/styles'));
});

// 拷贝字体文件
gulp.task('fonts', async function () {
    return gulp.src('../packages/styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('../lib/styles/fonts'));
});

gulp.task(
    "default",
    gulp.parallel("css", "fonts", (done) => done())
);
