var SIDEBAR_LIGHT_COLOUR = "#ff9999";
var SIDEBAR_DARK_COLOUR = "#c41e3a";

function SidebarMgmtButtons(sidebar, sidebarMgmtButtonsID) {
	this.id = sidebarMgmtButtonsID;

	this.load = function() {
		d3.select(this.id)
			.append('div')
			.classed('sidebarMgmtButton', true)
			.text(function() {
				return "Create a Meetup";
			}).on('click', function() {
				sidebar.createMeeting();
			});
		d3.select(this.id)
			.append('div')
			.classed('sidebarMgmtButton', true)
			.text(function() {
				return "View Invitations";
			}).on('click', function() {
				sidebar.viewInvites();
			});
	}
}
