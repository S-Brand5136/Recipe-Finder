import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Navigation from "../components/Navigation";
import CardGrid from "../components/CardGrid";
import background from "../images/background.svg";

import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Button,
  Hidden,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageStyles: {
    height: "auto",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
  },
}));

const SearchPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <Navigation />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid className={classes.pageStyles} item xs={12}>
          <CardGrid />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchPage;
