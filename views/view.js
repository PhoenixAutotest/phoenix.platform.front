define(['backbone', '../modules/module.js',
    'require_css!bootstrap/dist/css/bootstrap.css',
    'require_css!../../css/index.css'], function (b, M) {
    var Main = Backbone.View.extend({
        el: $('body'),
        show: function (model) {
            $.get('templates/header.html', function (tmp) {
                var template = _.template(tmp)({
                    menus: model.get('menus')
                });
                $('body').append(template);
            });
        }
    });

    var m = new M({
        name: 'name'
    });
    m.set('menus', [{
        name: 'name1',
        href: 'http://baidu.com'
    }, {
        name: 'name2',
        href: 'http://baidu.com'
    }]);
    new Main().show(m);
});