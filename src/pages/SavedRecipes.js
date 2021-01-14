import React from "react";
import Navigation from "../components/Navigation";
import SavedRecipesGrid from "../components/SavedRecipesGrid";

import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const SavedRecipes = () => {
  const classes = useStyles();

  return (
    <div>
      <Navigation />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid className={classes.pageStyles} item xs={12}>
          <SavedRecipesGrid />
        </Grid>
      </Grid>
    </div>
  );
};

export default SavedRecipes;
