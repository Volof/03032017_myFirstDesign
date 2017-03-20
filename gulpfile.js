var gulp = require("gulp");
var less = require("gulp-less");
var nano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var autoprefixer = require("gulp-autoprefixer");
var sync = require("browser-sync").create();
var imagemin = require('gulp-imagemin');

// var imageop = require("gulp-image-optimization");

var isDevelopment = true;


gulp.task('images', function () {
   return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});
// билд json

gulp.task("json", function () {
    return gulp.src("src/json/*.json")
        .pipe(gulp.dest("dist/json"));
});

// билдим шрифты
gulp.task("fonts", function () {
    return gulp.src("src/fonts/*.otf")
        .pipe(gulp.dest("dist/fonts")); //вигружаєм в src
});
gulp.task("fonts_bs", function () {
    return gulp.src("node_modules/bootstrap/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}")
        .pipe(gulp.dest("dist/fonts")); //вигружаєм в src
});

// gulp.task('images', function() {
//     return gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
//         optimizationLevel: 10,
//         progressive: true,
//         interlaced: true
//     }))
//         .pipe(gulp.dest('img'));
// });

gulp.task("js:vendor", function () {
    return gulp.src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/jquery/dist/jquery-migrate.min.js",
        "node_modules/datatables.net/js/jquery.dataTables.js",
        "node_modules/jquery-bar-rating/dist/jquery.barrating.min.js",
        "node_modules/tooltipster/dist/js/tooltipster.bundle.min.js",
        "node_modules/jquery-validation/dist/jquery.validate.js",
        "node_modules/sweetalert/dist/sweetalert.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "src/libs/Flat-UI-Maps/js/flatui-colorDrop.js",
        "src/libs/Flat-UI-Maps/js/html5shiv.js",
        "src/libs/animatedModal.js-master/animatedModal.min.js"
    ])
        .pipe(concat("vendor.js"))
        .pipe(gulpIf(!isDevelopment, uglify()))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("css:vendor", function () {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/sweetalert/dist/sweetalert.css",
        "node_modules/jquery-bar-rating/dist/themes/fontawesome-stars.css",
        "node_modules/tooltipster/dist/css/tooltipster.bundle.min.css",
        "src/libs/Flat-UI-Maps/css/flat-ui.css",
        "src/libs/Flat-UI-Maps/css/map.css",
        "src/libs/Flat-UI-Maps/css/flatui-colorDrop.css",
        "src/libs/animatedModal.js-master/demo/css/animate.min.css"
    ])
        .pipe(gulpIf(!isDevelopment, nano()))
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest("dist/css"));
});
gulp.task("js:own", function () {
    return gulp.src([
        "src/js/main.js",
        "src/js/map.js",
        "src/js/dataTable.js"
    ])
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
});

gulp.task("css:own", function () {
    return gulp.src("src/css/main.less")
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(less())
        .pipe(autoprefixer("last 2 versions"))
        .pipe(nano())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest("dist/css"))
        .pipe(sync.stream());
});

gulp.task("html", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});
gulp.task("css", ["css:own", "css:vendor"]);
gulp.task("js", ["js:own", "js:vendor"]);

gulp.task("watch", ["build"], function () {
    sync.init({
        server: "dist"
    });
    gulp.watch("src/css/**/*.less", ["css:own"]);// слухач на зміни
    gulp.watch("src/js/*.js", ["js:own"]);
    gulp.watch("dist/js/*.js").on("change", sync.reload); // перезагружаєм браузер
    gulp.watch("src/*.html", ["html"]);
    gulp.watch("dist/*.html").on("change", sync.reload);
});

gulp.task("build", ["html", "css", "js", "fonts", "json", "images", "fonts_bs"]);
gulp.task("default", ["build", "watch"]);