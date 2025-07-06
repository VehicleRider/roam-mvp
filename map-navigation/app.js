const map = L.map('map').setView([37.7749, -122.4194], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      L.marker([lat, lon])
        .addTo(map)
        .bindPopup('You are here')
        .openPopup();

      map.setView([lat, lon], 15); // zoom to your location
    },
    error => {
      alert('Unable to retrieve your location');
    }
  );
} else {
  alert('Geolocation is not supported by your browser.');
}