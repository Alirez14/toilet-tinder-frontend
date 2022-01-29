import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StyleConst from "../style/StyleConst";
import ComToiletRating from "./ComToiletRating";

const ComToilet = ({ toilet }) => {
  return (
    <Card
      sx={{
        width: "50%",
        backgroundColor: StyleConst.Colors.card,
        color: StyleConst.Colors.text,
      }}
    >
      <CardMedia
        component="img"
        height="200"
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
        {toilet?.ratings.map(rating => {
          return (
            <ComToiletRating
              key={rating.id}
              grade={rating.grade}
              text={rating.text}
            />
          );
        })}
      </CardContent>
      <CardActions sx={{ justifyContent: "space-around" }}>
        <Button size="medium">Next</Button>
      </CardActions>
    </Card>
  );
};
export default ComToilet;
