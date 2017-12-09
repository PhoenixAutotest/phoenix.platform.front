define(['backbone'], function () {
    var M = Backbone.Model.extend({
        url: 'baidu.com',
        initialize: function () {
            console.log('init');
        }
    });

    return M;
});