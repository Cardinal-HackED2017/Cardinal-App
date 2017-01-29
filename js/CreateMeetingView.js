function CreateMeetingView(sidebar, createMeetingViewID) {

    this.id = createMeetingViewID;

    this.load = function() {
        console.log(this.id);
        d3.select(this.id)
            .append('h1')
            .classed('meetingInfoTitle', true)
            .text("Add a meeting:");
        console.log(d3.select(this.id));
    }
}
