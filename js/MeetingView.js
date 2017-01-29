function MeetingView(sidebar, divID, meeting) {

    this.meeting = meeting;
    this.id = divID;

    this.load = function() {
        console.log(meeting);
        d3.select(this.id)
            .append("h1")
            .classed("meetingInfoTitle", true)
            .text(meeting.name);

        d3.select(this.id)
            .append("div")
            .classed("backIconContainer", true)
            .append("img")
            .attr("src","../images/back_icon.png")
            .classed("backIcon", true)
            .on('click', function() {
                sidebar.clear();
                sidebar.load();
            });

        d3.select(this.id)
            .append('div')
            .classed('meetingContent', true);

        var participants = d3.select('.meetingContent')
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


        var times = d3.select('.meetingContent')
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
