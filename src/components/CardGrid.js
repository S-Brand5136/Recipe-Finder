import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMealDetails } from "../actions/searchActions";
import CardItem from "./CardItem";

// Material UI Imports
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
  Paper,
} from "@material-ui/core";

const CardGrid = () => {
  const data = useSelector((state) => state.search);
  const { loading } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && data.searchResult !== undefined) {
      dispatch(getMealDetails(data));
    }
  }, [data, loading, dispatch]);

  const mealArray = useSelector((state) => state.meal);

  return (
    <Container component="section" maxWidth="lg">
      <Box className="gridContainer">
        {mealArray.loading ? (
          <LinearProgress id="loader" />
        ) : (
          <Grid container direction="row" spacing={6} justify="space-between">
            {mealArray.loading === false && mealArray.meal !== undefined ? (
              mealArray.meal.map((meal) => (
                <Grid key={meal[0].idMeal} item xs={12} sm={6} lg={4} md={5}>
                  <CardItem meal={meal[0]} />
                </Grid>
              ))
            ) : (
              <Paper elevation={3}>
                <Typography id="errorMessage" component="h2">
                  No recipes available, please try another search term
                </Typography>
              </Paper>
            )}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default CardGrid;
