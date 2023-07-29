L.mapbox.accessToken = 'pk.eyJ1IjoiZGFydGhzaW51aGUiLCJhIjoiY2lvYzUwbm11MDRmZHZibHprczAzcWt2NiJ9.6iETCK0zGgUXB4iGbjQzHQ';
var output = document.getElementById('output');
var map = L.mapbox.map('map', 'mapbox.streets');
var geoInput = document.getElementById('geoInput');
// Initialize the geocoder control and add it to the map.
var geocoderControl = L.mapbox.geocoder('mapbox.places');
//geocoderControl.addTo(map);


geoInput.onkeyup = function() {
  geocoderControl.query(geoInput.value, function(err, data){
    output.innerHTML = "";
    for(var i=0; i<5; i++){
      output.innerHTML += JSON.stringify(data.results.features[i].place_name) + "<br>";
    };
  });
};
