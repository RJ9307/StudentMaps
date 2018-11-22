var map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 51.2301299,
      lng: 4.4161723
    },
    zoom: 15,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    styles:
      //START OF SNAZZY MAPS CODE
      [{
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
              "hue": "#FFA800"
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
              "hue": "#679714"
            },
            {
              "saturation": 33.4
            },
            {
              "lightness": -25.4
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
              "hue": "#53FF00"
            },
            {
              "saturation": -73
            },
            {
              "lightness": 40
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [{
              "hue": "#FBFF00"
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [{
              "hue": "#00FFFD"
            },
            {
              "lightness": 30
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
              "hue": "#00BFFF"
            },
            {
              "saturation": 6
            },
            {
              "lightness": 8
            },
            {
              "gamma": 1
            }
          ]
        }
      ]
  });

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });

/*
for (i = 0; i < locations.length; i++) {
     marker = new google.maps.Marker({
       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
       map: map
     });*/

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Je bent hier.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: Er is iets foutgelopen.' :
    'Error: Jouw browser ondersteunt geen geolocatie.');
  infoWindow.open(map);
}
