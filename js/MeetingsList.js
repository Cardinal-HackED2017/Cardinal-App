var meetings = [
	{"name": "Meeting 1",
	"description": "this is a cool meeting",
	"participants": ["Steve", "Hailey"],
	"id": "1"},
	{"name": "Test Meeting",
	"description": "this is another cool meeting",
	"participants": ["Steve", "George", "Ryan"],
	"id": "2"},
	{"name": "Another Meeting",
	"description": "this is a non-cool meeting",
	"participants": ["Curtis"],
	"id": "3"}
];

function MeetingsList(sidebar, meetingsListID) {
	this.id = meetingsListID;

	this.load = function() {
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
}
