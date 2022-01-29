import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StyleConst from "../style/StyleConst";
import useLocation from "../hooks/useLocation";
import useNearestToilets from "../hooks/useNearestToilets";
import * as locationCalculations from "../helpers/locationCalculations";
import { Box } from "@mui/material";

const ComToilet = () => {
  const { errorLocation, location } = useLocation();
  const { error, nearestToilets } = useNearestToilets(location);

  const toilet = nearestToilets[0];
  if (location) {
    const distance = locationCalculations.distance(location, toilet.location);
    const bearing = locationCalculations.toiletBearing(
      location,
      toilet.location
    );
    console.log(toilet, distance, bearing);
  }

  return (
    <Card
      sx={{
        maxWidth: 500,
        backgroundColor: StyleConst.Colors.card,
        color: StyleConst.Colors.text,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={toilet?.image}
        alt="green iguana"
      />
      <CardContent>
        <Box>
          <Typography variant="h5" component={"div"}>
            {toilet?.name}
          </Typography>
          <Typography component={"div"} paragraph>
            {toilet?.openingHours}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-around" }}>
        <Button size="medium">Start</Button>
        <Button size="medium">Next</Button>
      </CardActions>
    </Card>
  );
};
export default ComToilet;
