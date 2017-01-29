function Sidebar(sidebarID) {
    this.id = sidebarID;
    this.context = this.id + ' .sidebarContext';
    this.list = null;
    this.meeting = null;

    this.load = function() {
        d3.select(this.id)
            .append('div')
            .classed('sidebarContext', true);
        d3.select(this.id)
            .append('div')
            .classed('sidebarMgmtButtons', true);

        this.list = new MeetingsList(this, this.context);
        this.list.load();
    }

    this.clearContext = function() {
        d3.select(this.context).selectAll('*').remove();
    }

    this.showMeeting = function(meeting) {
        this.clearContext();
        this.meeting = new MeetingView(this, this.context, meeting);
        this.meeting.load();
    }
}
