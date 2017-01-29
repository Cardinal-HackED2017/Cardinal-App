var SIDEBAR_LIGHT_COLOUR = "#ff9999";
var SIDEBAR_DARK_COLOUR = "#c41e3a";

function SidebarMgmtButtons(sidebar, sidebarMgmtButtonsID) {
	this.id = sidebarMgmtButtonsID;

	this.load = function() {
		d3.select(this.id)
			.append('div')
			.classed('meetingMgmtButton', true)
			.style("background-color", SIDEBAR_DARK_COLOUR)
			.text(function() {
				return "Create a Meeting";
			}).on('mouseover', function(){
    			d3.select(this).style("background-color", SIDEBAR_LIGHT_COLOUR);
			}).on('mouseout', function(){
    			d3.select(this).style("background-color", SIDEBAR_DARK_COLOUR);
			}).on('click', function() {
				// TODO
			});
		d3.select(this.id)
			.append('div')
			.classed('meetingMgmtButton', true)
			.style("background-color", SIDEBAR_DARK_COLOUR)
			.text(function() {
				return "View Invitations";
			}).on('mouseover', function(){
    			d3.select(this).style("background-color", SIDEBAR_LIGHT_COLOUR);
			}).on('mouseout', function(){
    			d3.select(this).style("background-color", SIDEBAR_DARK_COLOUR);
			}).on('click', function() {
				// TODO
			});
	}
}
