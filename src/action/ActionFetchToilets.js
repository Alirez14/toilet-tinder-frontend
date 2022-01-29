import axios from "axios";


const mockData = () => {
  return [
    {
      id: 1,
      name: "Grillzone Brigittenauer Bucht",
      openingHours: "00:00-24:00",
      image:
        "https://media.istockphoto.com/photos/toilet-bowl-on-white-background-copy-space-3d-illustration-picture-id1163155784?k=20&m=1163155784&s=612x612&w=0&h=StgkT1pmGM9LuS9SkG7LjOYy_FP0vOL-T-6calVg5rE=",
      location: {
        latitude: 48.1913379495753,
        longitude: 16.464809803131995,
      },
      ratings: [
        {
          id: 1,
          grade: 4,
          text: "Lorem ipsum dolor sit erat",
        },
        {
          id: 2,
          grade: 2,
          text: "Lorem ipsum dolor sit erat",
        },
      ],
    },
    {
      id: 2,
      name: "Test 2",
      openingHours: "12:00-24:00",
      image:
        "https://media.istockphoto.com/photos/toilet-bowl-on-white-background-copy-space-3d-illustration-picture-id1163155784?k=20&m=1163155784&s=612x612&w=0&h=StgkT1pmGM9LuS9SkG7LjOYy_FP0vOL-T-6calVg5rE=",
      location: {
        latitude: 48.1913379495753,
        longitude: 16.464809803131995,
      },
      ratings: [
        {
          id: 3,
          grade: 4,
          text: "Lorem ipsum dolor sit erat",
        },
        {
          id: 4,
          grade: 2,
          text: "Lorem ipsum dolor sit erat",
        },
      ],
    },
  ];
};


const ActionFetchToilets = async ({ ignoredToilets, location }) => {
  // Add for testing
  // mockData();

  const params = {
    latitude: location.latitude,
    longitude: location.longitude,
    toiletIdsToSkip: ignoredToilets,
  };

  return await axios
    .post("/toilets/getNearestThreeToilets", params)
    .then(response => Promise.resolve(response.data))
    .catch(response => Promise.reject(response.error));
}


export default ActionFetchToilets;
