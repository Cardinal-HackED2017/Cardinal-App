function MeetingsList(sidebar, meetingsListID) {
	this.id = meetingsListID;

	var list = this;

	this.getMeetings = function() {
		d3.request("http://" + hostandport + "/meetings/")
	        .header('Content-Type', 'application/json')
	        .header("Authorization", authToken)
			.header('E-mail', authEmail)
	        .response(function(xhr) { return JSON.parse(xhr.responseText); })
	        .get(function(error, data) {
				if (error) { console.log(error); }
	    		else { list.update(data) }
	        });
	}

	this.load = function() {
		this.getMeetings();
	}

	this.update = function(meetings) {
		console.log(meetings);
		if (meetings == null) {
			return;
		}

		var meetingSelection = d3.select(this.id)
			.selectAll('.meetingButton')
			.data(meetings);

		meetingSelection.enter()
			.append('div')
			.classed('meetingButton', true)
			.text(function(d) {
				return d.name;
			}).on('click', function(d) {
				sidebar.showMeeting(d);
			});

		meetingSelection.text(function(d) {
				return d.name;
			});

		meetingSelection.exit()
			.remove();
	}
}
