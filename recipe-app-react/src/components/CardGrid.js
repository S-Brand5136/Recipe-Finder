import React from "react";
import CardItem from "./CardItem";
import { Box, Grid } from "@material-ui/core";

const CardGrid = () => {
  const searchByMainIng = (mainIng, filter) => {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      // make call to api

      xhr.open(
        "GET",
        `https://www.themealdb.com/api/json/v1/1/filter.php?${filter}=${mainIng}`,
        true
      );

      // on success
      xhr.onload = function () {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      };

      xhr.send();
    });
  };

  return (
    <Box>
      <Grid container space={2}>
        <Grid item xs={12}>
          <CardItem />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardGrid;
