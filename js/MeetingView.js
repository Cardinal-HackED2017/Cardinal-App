var messages = ["this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf"];

function MeetingView(sidebar, divID, meeting) {

    this.meeting = meeting;
    this.id = divID;

    this.load = function() {
        console.log(meeting);

        meeting.times = [1, 2, 3];

        d3.select(this.id)
            .append("h1")
            .classed("meetingInfoTitle", true)
            .text(meeting.name);

        d3.select(this.id)
            .append("div")
            .classed("backIconContainer", true)
            .append('i')
            .classed('fa fa-chevron-left aria-hidden backIcon', true)
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

        var description = d3.select('.meetingContent')
            .append('div')
            .classed('meetingSection', true);

        description.append('div')
            .classed('sectionIdentifier', true)
            .append('i')
            .classed('fa fa-info aria-hidden', true);

        description.append('div')
            .classed('sectionContents', true)
            .append('div')
            .classed('description', true)
            .text(meeting.description);

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

        var messageBox = d3.select(this.id)
            .append("div")
            .classed("peek", true);

        messageBox.append('div')
            .classed('previousMessages', true)
            .selectAll('div.message')
            .data(messages)
            .enter()
            .append('div')
            .classed('message', true)
            .text(function(d) { return d; });

        messageBox.append('input')
            .attr("id","newMessage")
            .attr("type", "text");

        messageBox.append("div")
            .classed("submitButton", true)
            .text('Submit')
            .attr('id','sendMessage');
    }
}
