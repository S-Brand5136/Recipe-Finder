import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/chefs-hat.svg";
import {
  Box,
  Button,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bgDark: {
    backgroundColor: "#1D1D1D",
    minHeight: "100vh",
  },
  bgLight: {
    height: "100%",
  },
  leftSide: {
    minHeight: "100vh",
  },
  MuiButton: {
    color: "white",
    borderColor: "#6C63FF",
    "&:hover": {
      backgroundColor: "#6C63FF",
    },
    width: "35rem",
    fontSize: "36px",
    borderRadius: "25px",
    borderWidth: "4px",
    [theme.breakpoints.down("sm")]: {
      width: "25rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  MuiTypography: {
    color: "#FFF",
    marginBottom: "2rem",
    letterSpacing: ".1rem",
    [theme.breakpoints.down("sm")]: {
      letterSpacing: "0rem",
    },
  },
  navigationLeft: {
    color: "#6C63FF",
    position: "relative",
    top: "3rem",
    left: "5rem",
    width: "80%",
    padding: "0",
    height: "0",
    letterSpacing: "5px",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Typography variant="h4" className={classes.navigationLeft}>
        Recipe Finder
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.bgDark}
          item
          md={6}
        >
          <Box component="article">
            <Typography
              className={classes.MuiTypography}
              variant="h6"
              component="p"
              align="center"
            >
              Begin your search for the perfect recipe
            </Typography>
            <Button
              size="large"
              variant="outlined"
              className={classes.MuiButton}
              onClick={() => history.push("/searchpage")}
            >
              Search
            </Button>
          </Box>
        </Grid>
        <Hidden smDown>
          <Grid item container justify="center" alignItems="center" md={6}>
            <img
              alt="chefs-hat"
              src={logo}
              className={classes.chefsHat}
              style={{
                bottom: "1.5rem",
                position: "relative",
                width: "75%",
                height: "70%",
              }}
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default HomePage;
