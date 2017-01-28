function MainMap(mainMapID) {

    this.id = mainMapID;

    this.load = function() {
        var map = L.map(mainMapID, {center: [53.54, -113.49], zoom: 11, attributionControl: false});

        // L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png').addTo(map);
        L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map);
        // L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png').addTo(map);
    }
}
