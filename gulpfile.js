/***************************************HTML处理（HTML Task）**************************************/
/*把开发环境中的HTML文件，移动至发布环境（自动把开发环境Src中的HTML移动到了发布环境dist中）*/
// var gulp=require("gulp");//引入GULP模块
// gulp.task("html",function () {
//     return gulp.src("src/**/*.html")//指明源文件路径，并进行文件匹配
//         .pipe(gulp.dest("dist"));//输出路径
// })
//在黑窗口中mygulp目录下输入gulp html运行




/*****************************************脚本压缩&重命名（Javascript Task）************************************************************/
// var gulp=require("gulp");//基础库
// var uglify=require("gulp-uglify");//js压缩
// gulp.task("script",function () {
//     return gulp.src("src/js/*.js")//指明源文件路径，并进行文件匹配
//         .pipe(uglify())//使用uglify进行压缩，并保留部分注释
//         .pipe(gulp.dest("dist/js"));//输出路径
// });
//黑窗口输gulp script


/********************************图片压缩(gulp-imagemin)+深度压缩（imagemin-pngquant）**************************************/
// var gulp=require("gulp");//基础库
// var imagemin=require("gulp-imagemin"),//图片压缩
//     pngquant=require("imagemin-pngquant");//深度压缩
// gulp.task("image",function () {
//     return gulp.src("src/image/**/*.{png,jpg,gif,svg}")//指明源文件路径，并进行文件匹配
//         .pipe(imagemin({
//             progressive:true,//无损压缩JPG图片
//             svgoPlugins:[{removeViewBox:false}],//不移除svg的viewbox属性
//             use:[pngquant()]//使用pngquant插件进行深度压缩
//         }))
//         .pipe(gulp.dest("dist/image"));//输出路径
// })
//黑窗口输gulp image运行

/******************************************************CSS样式处理     Sass***************************************************************/
// var gulp=require("gulp"),
//  sass=require("gulp-ruby-sass");
// gulp.task("sass",function () {
//     return sass("src/sass/*.scss")
//         .pipe(gulp.dest("dist/css"));
// });
// gulp.task("default",["sass"]);

/*******************************************************************************************************************************/
var gulp=require("gulp"),
 webserver=require("gulp-webserver");
gulp.task("webserver",function () {
    gulp.src("./")          //服务器目录（./代表根目录）
        .pipe(webserver({     //运行gulp-webserver
            open:true
        }));
});
gulp.task("default",["webserver"]);