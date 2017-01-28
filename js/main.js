window.onload = function() {
    views = [
        new MainMap('map')
    ];

    views.forEach(function(view) {
        view.load();
    });
};
