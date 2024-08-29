// Script.js
//function myFun(){
  //  alert("Hello there!");
  //}



  var accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

  var map = L.map('map').setView([20.5937, 78.9629], 5); // Coordinates for the center of India, zoom level 5
  
  L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & Mapbox'
  }).addTo(map);