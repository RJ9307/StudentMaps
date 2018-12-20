// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,
    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(51.2301299, 4.4161723), // New York
    // disable default interface
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
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
    //END OF SNAZZY MAPS CODE
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');
  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);
  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(51.2301299, 4.4161723),
    map: map,
    title: 'Snazzy!'
  });
}