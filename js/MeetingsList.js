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

var SIDEBAR_LIGHT_COLOUR = "#ff9999";
var SIDEBAR_DARK_COLOUR = "#c41e3a";

function MeetingsList(meetingsListID) {
	this.id = meetingsListID;

	this.load = function() {
		d3.select('#meetingButtons')
			.selectAll('.meetingButton')
			.data(meetings)
			.enter()
			.append('div')
			.classed('meetingButton', true)
			.attr("background-color", SIDEBAR_DARK_COLOUR)
			.text(function(d) {
				return d.name;
			}).on('mouseover', function(){
    			d3.select(this).style("background-color", SIDEBAR_LIGHT_COLOUR);
			}).on('mouseout', function(){
    			d3.select(this).style("background-color", SIDEBAR_DARK_COLOUR);
			})
	}
}
