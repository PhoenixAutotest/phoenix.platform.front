define('router', ['backbone', 'jquery'], function(b, $){
    var Router = Backbone.Router.extend({
        routes: {
            '*action':"defaultAction",
            'abc': 'defaultAction'
        },
        defaultAction:function(routerName){
            console.log('actioin');
            require('module');
        },
        execute: function (callback, args, name) {
            if(false)
            require(['modules/module.js'], function (module) {
                console.log(module);
                module.init();
            });
        }
    });
    console.log(123);

    var router = new Router();
    return router;
});