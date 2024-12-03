class SimpleMapHandler {
    // Constructor initializes the map and sets up the initial view and zoom level.
    constructor(mapElementId, initialCoords, initialZoomLevel) {
        // Encapsulation: Storing the map instance as a property of the class
        this.mapInstance = L.map(mapElementId).setView(initialCoords, initialZoomLevel);
        
       
        this.setupTileLayer();
        this.addLocationMarker(initialCoords);
    }

  
    setupTileLayer() {
        // Abstraction: Hides the complexity of adding a tile layer and just exposes the simple function
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.mapInstance);
    }

    // Method to add a location marker to the map
    addLocationMarker(coords) {
        // Encapsulation: The marker functionality is encapsulated within the class, making it easier to use.
        const marker = L.marker(coords).addTo(this.mapInstance);

       
        marker.bindPopup("       Join Our Community now! <br>  At Colex Manolo Fortich Bukidnon").openPopup();
    }
}

const mapInstance = new SimpleMapHandler('map', [8.370295, 124.85808], 18);

