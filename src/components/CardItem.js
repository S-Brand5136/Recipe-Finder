import React, { useState } from "react";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Slide,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    height: "500px",
  },
  media: {
    height: "500px",
  },
  slide: {
    backgroundColor: "rgba(29, 29, 29, .6)",
    color: "white",
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
  MuiTyopgrahy: {
    marginLeft: "1rem",
  },
  MuiButton: {
    backgroundColor: "#6C63FF",
    color: "white",
    marginLeft: "1rem",
    marginTop: ".5rem",
    marginBottom: ".5rem",
    "&:hover": {
      backgroundColor: "#6C63FF",
      boxShadow: "2px 3px 4px black",
    },
  },
}));

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
  const [show, setShow] = useState(false);

  return (
    <>
      <Card
        className={classes.root}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={strMealThumb}>
            <Slide
              className={classes.slide}
              mountOnEnter
              unmountOnExit
              direction="down"
              in={show}
            >
              <Box>
                <Typography
                  className={classes.MuiTyopgrahy}
                  variant="h4"
                  component="h4"
                >
                  Dish Name
                </Typography>
                <Typography
                  className={classes.MuiTyopgrahy}
                  variant="subtitle1"
                  component="h4"
                >
                  Cook Time: 4h
                </Typography>
                <Button
                  href="/recipepage:1"
                  variant="contained"
                  className={classes.MuiButton}
                >
                  More Info
                </Button>
              </Box>
            </Slide>
          </CardMedia>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardItem;
