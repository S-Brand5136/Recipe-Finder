import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    height: "100vh",
    width: "100%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const SearchPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <Navigation />
      <Grid
        className={classes.pageStyles}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <CardGrid />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchPage;
