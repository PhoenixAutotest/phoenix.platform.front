require.config({
    baseUrl: 'node_modules',
    paths: {
        underscore: 'underscore/underscore',
        backbone: 'backbone/backbone',
        jquery: 'jquery/dist/jquery',
        require_css: 'require-css/css',
        require_text: 'require-text/index',
        bootstrap: 'bootstrap',
        rest: 'suren-restful/restFul',
        router: '../router',
        module: '../modules/module'
    },
    shim: {
        'underscore':{
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['jquery', 'backbone', 'router', 'views/view.js'], function($){
    Backbone.history.start();
});