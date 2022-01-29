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

export default function ComToilet() {
  const { errorLocation, location } = useLocation();
  const { error, nearestToilets } = useNearestToilets(location);

  const toilet = nearestToilets[0];

  const distance = locationCalculations.distance(location, toilet.location);
  const bearing = locationCalculations.toiletBearing(location, toilet.location);

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
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
