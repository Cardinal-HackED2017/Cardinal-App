function Sidebar(sidebarID) {
    this.id = sidebarID;
    this.list = null;
    this.meeting = null;

    this.load = function() {
        d3.select(this.id)
            .append('div')
            .classed('sidebarContext', true);
        d3.select(this.id)
            .append('div')
            .classed('sidebarMgmtButtons', true);

        this.list = new MeetingsList(this, this.id + ' .sidebarContext');
        this.list.load();
    }

    this.clearContext = function() {
        d3.select(this.id + ' .sidebarContext').selectAll('*').remove();
    }

    this.showMeeting = function(meeting) {
        this.clearContext();
        this.meeting = new MeetingView();
        this.meeting.load();
    }
}
