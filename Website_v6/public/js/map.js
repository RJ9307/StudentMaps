L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    //L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

var distance = 400;
function showWithinOwnArea(e){
    distance += e.accuracy / 2;

    L.circle(e.latlng, distance).addTo(map);
}

map.on('locationfound', showWithinOwnArea);

function showWithinOwnAreaError(e) {
    alert(e.message);
}

map.on('locationerror', showWithinOwnAreaError);
