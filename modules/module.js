define(['backbone'], function () {
    var Menu = Backbone.Model.extend({
        url: 'debug/menus.json',
        initialize: function () {
        }
    });

    return Menu;
});