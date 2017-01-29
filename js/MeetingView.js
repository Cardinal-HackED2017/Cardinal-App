// var messages = ["this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf",
// "this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf",
// "this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf",
// "this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf",
// "this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf",
// "this is a message", "hello hello hello", "hi how are you", "blah blah asdnasofjsandf"];

function MeetingView(sidebar, divID, meeting) {

    this.meeting = meeting;
    this.id = divID;

    var meetingView = this;

    this.updateMessages = function(messages) {
        var messageBox = d3.select('#previousMessages')
            .selectAll('div.message')
            .data(messages);

        messageBox.enter()
            .append('div')
            .classed('message', true)
            .text(function(d) { return d.content; });

        messageBox.text(function(d) { return d.content; });
    }

    this.getMessages = function() {
        d3.request("http://" + hostandport + "/meetings/" + meeting.id + "/messages")
	        .header('Content-Type', 'application/json')
	        .header("Authorization", authToken)
			.header('E-mail', authEmail)
	        .response(function(xhr) { return JSON.parse(xhr.responseText); })
	        .get(function(error, data) {
				if (error) { console.log(error); }
                else { meetingView.updateMessages(data); }
	        });
    }

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
            .attr('id', 'previousMessages');

        var newMessage = messageBox.append('div')
            .classed("newMessage", true);

        newMessage.append('input')
            .attr("id","newMessage")
            .attr("type", "text");

        newMessage.append("div")
            .classed("submitButton", true)
            .text('SEND')
            .attr('id','sendMessage')
            .on('click', this.sendChatMessage);

        var msgsDiv = document.getElementById("previousMessages");
            msgsDiv.scrollTop = msgsDiv.scrollHeight;

        this.getMessages();
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

    }

    this.sendChatMessage = function() {
        d3.request("http://" + hostandport + "/meetings/" + meeting.id + "/messages")
	        .header('Content-Type', 'application/json')
	        .header("Authorization", authToken)
			.header('E-mail', authEmail)
	        .response(function(xhr) { return JSON.parse(xhr.responseText); })
	        .post('{"content": "' + d3.select('#newMessage').node().value + '"}', function(error) {
				if (error) { console.log(error); }
                d3.select('#newMessage').node().value = ""; meetingView.getMessages();
	        });
    }
}
