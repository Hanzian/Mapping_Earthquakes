// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
var map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Coordinates for each point to be used in the line.
var line = [
  [33.9416, -118.4085],
  [37.6214, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// We create the tile layer that will be the background of our map.
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);
