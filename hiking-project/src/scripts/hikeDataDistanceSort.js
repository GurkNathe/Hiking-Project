function haversineGen() {
	var radians = Array.prototype.map.call(arguments, function (deg) {
		return (deg / 180.0) * Math.PI;
	});
	var lat1 = radians[0],
		lon1 = radians[1],
		lat2 = radians[2],
		lon2 = radians[3];
	var R = 6372.8;
	var dLat = lat2 - lat1;
	var dLon = lon2 - lon1;
	var a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.asin(Math.sqrt(a));
	return R * c;
}

function compare(a, b) {
	if (a.haversine < b.haversine) {
		return -1;
	}
	if (a.haversine > b.haversine) {
		return 1;
	}
	return 0;
}

var sortByHaversine = function (hikes, startLat, startLon) {
	var lat, lon, haversine, hike;
	var hikesByDistance = [];
	for (let key in hikes) {
		lat = hikes[key].coordinates.lat;
		lon = hikes[key].coordinates.lon;
		if (lat != null && lon != null) {
			haversine = haversineGen(startLat, startLon, lat, lon);
			hike = hikes[key];
			hike["haversine"] = haversine;
			hikesByDistance.push(hike);
		}
	}
	hikesByDistance = hikesByDistance.sort(compare);
	return hikesByDistance;
};

export default sortByHaversine;
