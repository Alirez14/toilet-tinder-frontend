import {Box} from "@mui/material";
import StyleConst from "../../style/StyleConst";
import Needle, {sizes} from "./Needle";


const TargetNeedle = function ({distance}) {
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
      <Needle
        color="red"
        size={sizes.LARGE}
      />
      <Box
        sx={{
          fontSize: 14,
          color: StyleConst.Colors.darkText,
          mt: '2px',
        }}
      >
        {distance}m
      </Box>
    </Box>
  );
};


export default TargetNeedle;
