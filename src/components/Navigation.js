import React from "react";
import { Link } from "react-router-dom";

// Material UI imports
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
    marginTop: "3rem",
    marginLeft: "2rem",
    marginBottom: "3rem",
    fontWeight: 500,
    letterSpacing: "5px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    letterSpacing: "3px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  mgRight: {
    marginRight: "2rem",
    fontSize: "18px",
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h4" className={classes.title}>
            Recipe Finder
          </Typography>
          <Typography
            style={{ fontSize: "18px", marginRight: "4rem" }}
            variant="subtitle2"
          >
            <Link to="/homepage" className={classes.link}>
              Search
            </Link>
          </Typography>
          <Typography className={classes.mgRight} variant="subtitle2">
            <Link to="/savedrecipes" className={classes.link}>
              Saved Recipes
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navigation;
