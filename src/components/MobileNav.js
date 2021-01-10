import React from "react";
import { Link } from "react-router-dom";

// MaterialUI imports
import {
  Button,
  Divider,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#1D1D1D",
    opacity: 0.85,
  },
  MuiList: {
    marginTop: "5rem",
  },
  link: {
    textDecoration: "none",
    color: "#6C63FF",
    fontSize: "32px",
    letterSpacing: "3px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  MuiButton: {
    color: "white",
    float: "right",
    marginTop: "2rem",
    marginRight: "2rem",
  },
}));

const MobileNav = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.MuiButton} onClick={onClick}>
        <Close fontSize="large" />
      </Button>
      <List className={classes.MuiList}>
        <ListItem>
          <ListItemText align="center">
            <Link className={classes.link} to="/homepage">
              Search
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText align="center">
            <Link className={classes.link} to="/savedrecipes">
              Saved Recipes
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default MobileNav;
