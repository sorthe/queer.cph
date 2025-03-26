// Set map view and zoom
var map = L.map('map').setView([55.684, 12.585], 13);

// Set tile images, attribution text, and maximum zoom level
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);