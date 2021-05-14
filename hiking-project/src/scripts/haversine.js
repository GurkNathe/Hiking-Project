/*Calculates distance between two point on Earth, assuming Earth is a perfect sphere*/

export default function getHaversineDistance(firstLocation, secondLocation, isMiles){
  const earthRadius = 6371; // km 

  const diffLat = (secondLocation.lat-firstLocation.lat) * Math.PI / 180;  
  const diffLon = (secondLocation.lon-firstLocation.lon) * Math.PI / 180;  

  const arc = Math.cos(
                  firstLocation.lat * Math.PI / 180) * 
                  Math.cos(secondLocation.lat * Math.PI / 180) * 
                  Math.sin(diffLon/2) * Math.sin(diffLon/2) + 
                  Math.sin(diffLat/2) * Math.sin(diffLat/2);
  const line = 2 * Math.atan2(Math.sqrt(arc), Math.sqrt(1-arc));

  var distance = earthRadius * line; 

  if(isMiles) distance /= 1.60934;

  return distance;
}