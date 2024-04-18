// Variables
let map;
let marker;
let estilosMapa;

async function initMap() {
  const myLatLng = { lat: 41.390205, lng: 2.154007 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12,
  });

  marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "aquí",
    icon: "persona.png",
  });

  let infowindow = new google.maps.InfoWindow({
    content: document.getElementById("adreca").value,
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      estilosMapa = data;
      map.setOptions({ styles: estilosMapa });
    })
    .catch((error) => {
      console.log(error);
    });
  geocalitza();
  centrar();
}

function geocalitza() {
  let geocoder = new google.maps.Geocoder();
  let address = document.getElementById("adreca").value;
  geocoder.geocode({ address: address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();

      document.getElementById("latitude").value = latitude;
      document.getElementById("longitude").value = longitude;
      actualZoom = 16;

      let updatePosition = new google.maps.LatLng(latitude, longitude);
      marker.setPosition(updatePosition);

      let center = new google.maps.LatLng(latitude, longitude);
      map.setCenter(center);
      map.setZoom(actualZoom);
    } else {
      alert("Error");
    }
  });
}

function centrar() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      map.setCenter(pos);
      map.setZoom(20);
      marker.setPosition(pos);
    });
  }
}

document.getElementById("findLoc").addEventListener("click", geocalitza);
document.getElementById("currentLoc").addEventListener("click", centrar);
