function MeetingView(sidebar, divID, meeting) {

    this.meeting = meeting;

    this.load = function() {
        var participants = d3.select(divID)
            .append('div')
            .classed('meetingSection', true);

        participants.append('div')
            .classed('sectionIdentifier', true)
            .append('i')
            .classed('fa fa-users aria-hidden', true);

        participants.append('div')
            .classed('sectionContents', true)
            .selectAll('div.participant')
            .data(meeting.participants)
            .enter()
            .append('div')
            .classed('participant', true)
            .text(function(d) { return d; });


        var times = d3.select(divID)
            .append('div')
            .classed('meetingSection', true);

        times.append('div')
            .classed('sectionIdentifier', true)
            .append('i')
            .classed('fa fa-clock-o aria-hidden', true);

        times.append('div')
            .classed('sectionContents', true)
            .selectAll('div.time')
            .data(meeting.times)
            .enter()
            .append('div')
            .classed('meetingTime', true)
            .text(function(d) { return d; });

    }
}
