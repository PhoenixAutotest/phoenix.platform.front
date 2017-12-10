define(['backbone', '../modules/module.js',
    'text!../../templates/header.html',
    'require_css!bootstrap/dist/css/bootstrap.css',
    'require_css!../../css/index.css'], function (Backbone, Menu, header) {
    var MenuView = Backbone.View.extend({
        el: $('body'),
        show: function (menus) {
            var template = _.template(header)({
                menus: menus
            });
            $('body').append(template);
        }
    });

    var m = new Menu();
    m.fetch({
        success: function (model, response) {
            console.log(model);
            console.log(response);
            new MenuView().show(response);
        }
    });
});