import React from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../components/SearchBar";
import Navigation from "../components/Navigation";
import CardGrid from "../components/CardGrid";
import background from "../images/background.svg";

import { Divider, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageStyles: {
    height: "auto",
    minHeight: "100vh",
    width: "100%",
  },
}));

const SearchPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Navigation />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <SearchBar />
          <Divider />
        </Grid>
        <Grid className={classes.pageStyles} item xs={12}>
          <CardGrid />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchPage;
