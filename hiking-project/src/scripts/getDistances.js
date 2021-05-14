import getHaversineDistance from "./haversine.js";

//Returns an array of all the distances from entered loaction
//to each trail in the given data.
export default function getDistances(data, location){
    var distances = new Array(data.length);
    data.forEach(function(data, index){
        distances.splice(index, 0, {distance : getHaversineDistance(location, data.coordinates), trail : data});
    });
    return distances;
}