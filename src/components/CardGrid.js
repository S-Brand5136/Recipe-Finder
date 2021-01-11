import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMealDetails } from "../actions/searchActions";
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
  },
}));

const CardGrid = () => {
  const classes = useStyles();

  const data = useSelector((state) => state.search);
  const { loading, searchResult, error } = data;

  return (
    <Box className={classes.root}>
      {loading ? (
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
          justify="center"
          spacing={5}
          alignItems="center"
        >
          {!loading && searchResult.meals ? (
            searchResult.meals.map((meal) => (
              <Grid key={meal.idMeal} item xs={12} sm={9} md={6} lg={4} xl={3}>
                <CardItem meal={meal} />
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
                  Oops there was an error retriving recipes!
                </Typography>
              </Grid>
            </>
          )}
          {error && (
            <div>
              <Grid item container justify="center" alignItems="center" xs={12}>
                <img src={RecipeCard} className={classes.image} />
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
      )}
    </Box>
  );
};

export default CardGrid;
