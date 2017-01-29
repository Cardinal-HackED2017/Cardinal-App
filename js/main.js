var socket;

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  function initClient() {
    gapi.client.init({
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      clientId: authClientID,
      scope: scopes
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    });
  }

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      authToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
      authEmail = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail();
    } else {
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

handleClientLoad();

window.onload = function() {

    views = [
        new MainMap('map'),
        new Sidebar('#sidebar')
    ];

    views.forEach(function(view) {
        view.load();
    });

    d3.request("http://" + hostandport + "/users/")
        .mimeType("application/json")
        .header("Authorization", authToken)
        .header("E-mail", authEmail) // heheheheheheh
        .header("P-assword", "hunter2")
        .response(function(xhr) { return JSON.parse(xhr.responseText); })
        .get(function(data) {
            console.log(data);
        });

    // doConnect();

};

function send_message(message) {
    socket.send(message)
}

function process(s) {

}

function doConnect() {
    socket = new WebSocket(hostandport);
    socket.onmessage = process;
}
