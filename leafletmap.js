class SimpleMapHandler {
    constructor(mapElementId, initialCoords, initialZoomLevel) {
     
        this.mapInstance = L.map(mapElementId).setView(initialCoords, initialZoomLevel);
        
      
        this.setupTileLayer();

        this.addLocationMarker(initialCoords);
    }

    setupTileLayer() {

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.mapInstance);
    }

    addLocationMarker(coords) {

        const marker = L.marker(coords).addTo(this.mapInstance);
        marker.bindPopup("colex Gym Manolo Fortich Bukidnon").openPopup();
    }
}

const mapInstance = new SimpleMapHandler('map', [8.370295, 124.85808], 18);
