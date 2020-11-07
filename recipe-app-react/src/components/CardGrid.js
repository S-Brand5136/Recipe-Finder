import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMealDetails } from "../actions/searchActions";
import CardItem from "./CardItem";

// Material UI Imports
import { Box, Container, Grid, LinearProgress } from "@material-ui/core";

const CardGrid = () => {
  const data = useSelector((state) => state.search);
  const { loading } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && data.searchResult !== undefined) {
      dispatch(getMealDetails(data));
    }
  }, [data]);

  const mealArray = useSelector((state) => state.meal);

  return (
    <Container maxWidth="xl">
      <Box className="gridContainer">
        {mealArray.loading ? (
          <LinearProgress id="loader" />
        ) : (
          <Grid container spacing={2} justify="center">
            {mealArray.loading === false &&
              mealArray.meal !== undefined &&
              mealArray.meal.map((meal) => (
                <Grid key={meal[0].idMeal} item xs={4}>
                  <CardItem meal={meal[0]} />
                </Grid>
              ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default CardGrid;
