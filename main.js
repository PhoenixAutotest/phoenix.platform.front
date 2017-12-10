require.config({
    baseUrl: 'node_modules',
    paths: {
        underscore: 'underscore/underscore',
        backbone: 'backbone/backbone',
        jquery: 'jquery/dist/jquery',
        require_css: 'require-css/css',
        text: 'text/text',
        bootstrap: 'bootstrap',
        suren_restful: 'suren-restful/restFul',
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

require(['jquery', 'backbone', 'suren_restful', 'router', 'views/view.js'], function($, Backbone, rest){
    Backbone.ajax = function() {
        return Backbone.$.ajax.apply($.suAjax, arguments);
    };
    Backbone.history.start();

    console.log(rest);
});