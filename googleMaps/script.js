//Maps
let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.390205, lng: 2.154007 },
    zoom: 8,
  });
}

initMap();

//Marker
function initMap() {
  const myLatLng = { lat: 41.406208, lng: 2.1893617 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}


//latitud de una adreça

function busquedaEspecifica() {
  let geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();
      console.log("biakdiad")
    }else{
        console.log("vayaaaa, mala suerte");
    }
  });

  console.log("ESTA ES MI CASA")
}

document.getElementById("findLoc").addEventListener("click", function()){
    let address = document.getElementById("adreca").value;
    busquedaEspecifica(address)
}

window.initMap = initMap;