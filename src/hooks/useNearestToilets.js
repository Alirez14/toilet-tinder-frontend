import axios from "axios";
import { useState, useEffect } from 'react';


const retrieveToilets = function({ignoredToilets, location}) {
    // Mock code until API is finished
    return Promise.resolve([
        {
            id: 1,
            name: 'Grillzone Brigittenauer Bucht',
            openingHours: '00:00-24:00',
            image: 'https://media.istockphoto.com/photos/toilet-bowl-on-white-background-copy-space-3d-illustration-picture-id1163155784?k=20&m=1163155784&s=612x612&w=0&h=StgkT1pmGM9LuS9SkG7LjOYy_FP0vOL-T-6calVg5rE=',
            location: {
                latitude: 16.464809803131995,
                longitude: 48.1913379495753,
            },
            ratings: [
                {
                    grade: 4,
                    text: 'Lorem ipsum dolor sit erat',
                },
                {
                    grade: 2,
                    text: 'Lorem ipsum dolor sit erat',
                }
            ]
        }
    ]);

    const params = {
        latitude: location.latitude,
        longitude: location.longitude,
        ignoredToilets,
    };

    return axios
        .get('/nearestToilets', {params})
        .then(response => {
            // TODO: Replace with toilets from API
            return Promise.resolve([]);
        })
        .catch(response => {
            return Promise.reject(response.error);
        });
};


const useNearestToilets = function(ignoredToilets, location) {
    const [error, setError] = useState(null);
    const [nearestToilets, setNearestToilets] = useState([]);

    useEffect(() => {
        retrieveToilets({location, ignoredToilets})
            .then(toilets => setNearestToilets(toilets))
            .catch(error => setError(error));
    }, [ignoredToilets, location]);

    return {
        error,
        nearestToilets,
    };
};


export default useNearestToilets;
