require.config({
    baseUrl: 'node_modules',
    paths: {
        underscore: 'underscore/underscore',
        backbone: 'backbone/backbone',
        jquery: 'jquery/dist/jquery'
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

require(['jquery', 'backbone'],function($){
    Backbone.history.start();
});