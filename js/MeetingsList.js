var meetings = ["Meeting 1", "Test Meeting", "Another Meeting", "Meeting 4"];

function MeetingsList(meetingsListID) {
	this.id = meetingsListID;

	this.load = function() {
		meetings.forEach(function(meeting) {
			var button = document.createElement("div");
		    button.innerHTML = meeting;
		    button.className = "meeting-button";
		    document.getElementById("meeting_buttons").appendChild(button);

		    linebreak = document.createElement("br");
			document.getElementById("meeting_buttons").appendChild(linebreak);
		});
	}
}
