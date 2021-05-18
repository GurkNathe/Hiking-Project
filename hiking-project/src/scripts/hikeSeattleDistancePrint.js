const hikeSort = require('./hikeDataDistanceSort.js');

var seaLat = 47.6;
var seaLong = 122.3; //might have to negate this

var sortedHikes = hikeSort.sortByHaversine(seaLat, -1  * seaLong);

for (let key in sortedHikes) {
    console.log(sortedHikes[key].name);
}



