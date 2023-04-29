var mymap = L.map('map').setView([-1.359227,36.937984], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([ -1.359227,36.937984 ]).addTo(mymap);
marker.bindPopup("<b>ALLAN LIVES HERE!!!</b><br>").openPopup();