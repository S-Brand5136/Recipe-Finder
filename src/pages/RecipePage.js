import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import background from "../images/background.svg";
import Navigation from "../components/Navigation";
import { getMealDetails } from "../actions/searchActions";
import InfoText from "../components/recipePageComponents/InfoText";
import Instructions from "../components/recipePageComponents/Instructions";
import IngredientMeasurementList from "../components/recipePageComponents/IngredientMeasurementList";

// Material UI imports
import {
  Box,
  Breadcrumbs,
  Divider,
  Grid,
  makeStyles,
  LinearProgress,
  Link,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  MuiBox: {
    // height: "auto",
    // minHeight: "100vh",
    // width: "100%",
    // backgroundImage: `url(${background})`,
    // backgroundRepeat: "repeat",
    // backgroundSize: "auto",
    padding: "0 3.5rem 0 3.5rem",
    marginTop: "4rem",
  },
  imageStyling: {
    height: "auto",
    maxWidth: "auto",
  },
  MuiBreadCrumb: {
    position: "absolute",
    right: "3.5rem",
    [theme.breakpoints.down("lg")]: {
      top: "10rem",
      right: "6rem",
    },
  },
}));

const RecipePage = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const meal = useSelector((state) => state.meal);
  const {
    mealDetails,
    ingredientsList,
    measurementsList,
    loading,
    error,
  } = meal;

  useEffect(() => {
    dispatch(getMealDetails(match.params.id));
  }, []);

  return (
    <div>
      <Navigation />
      <Divider />
      <Box className={classes.MuiBox} component="section">
        {loading ? (
          <LinearProgress color="primary" />
        ) : error ? (
          <Typography>
            Im sorry there was an accident retrieving your recipe, and the dog
            at it :(
          </Typography>
        ) : (
          <>
            <Breadcrumbs aria-label="history" className={classes.MuiBreadCrumb}>
              <Link color="inherit" href="/homepage">
                Recipe Search
              </Link>
              <Typography style={{ color: "black" }}>
                {mealDetails.strMeal}
              </Typography>
            </Breadcrumbs>
            <Grid
              container
              direction="row"
              spacing={5}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} lg={6}>
                <img
                  className={classes.imageStyling}
                  src={mealDetails.strMealThumb}
                ></img>
              </Grid>
              <InfoText
                title={mealDetails.strMeal}
                area={mealDetails.strArea}
                category={mealDetails.strCategory}
                youtube={mealDetails.strYotube}
              />
              <Grid item xs={12} lg={6}>
                <IngredientMeasurementList
                  ingredientList={ingredientsList}
                  measurementList={measurementsList}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Instructions instructions={mealDetails.strInstructions} />
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </div>
  );
};

export default RecipePage;
