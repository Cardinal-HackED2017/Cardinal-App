function MeetingView(divID, meeting) {

    this.meeting = meeting;

    this.load = function() {
        participants = d3.select(divID)
            .append('div')
            .classed('participants', true);

        participants.selectAll('div.participant')
            .data(meeting.participants)
            .enter()
            .append('div')
            .classed('participant', true)
            .text(function(d) { return d; });
    }
}
