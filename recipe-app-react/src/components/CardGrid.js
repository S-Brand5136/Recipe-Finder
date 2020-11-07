import React from "react";
import CardItem from "./CardItem";
import { Box, Grid } from "@material-ui/core";

const CardGrid = () => {
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
