window.onload = function() {
    views = [
        new MainMap('map'),
        new Sidebar('#sidebar')
    ];

    views.forEach(function(view) {
        view.load();
    });
};
