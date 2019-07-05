var app = document.getElementById('type_animation');

var typewriter = new Typewriter(type_animation, {
    loop: true
});

typewriter.typeString('Sidecar Coffe bar!')
    .pauseFor(1000)
    .deleteAll()
    .typeString('G Baldwin & Co!')
    .pauseFor(1000)
    .deleteAll()
    .typeString('LCC!')
    .pauseFor(1000)
    .start();


    $(function() {
       $('.scroll-down').click (function() {
         $('html, body').animate({scrollTop: $('#map').offset().top }, 'slow');
         return false;
       });
     });

var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});
// Our markers
markers1 = [


  ['5', '55 East', 51.48846, -0.0934, ['coffee_shop'],'images/pins/work.svg',30],
  ['6', 'Roberto &#39 Cafe', 51.48736, -0.07541, ['coffee_shop'],'images/pins/work.svg',30],
  ['7', 'Star Cafe', 51.48467, -0.09335, ['coffee_shop'],'images/pins/work.svg',30],
  ['8', '9 London Road', 51.498, -0.10411, ['coffee_shop'],'images/pins/work.svg',30],
  ['9', 'Saint Gabriel Cafe', 51.49104, -0.10395, ['coffee_shop'],'images/pins/food.svg',30],
  ['10', 'Cafe House Restaurant', 51.48981, -0.09645, ['coffee_shop'],'images/pins/food.svg',30],
  ['11', 'The Beehive', 51.48625, -0.09831, ['coffee_shop'],'images/pins/food.svg',30],
  ['12', 'The Albert Arms', 51.49738, -0.10391, ['pub'],'images/pins/food.svg',30],
  ['13', 'Southwark Playhouse Cafe & Bar', 51.49769, -0.09839, ['pub'],'images/pins/food.svg',30],
  ['9', 'Welcome Community Centre', 51.48083, -0.0707, ['community_centres'],'images/pins/learning.svg',30],
  ['10', 'Rockingham Community Centre', 51.49553, -0.0956, ['community_centres'],'images/pins/learning.svg',30],
  ['11', 'St George Cathedral', 51.49765, -0.10754, ['places_of_w'],'images/pins/work.svg',30],
];





markerCount = markers1.length


/** Function to init map */
function initialize() {
    var center = new google.maps.LatLng(51.491, -0.092);
    var mapOptions = {
        zoom: 14,
        disableDefaultUI:true,
        center: center,
        styles: [
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#F6EFCF"
            }
        ]
    },
    {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#50514F"

      }
    ]
  },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#E0E0E0" //background
            }
        ]
    },
    {
  "featureType": "administrative",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
    {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "color": "#E0E0E0" //administrative
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
   "featureType": "poi.medical",
   "elementType": "labels",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
    {
  "featureType": "poi.park",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#83C6B3" //park color
    }
  ]
},
{
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#E84DB4"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "weight": 1
    }
  ]
},
{
  "featureType": "road",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#F2F2F2" //All others main road
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#F2F2F2"
    }
  ]
},

{
  "featureType": "road.highway",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry",
  "stylers": [
    {
      "visibility": "off" //local roads
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
    "featureType": "road.local",
    "stylers": [
      {
        "weight": 0.2
      }
    ]
  },

  {
  "featureType": "transit",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {

                "visibility": "off"

            }
        ]
    },

    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#147FAD"
            }
        ]
      }
    ]
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    for (i = 0; i < markerCount; i++) {
        addMarker(markers1[i]);
    }
}
/** Function to add marker to map */
function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];
    var image = {
      url: marker[5],
      scaledSize: new google.maps.Size(marker[6],marker[6]),
    }

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map,
        icon: image
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(pos);
        }
    })(marker1, content));
}
// Function on Change of checkbox
updateView = function (element) {
  	if (element) {
        //Get array with names of the checked boxes
        checkedBoxes = ([...document.querySelectorAll('input[type=radio]:checked')]).map(function(o) { return o.id; });
        console.log(checkedBoxes);
        for (i = 0; i < markerCount; i++) {
        		marker = gmarkers1[i];
            console.log(marker.category)
            //Filter to show any markets containing ALL of the selected options
        		if(typeof marker.category == 'object' && checkedBoxes.every(function (o) {
        return (marker.category).indexOf(o) >= 0;})){
            		marker.setVisible(true);
        		}
            else {
  		          marker.setVisible(false);
  		      }
        }
  	}
  	else {
   		 console.log('No param given');
		}


}
// Init map
initialize();
