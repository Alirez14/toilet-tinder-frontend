import {Box} from "@mui/material";
import Needle, {sizes} from "./Needle";


export const directions = {
  NORTH: 'N',
  EAST: 'E',
  SOUTH: 'S',
  WEST: 'W',
};


const DirectionNeedle = function ({direction}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20px',
      }}
    >
      <Needle size={sizes.MEDIUM}/>
      <Box
        sx={{
          fontSize: 20,
        }}
      >
        {direction}
      </Box>
    </Box>
  );
};


export default DirectionNeedle;
