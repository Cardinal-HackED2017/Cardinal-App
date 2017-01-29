function CreateMeetingView(sidebar, createMeetingViewID, mainMap) {

    this.id = createMeetingViewID;
    var marker = null;

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
            .attr("id","meetingDescription")
            .attr("placeholder", "A short description that your invitees will see");

        d3.select(".createForm")
            .append('div')
            .classed("submitButton", true)
            .text('Select a location')
            .on('click', getMapClick);

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
            .attr("type", "time");

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
            .attr("type", "number")
            .attr("value", "30")
            .attr("min", "5");

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
            .append("div")
            .classed("submitButton", true)
            .text('Submit')
            .on('click', sendCreateParams);
    }

    function mapClickCallback(returnedMarker) {
        if (marker) {
            mainMap.map.removeLayer(marker);
        }
        marker = returnedMarker;
        console.log(marker);
        d3.select('#sidebarBlackout').style('display', null);
    }

    function getMapClick() {
        d3.select('#sidebarBlackout').style('display', 'initial');
        mainMap.getClick(mapClickCallback);
    }

    function zeroPad(number) {
        return ("00" + number).substr(-2,2);
    }

    function getTimeSpan(minutes) {
        var millis = minutes * 60 * 1000;

        var days = zeroPad(Math.floor(millis / (1000 * 60 * 60 * 24)));
        millis -=  days * (1000 * 60 * 60 * 24);

        var hours = zeroPad(Math.floor(millis / (1000 * 60 * 60)));
        millis -= hours * (1000 * 60 * 60);

        var mins = zeroPad(Math.floor(millis / (1000 * 60)));
        millis -= mins * (1000 * 60);

        var seconds = zeroPad(Math.floor(millis / (1000)));
        millis -= seconds * (1000);

        return days + "." + hours + ":" + mins + ":" + seconds;
    }

    function sendCreateParams() {
        var latLng = {"lat": "", "lng": ""};
        if (marker) {
            latLng = marker.getLatLng();
        }
        // #meetingName, #meetingDescription, #startDate,
        // #endDate, #startTime, #endTime, #meetingLength, #inviteEmails
        var sendJSON = '{"Name": "' + d3.select('#meetingName').node().value +
            '", "Description": "' + d3.select('#meetingDescription').node().value +
            '", "StartFence": "' + d3.select('#startDate').node().value +
            '", "EndFence": "' + d3.select('#endDate').node().value +
            '", "dayStart": "' + d3.select('#startTime').node().value +
            '", "dayEnd": "' + d3.select('#endTime').node().value +
            '", "Length": "' + getTimeSpan(parseFloat(d3.select('#meetingLength').node().value)) +
            '", "Longitude": "' + latLng.lng +
            '", "Latitude": "' + latLng.lat +
            '", "InviteEmails": "' + d3.select('#inviteEmails').node().value + '"}';

        d3.request("http://" + hostandport + "/meetings/")
	        .header('Content-Type', 'application/json')
	        .header("Authorization", authToken)
			.header('E-mail', authEmail)
	        .response(function(xhr) { return JSON.parse(xhr.responseText); })
	        .post(sendJSON, function(error, data) {
				if (error) { console.log(error); }
                else { sidebar.clear(); sidebar.load(); }
	        });
    }
}
