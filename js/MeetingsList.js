var meetings = [
	{"name": "Meeting 1",
	"description": "this is a cool meeting",
	"participants": ["Steve", "Hailey"],
	"times": [],
	"id": "1"},
	{"name": "Test Meeting",
	"description": "this is another cool meeting",
	"participants": ["Steve", "George", "Ryan"],
	"times": [],
	"id": "2"},
	{"name": "Another Meeting",
	"description": "this is a non-cool meeting",
	"participants": ["Curtis"],
	"times": [],
	"id": "3"}
];

function MeetingsList(sidebar, meetingsListID) {
	this.id = meetingsListID;

	this.load = function() {
		this.getMeetings();

		d3.select(this.id)
			.selectAll('.meetingButton')
			.data(meetings)
			.enter()
			.append('div')
			.classed('meetingButton', true)
			.text(function(d) {
				return d.name;
			}).on('click', function(d) {
				sidebar.showMeeting(d);
			});
	}

	this.getMeetings = function() {
		d3.request("http://" + hostandport + "/meetings/")
	        .mimeType("application/json")
	        .header("Authorization", authToken)
	        .response(function(xhr) { return JSON.parse(xhr.responseText); })
	        .get(function(error, data) {
				if (error) { console.log(error); }
	    		else { console.log(data); }
	        });
	}
}
