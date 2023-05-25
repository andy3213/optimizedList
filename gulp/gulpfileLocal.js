/* eslint-disable no-console */
"use strict";
// const babel = require("gulp-babel");
const gulp = require("gulp");
// const util = require("gulp-util");
// const sourcemaps = require("gulp-sourcemaps");
// const path = require("path");
// const gulpVue = require("gulp-vue-file");
// const gulpLess = require("gulp-less");
// const using = require("gulp-using");
// const cwd = process.cwd();
// const getBabelCommonConfig = require("./getBabelCommonConfig");
// const babelConfig = getBabelCommonConfig(true);
// delete babelConfig.cacheDirectory;

// const userName = getUsername();
// const projectName = util.env.projectName;

gulp.task("default", function(onEnd) {
  const src="../dist/ctree.umd.min.js";
  // const dest="../../../yn_p1_frontend/src/components/yn-optimized-list/components/ctree"
  const dest = "D:/work/ideaproject/yn_p1_frontend/src/components/yn-optimized-list/components/ctree"
    gulp
      .src(src)
      .pipe(gulp.dest(dest))
      .on("end", function() {
        // console.log("\x1B[36m%s\x1B[0m", "From: " + src);
        console.log("\x1B[32m%s\x1B[0m", "To: " + dest);
        console.log(
          "\x1B[36m%s\x1B[0m",
          "-------------------- 结束 --------------------"
        );
      });
  const src2="../dist/ctree.css";
  const dest2 = "D:/work/ideaproject/yn_p1_frontend/src/components/yn-optimized-list/components/ctree"
    gulp
      .src(src2)
      .pipe(gulp.dest(dest2))
      .on("end", function() {
      });
  onEnd();
});
