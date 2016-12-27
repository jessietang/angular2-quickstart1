/**
 * Created by jessietang on 12/26/2016.
 */
(function(app){
    document.addEventListener('DOMContentLoaded', function(){
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.AppModule);
    });
})(window.app || (window.app = {}));


/*我们需要两样东西来启动应用：
 Angular 的 platformBrowserDynamic().bootstrapModule 函数。
 上文中提到的应用根模块 AppModule*/