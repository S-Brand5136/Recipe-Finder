import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

// Material UI imports
import {
  AppBar,
  Drawer,
  Hidden,
  makeStyles,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      left: "16px",
    },
  },
  title: {
    flexGrow: 1,
    color: "white",
    marginTop: "3rem",
    marginLeft: "2rem",
    marginBottom: "3rem",
    fontWeight: 500,
    letterSpacing: "5px",
  },
  link: {
    textDecoration: "none",
    color: "white",
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

  const [open, setOpen] = useState(false);

  return (
    <nav className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#1d1d1d" }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Recipe Finder
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>
          <Hidden mdUp>
            <Drawer anchor="top" open={open}>
              <MobileNav onClick={() => setOpen(false)} />
            </Drawer>
          </Hidden>
          <Hidden smDown>
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
          </Hidden>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navigation;
