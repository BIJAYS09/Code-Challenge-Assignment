// Function to convert latitude and longitude into distance
function distanceCalculator(lat1, long1, lat2, long2) {
    var R = 6371; // Earth Radius in km
    var disLat = (lat2 - lat1) * Math.PI / 180;
    var disLong = (long2 - long1) * Math.PI / 180;
    var a = Math.sin(disLat / 2) * Math.sin(disLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(disLong / 2) * Math.sin(disLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    if (d > 1)
        return Math.round(d);
    else if (d <= 1)
        return Math.round(d * 1000);
    return d;
}
exports.distanceCalculator = distanceCalculator;
