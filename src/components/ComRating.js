import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import StyleConst from "../style/StyleConst";

const ComRating = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        color: StyleConst.Colors.text
      }}
      container
      direction="column"
      alignItems="left"
    >
      <Typography component="legend">Rate this toilet!</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, grade) => {
          setValue(grade);
          console.log(grade);
        }}
      />
      <TextField
        sx={{
          color: StyleConst.Colors.text,
        }}
        id="rating-review"
        label="Give a personal feedback"
        variant="outlined"
        fullWidth
      />
    </Box>

  );
};
export default ComRating;