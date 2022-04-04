const gulp = require("gulp");
const less = require("gulp-less");
const minifyCss = require("gulp-minify-css");
const rename = require("gulp-rename");


gulp.task("less", function () {
  gulp
    .src("./packages/styles/index.less")
    .pipe(less())
    .pipe(minifyCss())
    .pipe(rename("fairy-ui.css"))
    .pipe(gulp.dest("lib/styles"));
});

// 拷贝字体文件
gulp.task("fonts", function () {
  gulp
    .src("./packages/styles/common/iconfont/fonts/*.*")
    .pipe(gulp.dest("lib/styles/fonts"));
});

gulp.task(
  "default",
  gulp.parallel("less", "fonts", (done) => done())
);
