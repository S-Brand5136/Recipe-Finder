import React from "react";
import logo from "../images/chefs-hat.svg";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Input,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  bgDark: {
    backgroundColor: "#1D1D1D",
    height: "100vh",
  },
  bgLight: {
    height: "100vh",
  },
  MuiButton: {
    color: "white",
    borderColor: "#6C63FF",
    "&:hover": {
      backgroundColor: "#6C63FF",
    },
    width: "30rem",
    fontSize: "36px",
    borderRadius: "25px",
    borderWidth: "4px",
  },
  MuiTypography: {
    color: "#FFF",
    marginBottom: "2rem",
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <section>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          container
          justify="center"
          className={classes.bgDark}
          alignItems="center"
          item
          md={6}
        >
          <Box component="article">
            <Typography
              className={classes.MuiTypography}
              variant="h6"
              component="h6"
              align="left"
            >
              Begin your search for the perfect recipe
            </Typography>
            <Button
              size="large"
              variant="outlined"
              className={classes.MuiButton}
            >
              Search
            </Button>
          </Box>
        </Grid>
        <Grid item container justify="center" alignItems="center" md={6}>
          <img
            alt="chefs-hat"
            src={logo}
            className="chefsHat"
            style={{ bottom: "3.5rem", position: "relative" }}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default HomePage;
