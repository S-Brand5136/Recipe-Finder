import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

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
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "500px",
      height: "500px",
      [theme.breakpoints.up("md")]: {
        backgroundImage: `url(${strMealThumb})`,
        height: "500px",
      },
      transition: "0.5s",
      "&:hover": {
        [theme.breakpoints.up("md")]: {
          background: `rgba(0, 128, 0, 0.3)`,
          height: "500px",
          maxWidth: "500px",
        },
      },
    },
    media: {
      height: 500,
    },
  }));
  const classes = useStyles();
  const history = useHistory();

  const [show, setShow] = useState(false);

  return (
    <>
      <Card
        className={classes.root}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <CardActionArea>
          {!show ? (
            <CardMedia className={classes.media} image={strMealThumb} />
          ) : (
            "hello"
          )}
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardItem;
