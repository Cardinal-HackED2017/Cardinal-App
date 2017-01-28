window.onload = function() {
    views = [
        new MainMap('map'),
        new MeetingsList('meetingList')
    ];

    views.forEach(function(view) {
        view.load();
    });
};
