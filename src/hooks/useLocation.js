import { useState, useEffect } from 'react';


// https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError
const errorMapping = {
    1: 'PERMISSION_DENIED',
    2: 'POSITION_UNAVAILABLE',
    3: 'TIMEOUT',
};


const useLocation = function() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const success = ({ coords }) => {
            setLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
                heading: coords.heading,
            });
        };

        const error = ({code}) => setError(errorMapping[code]);

        const options = {
            enableHighAccuracy: true,
        };

        const watchId = navigator.geolocation.watchPosition(success, error, options);

        return () => navigator.geolocation.clearWatch(watchId);
    });

    return {
        error,
        location,
    };
};


export default useLocation;
