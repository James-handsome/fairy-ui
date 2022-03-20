const gulp = require("gulp");
const less = require("gulp-less");
const minifyCSS = require("gulp-minify-css");

gulp.task("less", async function () {
  return gulp
    .src("./components/styles/*.less")
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest("dist/css"));
});

// 拷贝字体文件
gulp.task("fonts", async function () {
  return gulp
    .src("./components/styles/common/iconfont/fonts/*.*")
    .pipe(gulp.dest("dist/css/fonts"));
});

gulp.task(
  "default",
  gulp.parallel("less", "fonts", (done) => done())
);
