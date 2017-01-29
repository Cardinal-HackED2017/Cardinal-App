function CreateMeetingView(sidebar, createMeetingViewID) {

    this.id = createMeetingViewID;

    this.load = function() {
        d3.select(this.id)
            .append("h1")
            .classed("meetingInfoTitle", true)
            .text("Add a meetup");

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
            .append("div")
            .classed("newMeetingInput", true)
            .append("div")
            .classed("createForm", true);

        d3.select(".createForm")
            .append("p")
            .text("Meetup name ")
            .append("input")
            .attr("id","meetingName")
            .attr("type", "text");

        d3.select(".createForm")
            .append("p")
            .text("Meetup description");

        d3.select(".createForm")
            .append("textarea")
            .attr("id","meetupDescription")
            .attr("placeholder", "A short description that your invitees will see");

        d3.select(".createForm")
            .append("p")
            .text("Earliest day ")
            .append("input")
            .attr("id","startDate")
            .attr("type", "date");

        d3.select(".createForm")
            .append("p")
            .text("Latest day ")
            .append("input")
            .attr("id","endDate")
            .attr("type", "date");

        d3.select(".createForm")
            .append("p")
            .text("Days start at ")
            .append("input")
            .attr("id","startTime")
            .attr("type", "time");;

        d3.select(".createForm")
            .append("p")
            .text("Days end at ")
            .append("input")
            .attr("id","endTime")
            .attr("type", "time");

        d3.select(".createForm")
            .append("p")
            .text("Meetup length (min) ")
            .append("input")
            .attr("id","meetingLength")
            .attr("type", "number");

        d3.select(".createForm")
            .append("p")
            .text("Send invites ");

        d3.select(".createForm")
            .append("textarea")
            .attr("id","inviteEmails")
            .attr("placeholder", "Email addresses, separated by spaces")
            .classed("emailInputs", true);

        d3.select(".createForm")
            .append("br");

        d3.select(".createForm")
            .append("input")
            .attr("type", "submit")
            .classed("submitButton", true)
            .on('click', sendCreateParams);
    }

    function sendCreateParams() {
        // #meetingName, #meetingDescription, #startDate,
        // #endDate, #startTime, #endTime, #meetingLength, #inviteEmails
        var sendJSON = '{"Name": "' + d3.select('#meetingName').node().value +
            '", "Description": "' + d3.select('#meetingDescription').node().value +
            '", "StartFence": "' + d3.select('#startDate').node().value +
            '", "EndFence": "' + d3.select('#endDate').node().value +
            '", "dayStart": "' + d3.select('#startTime').node().value +
            '", "dayEnd": "' + d3.select('#endTime').node().value +
            '", "Length": "' + d3.select('#meetingLength').node().value +
            '", "InviteEmails": "' + d3.select('#inviteEmails').node().value + '"}';

        // d3.request("http://" + hostandport + "/meetings/")
	    //     .header('Content-Type', 'application/json')
	    //     .header("Authorization", authToken)
		// 	.header('E-mail', authEmail)
	    //     .response(function(xhr) { return JSON.parse(xhr.responseText); })
	    //     .post(sendJSON, function(error) {
		// 		if (error) { console.log(error); }
        //         else { sidebar.clear(); sidebar.load(); }
	    //     });
    }
}
