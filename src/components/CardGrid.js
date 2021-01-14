import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../images/recipe-card.svg";
import CardItem from "./CardItem";
import SearchError from "./SearchError";

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
    position: "relative",
    right: "1rem",
    fontWeight: "500",
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400",
      letterSpacing: "1px",
      fontSize: "24px",
    },
  },
}));

const CardGrid = () => {
  const classes = useStyles();

  const data = useSelector((state) => state.search);
  const { loading, searchResult, error } = data;

  return (
    <Box className={classes.root}>
      <div>{loading && <LinearProgress />}</div>
      {error && (
        <SearchError
          message="There was an error retriving your recipes!"
          variant="error"
          open={true}
        />
      )}
      {searchResult === undefined || searchResult.meals === undefined ? (
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
              Begin searching...
            </Typography>
          </Grid>
        </div>
      ) : (
        <>
          <Grid
            container
            direction="row"
            justify="center"
            spacing={5}
            alignItems="center"
          >
            {searchResult &&
              searchResult.meals.map((meal) => (
                <Grid
                  key={meal.idMeal}
                  item
                  xs={12}
                  sm={9}
                  md={6}
                  lg={4}
                  xl={3}
                >
                  <CardItem meal={meal} />
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default CardGrid;
