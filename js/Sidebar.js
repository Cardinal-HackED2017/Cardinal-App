function Sidebar(sidebarID) {
    this.id = sidebarID;
    this.context = this.id + ' .sidebarContext';
    this.menu = this.id + ' .sidebarMgmtButtons';
    this.list = null;
    this.meeting = null;
    this.mgmt = null;

    this.load = function() {
        d3.select(this.id)
            .append('div')
            .classed('sidebarContext', true)
            .append('h1')
            .classed('meetingInfoTitle', true)
            .text("My Meetings");
        d3.select(this.id)
            .append('div')
            .classed('sidebarMgmtButtons', true);

        this.list = new MeetingsList(this, this.context);
        this.list.load();

        this.mgmt = new SidebarMgmtButtons(this, this.id + ' .sidebarMgmtButtons');
        this.mgmt.load();
    }

    this.clear = function() {
        d3.select(this.id).selectAll('*').remove();
    }

    this.clearContext = function() {
        d3.select(this.context).selectAll('*').remove();
    }

    this.removeMenu = function() {
        d3.select(this.menu).selectAll('*').remove();
    }

    this.showMeeting = function(meeting) {
        this.clearContext();
        this.meeting = new MeetingView(this, this.context, meeting);
        this.meeting.load();
    }

    this.createMeeting = function() {
        this.clearContext();
        this.removeMenu();
        this.newMeeting = new CreateMeetingView(this, this.id + ' .sidebarContext');
        this.newMeeting.load();
    }

    this.viewInvites = function() {
        this.clearContext();
        this.removeMenu();
        this.newMeeting = new ViewInvitesView(this, this.id + ' .sidebarContext');
        this.newMeeting.load();
    }
}
