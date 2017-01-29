var meetings = [
    {"name": "Awesome meeting",
    "description": "this is an awesome meeting",
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

function ViewInvitesView(sidebar, viewInvitesViewID) {

    this.id = viewInvitesViewID;

    this.load = function() {
        d3.select(this.id)
            .append("h1")
            .classed("meetingInfoTitle", true)
            .text("Invitations");

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
            .classed("invitesList", true)
            .selectAll('.inviteItem')
            .data(meetings)
            .enter()
            .append('div')
            .classed('inviteItem', true)
            .append("p")
            .text(function(d) {
                return d.name
            }).append("p")
            .text(function(d) {
                return d.description
            }).append("p")
            .append("input")
            .attr("type", "submit")
            .attr("value", "Check schedule")
            .classed("submitButton", true);
        }
}
