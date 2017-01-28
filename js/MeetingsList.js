var meetings = [
	{"name": "Meeting 1",
	"description": "this is a cool meeting",
	"id": "1"},
	{"name": "Test Meeting",
	"description": "this is another cool meeting",
	"id": "2"},
	{"name": "Another Meeting",
	"description": "this is a non-cool meeting",
	"id": "3"}
];

function MeetingsList(meetingsListID) {
	this.id = meetingsListID;

	this.load = function() {
		d3.select('#meetingButtons')
			.selectAll('.meetingButton')
			.data(meetings)
			.enter()
			.append('div')
			.classed('meetingButton', true)
			.text(function(d) {
				return d.name;
			});
	}
}
