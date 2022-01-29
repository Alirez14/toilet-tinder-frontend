import {Box} from "@mui/material";
import DirectionNeedle, {directions} from "./DirectionNeedle";
import Needle, {sizes} from "./Needle";
import TargetNeedle from "./TargetNeedle";


export const sectionWidth = 800;


const Target = function({bearing, distance}) {
    const left = bearing / 360 * 100;

    return (
        <Box
            sx={{
                position: 'absolute',
                left: `${left}%`,
            }}
        >
            <TargetNeedle distance={distance} />
        </Box>
    );
};


const MiddleNeedles = function() {
    return (
        <>
            <Needle />
            <Needle />
            <Needle />
            <Needle />
            <Needle size={sizes.MEDIUM} />
            <Needle />
            <Needle />
            <Needle />
            <Needle />
        </>
    );
}


const Section = function({bearing, distance}) {
    return (
        <Box
            sx={{
                position: 'relative',
                width: `${sectionWidth}px`
            }}
        >
            <Target
                bearing={bearing}
                distance={distance}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                <DirectionNeedle direction={directions.NORTH} />
                <MiddleNeedles />
                <DirectionNeedle direction={directions.EAST} />
                <MiddleNeedles />
                <DirectionNeedle direction={directions.SOUTH} />
                <MiddleNeedles />
                <DirectionNeedle direction={directions.WEST} />
                <MiddleNeedles />
            </Box>
        </Box>
    );
};


export default Section;
