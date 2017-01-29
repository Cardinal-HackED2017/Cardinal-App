function CreateMeetingView(sidebar, createMeetingViewID) {

    this.id = createMeetingViewID;

    this.load = function() {
        d3.select(this.id)
            .append("h1")
            .classed("meetingInfoTitle", true)
            .text("Add a meeting");

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
            .classed("newMeetingInput", true)
            .append("form");

        d3.select("form")
            .append("p")
            .text("Meeting name ")
            .append("input")
            .attr("id","meetingName")
            .attr("type", "text");

        d3.select("form")
            .append("p")
            .text("Meeting description");

        d3.select("form")
            .append("textarea")
            .attr("id","meetingDescription")
            .attr("placeholder", "A short description that your invitees will see");

        d3.select("form")
            .append("p")
            .text("Earliest day ")
            .append("input")
            .attr("id","startDate")
            .attr("type", "date");

        d3.select("form")
            .append("p")
            .text("Latest day ")
            .append("input")
            .attr("id","endDate")
            .attr("type", "date");

        d3.select("form")
            .append("p")
            .text("Days start at ")
            .append("input")
            .attr("id","startTime")
            .attr("type", "time");;

        d3.select("form")
            .append("p")
            .text("Days end at ")
            .append("input")
            .attr("id","endTime")
            .attr("type", "time");

        d3.select("form")
            .append("p")
            .text("Meeting length ")
            .append("input")
            .attr("id","meetingLength")
            .attr("type", "time");

        d3.select("form")
            .append("p")
            .text("Send invites ");

        d3.select("form")
            .append("textarea")
            .attr("id","inviteEmails")
            .attr("placeholder", "Email addresses, separated by spaces")
            .classed("emailInputs", true);

        d3.select("form")
            .append("br");

        d3.select("form")
            .append("input")
            .attr("type", "submit")
            .classed("submitButton", true);
    }
}
