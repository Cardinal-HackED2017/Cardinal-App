var socket;

function send_message(message) {
    socket.send(message)
}

function process(s) {

}

function doConnect() {
    socket = new WebSocket("ws://" + hostandport + "/events/" + authEmail);
    socket.onmessage = process;
}
