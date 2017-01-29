var messages = ["this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf",
"this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf",
"this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf",
"this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf",
"this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf",
"this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf"];

function MeetingView(sidebar, divID, meeting) {

    this.meeting = meeting;
    this.id = divID;

    this.load = function() {
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
            .selectAll('div.meetingTime')
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
            .attr('id', 'previousMessages')
            .selectAll('div.message')
            .data(messages)
            .enter()
            .append('div')
            .classed('message', true)
            .text(function(d) { return d; });

        var newMessage = messageBox.append('div')
            .classed("newMessage", true);

        newMessage.append('input')
            .attr("id","newMessage")
            .attr("type", "text");

        newMessage.append("div")
            .text('SEND')
            .attr('id','sendMessage');

        var msgsDiv = document.getElementById("previousMessages");
            msgsDiv.scrollTop = msgsDiv.scrollHeight;
    }

    this.update = function() {
        var participants = d3.selectAll('div.participant')
            .data(meeting.participants);

        participants.enter()
            .append('div')
            .classed('participant', true)
            .text(function(d) { return d; });

        participants.text(function(d) { return d; });
        participants.exit().remove();

        var times = d3.select('.meetingContent')
            .selectAll('div.meetingTime')
            .data(meeting.times);

        times.enter()
            .append('div')
            .classed('meetingTime', true)
            .text(function(d) { return d; });

        times.text(function(d) { return d; });
        times.exit().remove();

        var messageBox = d3.select(this.id)
            .selectAll('div.message')
            .data(messages);

        messageBox.enter()
            .append('div')
            .classed('message', true)
            .text(function(d) { return d; });

        messageBox.text(function(d) { return d; });

    }
}
