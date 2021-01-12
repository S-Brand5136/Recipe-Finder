import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSavedRecipesFromStorage } from "../actions/searchActions";
import RecipeCard from "../images/recipe-card.svg";
import CardItem from "./CardItem";

// Material UI Imports
import {
  Box,
  Grid,
  makeStyles,
  LinearProgress,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
    paddingRight: "4rem",
    paddingLeft: "4rem",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      height: "50%",
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      height: "70%",
      width: "70%",
    },
    [theme.breakpoints.only("xs")]: {
      height: "100%",
      width: "100%",
    },
  },
  MuiTypography: {
    fontWeight: "500",
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400",
      letterSpacing: "1px",
      fontSize: "24px",
    },
  },
}));

const SavedRecipesGrid = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavedRecipesFromStorage());
  }, []);

  const list = useSelector((state) => state.savedRecipesList);
  const { loading, savedRecipesList, error } = list;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      spacing={5}
      alignItems="center"
    >
      {loading && (
        <Grid item xs={12}>
          <LinearProgress color="primary" />
        </Grid>
      )}
      {savedRecipesList.savedRecipesList !== undefined &&
        savedRecipesList.map((meal) => (
          <Grid key={meal.idMeal} item xs={12} sm={9} md={6} lg={4} xl={3}>
            <CardItem meal={meal} />
          </Grid>
        ))}
      {error && (
        <div>
          <Grid item container justify="center" alignItems="center" xs={12}>
            <img alt="Recipe Card" src={RecipeCard} className={classes.image} />
          </Grid>
          <Grid item container justify="center" alignItems="center" xs={12}>
            <Typography
              variant="h4"
              className={classes.MuiTypography}
              component="h4"
            >
              Oops there was an error retriving recipes!
            </Typography>
          </Grid>
        </div>
      )}
    </Grid>
  );
};

export default SavedRecipesGrid;
