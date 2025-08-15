// 1. Initialize the map
// Note: Leaflet uses [latitude, longitude], while GeoJSON is [longitude, latitude].
// So we need to reverse the coordinates from the 'listing' object.
const map = L.map('map').setView([listing.geometry.coordinates[1], listing.geometry.coordinates[0]], 9);

// 2. Add the OpenStreetMap tile layer (the map background)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 3. Add a marker
const marker = L.marker([listing.geometry.coordinates[1], listing.geometry.coordinates[0]]).addTo(map);

// 4. Bind a popup to the marker
marker.bindPopup(`<div class="map-click">
  <h4><b>${listing.title}</b></h4> 
  <p>Exact location will be provided after booking.</p>
  </div>`
);

// 5. Add controls (Zoom is on by default, Scale is optional)
L.control.scale().addTo(map);