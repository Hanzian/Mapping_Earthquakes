// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// create a layer 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
streets.addTo(map);

// Add GeoJSON data.
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Hanzian/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    onEachFeature: function(feature, layer){
        layer.bindPopup("<h3>" + feature.properties.name + "</h3>")
    }
  }).addTo(map);
});
