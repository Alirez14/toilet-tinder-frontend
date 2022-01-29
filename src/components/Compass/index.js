import {Box} from "@mui/material";
import Section, {sectionWidth} from "./Section";

import * as locationCalculations from "../../helpers/locationCalculations";


const Compass = function(props) {
    const {
        height,
        width,
        currentLocation,
        toiletLocation,
    } = props;

    const heading = 120; // replace with currentLocation.heading
    const distance = 50; // locationCalculations.distance(location, toiletLocation);
    const bearing = 120; // locationCalculations.toiletBearing(location, toiletLocation);

    const headingPercentage = heading / 360 * sectionWidth;
    const zeroPoint = (sectionWidth - (width / 2));
    const headingLeft = zeroPoint + headingPercentage;

    return (
        <Box
            sx={{
                position: 'relative',
                bgcolor: 'white',
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
