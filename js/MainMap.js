function MainMap(mainMapID) {

    this.id = mainMapID;
    this.map = null;

    this.load = function() {
        this.map = L.map(mainMapID, {center: [53.54, -113.49], zoom: 11, attributionControl: false});

        L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);

    };

    this.getClick = function(callback) {
        var marker = null;
        this.map.on('click', function(e) {
            marker = new L.marker(e.latlng, {marker: true}).addTo(this);
            this.on('click', null);
            callback(marker);
        });
    };

    this.zoomTo = function(location) {
        this.map.setView(new L.LatLng(location.latitude, location.longitude), 12, { animation: true });
    }
}
