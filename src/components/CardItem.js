import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeRecipe } from "../actions/searchActions";

// Material UI Imports
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Hidden,
  makeStyles,
  Slide,
  Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
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
    color: "white",
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
  MuiBox: {
    backgroundColor: "rgba(29, 29, 29, .6)",
    position: "absolute",
    bottom: "0",
    right: ".5px",
    width: "100%",
  },
  removeButton: {
    color: "white",
    marginLeft: "1rem",
    marginTop: ".5rem",
    marginBottom: ".5rem",
    "&:hover": {
      boxShadow: "2px 3px 4px black",
    },
  },
}));

const CardItem = ({
  deleteButton,
  meal: { strMeal, strMealThumb, idMeal },
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
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
            <Hidden mdDown>
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
                    {strMeal}
                  </Typography>
                  <Button
                    href={`/recipepage/${idMeal}`}
                    variant="contained"
                    className={classes.MuiButton}
                  >
                    More Info
                  </Button>
                  {deleteButton && (
                    <Button
                      onClick={() => dispatch(removeRecipe(idMeal))}
                      variant="contained"
                      className={classes.removeButton}
                      startIcon={<Delete />}
                      color="secondary"
                    >
                      Delete Recipe
                    </Button>
                  )}
                </Box>
              </Slide>
            </Hidden>
            <Hidden lgUp>
              <CardContent>
                <Box className={classes.MuiBox}>
                  <Typography
                    className={classes.MuiTyopgrahy}
                    variant="h4"
                    component="h4"
                  >
                    {strMeal}
                  </Typography>
                  <Button
                    href={`/recipepage/${idMeal}`}
                    variant="contained"
                    className={classes.MuiButton}
                  >
                    More Info
                  </Button>
                  {deleteButton && (
                    <Button
                      onClick={() => dispatch(removeRecipe(idMeal))}
                      variant="contained"
                      className={classes.removeButton}
                      startIcon={<Delete />}
                      color="secondary"
                    >
                      Delete Recipe
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Hidden>
          </CardMedia>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardItem;
