/**
 * Created by jessietang on 12/26/2016.
 */

/*创建angular组件*/
(function(app){
    // ng.core.Component()告诉Angular这个类定义对象是一个Angular组件
    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        template: '<h1>angular2 javascript environment configuration</h1>'
    }).
    Class({
            constructor: function(){}
        });
})(window.app || (window.app={}));

/*我们通过链式调用全局Angular core命名空间ng.core中的Component和Class方法创建了一个
名为AppComponent的可视化组件。

 Component方法接受一个包含两个属性的配置对象，Class方法是我们实现组件本身的地方，在
 Class方法中我们给组件添加属性和方法，它们会绑定到相应的视图和行为。 */