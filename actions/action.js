define(function () {
    Backbone.sync = function (method, model) {
        console.log(method + '===' + model);
    };
});