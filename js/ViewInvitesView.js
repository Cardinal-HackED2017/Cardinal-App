var invMeetings = [
    {"name": "Awesome meeting",
    "description": "this is an awesome meeting",
    "participants": ["Steve", "Hailey"],
    "times": [1, 2, 3],
    "id": "1"},
    {"name": "Test Meeting",
    "description": "this is another cool meeting",
    "participants": ["Steve", "George", "Ryan"],
    "times": [4, 5, 6],
    "id": "2"},
    {"name": "Another Meeting",
    "description": "this is a non-cool meeting",
    "participants": ["Curtis"],
    "times": [7, 8, 9],
    "id": "3"}
];

function ViewInvitesView(sidebar, viewInvitesViewID) {

    this.id = viewInvitesViewID;

    var inviteList = this;

    this.getInvitations = function() {
		d3.request("http://" + hostandport + "/invitations/")
	        .header('Content-Type', 'application/json')
	        .header("Authorization", authToken)
			.header('E-mail', authEmail)
	        .response(function(xhr) { return JSON.parse(xhr.responseText); })
	        .get(function(error, data) {
				if (error) { console.log(error); }
	    		else { inviteList.update(data) }
	        });
	}

    this.acceptInvitation = function(inv) {
        d3.request("http://" + hostandport + "/invitations/" + inv.invitationId)
	        .header('Content-Type', 'application/json')
	        .header("Authorization", authToken)
			.header('E-mail', authEmail)
	        .response(function(xhr) { return JSON.parse(xhr.responseText); })
	        .post(function(error) {
				if (error) { console.log(error); }
                else { sidebar.clear(); sidebar.load(); }
	        });
    }

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

        this.getInvitations();
    }

    this.update = function(invs) {
        if (invs == null) {
            return;
        }

        var invSelection = d3.select(this.id)
            .append("div")
            .classed("invitesList", true)
            .selectAll('.inviteItem')
            .data(invs);

        invSelection.enter()
            .append('div')
            .classed('inviteItem', true)
            .append("p")
            .text(function(d) {
                console.log(d);
                return d.meetingName;
            }).append("p")
            .append("div")
            .text("Join meetup")
            .classed("submitButton", true)
            .on('click', this.acceptInvitation);
    }
}
