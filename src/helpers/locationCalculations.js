

export const toiletBearing = function(currentLocation, toiletLocation) {
    if (!currentLocation || !toiletLocation) return null;

    const {
        latitude: currLat,
        longitude: currLong,
    } = currentLocation;

    const {
        latitude: wcLat,
        longitude: wcLong
    } = toiletLocation;

    const y = Math.sin(wcLong - currLong) * Math.cos(wcLat);
    const x = Math.cos(currLat) * Math.sin(wcLat) - Math.sin(currLat) * Math.cos(wcLat) * Math.cos(wcLong - currLong);
    const delta = Math.atan2(y, x);

    return (delta * 180/Math.PI + 360) % 360;
};


export const distance = function(currentLocation, toiletLocation) {
    if (!currentLocation || !toiletLocation) return null;

    const {
        latitude: currLat,
        longitude: currLong,
    } = currentLocation;

    const {
        latitude: wcLat,
        longitude: wcLong
    } = toiletLocation;

    const gamma1 = currLat * Math.PI/180;
    const gamma2 = wcLat * Math.PI/180;
    const deltaLong = (wcLong - currLong) * Math.PI/180;
    const radiant = 6371e3;
    const gammaSin = Math.sin(gamma1) * Math.sin(gamma2);
    const gammaCos = Math.cos(gamma1) * Math.cos(gamma2);
    const distance = Math.acos(gammaSin + gammaCos * Math.cos(deltaLong)) * radiant;

    return Math.floor(distance);
};
