let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 13.051331309205104, lng: 80.28205096504139 },
    zoom: 18,
    mapId: '88669145e56fdd28'
  });
}

var marker = new google.maps.Marker({
  position:{ lat: 13.03308593706955, lng:  80.27798692747064 },
  animation:google.maps.Animation.BOUNCE
});


marker.setMap(map);

//13.051331309205104, 80.28205096504139


//13.03308593706955, 80.27798692747064