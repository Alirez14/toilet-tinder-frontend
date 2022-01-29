import axios from "axios";

const ActionFetchToilets = async ({ ignoredToilets, location }) => {
  // Mock code until API is finished
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
          grade: 4,
          text: "Lorem ipsum dolor sit erat",
        },
        {
          grade: 2,
          text: "Lorem ipsum dolor sit erat",
        },
      ],
    },
  ];

  /*   const params = {
    latitude: location.latitude,
    longitude: location.longitude,
    ignoredToilets,
  };
  const res = await axios
    .get("/nearestToilets", { params })

    .catch((response) => {
      return Promise.reject(response.error);
    });

  return res; */
};
export default ActionFetchToilets;
