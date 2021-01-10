import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 280,
  },
});

const CardItem = ({
  meal,
  meal: {
    strArea,
    strCategory,
    strMeal,
    strMealThumb,
    strInstructions,
    strSource,
    strYoutube,
  },
}) => {
  const classes = useStyles();
  const history = useHistory();

  const arraySplit = strInstructions.split(". ");

  const ingredients = [];
  const measurements = [];

  Object.keys(meal).map((line) =>
    line.startsWith("strIngredient") && meal[line] !== "" && meal[line] !== null
      ? ingredients.push(meal[line])
      : line.startsWith("strMeasure") &&
        meal[line] !== "" &&
        meal[line] !== null
      ? measurements.push(meal[line])
      : ""
  );
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={strMealThumb} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {strMeal}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Country Origin: {strArea}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Main Ingredient: {strCategory}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardItem;
