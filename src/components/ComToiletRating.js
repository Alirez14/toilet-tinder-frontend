import * as React from "react";
import {Box} from "@mui/material";
import Rating from "@mui/material/Rating";


const ToiletRating = function({grade, text}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: '8px',
        mx: 'auto',
        width: '300px',
      }}
    >
      <Rating
        value={grade}
        readOnly
      />
      {!!text &&
        <Box>
          {text}
        </Box>
      }
    </Box>
  );
};

export default ToiletRating;
