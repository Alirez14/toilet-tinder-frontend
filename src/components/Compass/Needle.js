import {Box} from "@mui/material";


export const sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};


const lineHeights = {
  [sizes.SMALL]: 35,
  [sizes.MEDIUM]: 50,
  [sizes.LARGE]: 70,
};


const thickness = {
  [sizes.SMALL]: 1,
  [sizes.MEDIUM]: 2,
  [sizes.LARGE]: 3,
};


const Needle = function ({color, size}) {
  return (
    <Box
      sx={{
        width: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          bgcolor: color ?? 'black',
          height: lineHeights[size] ?? 35,
          width: `${thickness[size] ?? 1}px`,
          borderRadius: '3px',
        }}
      />
    </Box>
  );
};


Needle.defaultProps = {
  color: 'black',
  size: sizes.SMALL,
};


export default Needle;
