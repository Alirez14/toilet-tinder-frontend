import React, { useState } from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StyleConst from "../style/StyleConst";
import ComToiletRating from "./ComToiletRating";
import ComRating from "./ComRating";

const ComToilet = ({ appendToIgnoredToilets, toilet }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "400px",
        backgroundColor: StyleConst.Colors.card,
        color: StyleConst.Colors.text,
      }}
    >
      <ComRating open={open} setOpen={setOpen} toilet={toilet} />
      <CardMedia
        key={toilet?.id}
        component="img"
        height="200"
        image="https://source.unsplash.com/random/?toilet"
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
        {toilet?.ratings
          .sort((ratingA, ratingB) => ratingB.id - ratingA.id)
          .map((rating) => {
            return (
              <ComToiletRating
                key={rating.id}
                grade={rating.grade}
                text={rating.text}
              />
            );
          })
        }
      </CardContent>
      <CardActions sx={{ justifyContent: "space-around" }}>
        <Button size="medium" onClick={() => setOpen(true)}>
          Rate
        </Button>
        <Button size="medium" onClick={() => appendToIgnoredToilets(toilet.id)}>
          Next
        </Button>
      </CardActions>
    </Card>
  );
};
export default ComToilet;
