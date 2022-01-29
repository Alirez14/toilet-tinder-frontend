import {Box} from "@mui/material";
import Section, {sectionWidth} from "./Section";

import * as locationCalculations from "../../helpers/locationCalculations";


const calculateHeadingLeft = function (props) {
  const {
    bearing,
    currentLocation,
    width,
  } = props;

  const zeroPoint = (sectionWidth - (width / 2));
  const heading = currentLocation?.heading ?? bearing;

  if (!currentLocation && !bearing) return zeroPoint;

  const headingPercentage = heading / 360 * sectionWidth;

  return zeroPoint + headingPercentage;
};


const Compass = function (props) {
  const {
    height,
    width,
    currentLocation,
    toiletLocation,
  } = props;

  const distance = locationCalculations.distance(currentLocation, toiletLocation);
  const bearing = locationCalculations.toiletBearing(currentLocation, toiletLocation);
  const headingLeft = calculateHeadingLeft({bearing, currentLocation, width});

  return (
    <Box
      sx={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          left: `-${headingLeft}px`,
          transition: 'left 0.5s',
        }}
      >
        <Section
          bearing={bearing}
          distance={distance}
        />
        <Section
          bearing={bearing}
          distance={distance}
        />
        <Section
          bearing={bearing}
          distance={distance}
        />
      </Box>
    </Box>
  );
};


Compass.defaultProps = {
  width: 300,
  height: 100,
};


export default Compass;
