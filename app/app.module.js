/**
 * Created by jessietang on 12/26/2016.
 */
// Angular 应用由 Angular 模块组成，该模块包含了 Angular 应用所需要的组件及其他任何东西
(function(app){
    app.AppModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [app.AppComponent],
        bootstrap: [app.AppComponent]
    })
        .Class({
            constructor: function(){}
        });
})(window.app || (window.app = {}));