import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMealDetails } from "../actions/searchActions";
import RecipeCard from "../images/recipe-card.svg";
import CardItem from "./CardItem";

// Material UI Imports
import {
  Box,
  Container,
  Grid,
  makeStyles,
  LinearProgress,
  Typography,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
    paddingRight: "4rem",
    paddingLeft: "4rem",
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
  },
}));

const CardGrid = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.search);
  const { loading } = data;

  useEffect(() => {
    if (!loading && data.searchResult !== undefined) {
      dispatch(getMealDetails(data));
    }
  }, [data, loading, dispatch]);

  const mealArray = useSelector((state) => state.meal);

  return (
    <Box className={classes.root}>
      {mealArray.loading ? (
        <>
          <LinearProgress id="loader" />
          <Grid item container justify="center" alignItems="center" xs={12}>
            <img src={RecipeCard} className={classes.image} />
          </Grid>
          <Grid item container justify="center" alignItems="center" xs={12}>
            <Typography
              variant="h4"
              className={classes.MuiTypography}
              component="h4"
            >
              Begin Searching....
            </Typography>
          </Grid>
        </>
      ) : (
        <Grid
          container
          direction="row"
          justify="space-between"
          spacing={5}
          alignItems="center"
        >
          {mealArray.loading === false && mealArray.meal !== undefined ? (
            mealArray.meal.map((meal) => (
              <Grid key={meal[0].idMeal} item xs={12} sm={6} lg={4} md={5}>
                <CardItem meal={meal[0]} />
              </Grid>
            ))
          ) : (
            <>
              <Grid item container justify="center" alignItems="center" xs={12}>
                <img src={RecipeCard} className={classes.image} />
              </Grid>
              <Grid item container justify="center" alignItems="center" xs={12}>
                <Typography
                  variant="h4"
                  className={classes.MuiTypography}
                  component="h4"
                >
                  Begin Searching....
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default CardGrid;
