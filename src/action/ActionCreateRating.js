import axios from "axios";


const ActionCreateRating = function({comment, grade, toilet}) {
  const params = {
    comment,
    stars: grade,
    toiletId: toilet.id,
  };

  return axios.post('/ratings/createRating', params)
};


export default ActionCreateRating;

