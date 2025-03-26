// Set map view and zoom
var map = L.map('map').setView([55.684, 12.585], 13);

// Set tile images, attribution text, and maximum zoom level
L.tileLayer('https://api.mapbox.com/styles/v1/queer-cph/cm8qadwma000o01s5geacdv9j/tiles/512/{x}/{y}/{z}@2x?access_token=pk.eyJ1IjoicXVlZXItY3BoIiwiYSI6ImNtOHFiZ3d2NjBhaHUyanNocHNsMjdueTAifQ.4iO6a24QEmFbGKB0uCpiww', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.mapbox.com/about/maps">Mapbox</a> &#169; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);