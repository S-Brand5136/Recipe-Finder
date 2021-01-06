import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByMainIng } from "../actions/searchActions";

// Material UI imports
import {
  AppBar,
  Button,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search, ExpandMore } from "@material-ui/icons";
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
  },
}));

const Navigation = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchFilter, setSearchFilter] = useState("i");
  const [searchTerm, setSearchTerm] = useState("beef");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchByMainIng(searchTerm, searchFilter));
    // eslint-disable-next-line
  }, [dispatch, searchFilter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByMainIng(searchTerm, searchFilter));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (filter) => {
    setSearchFilter(filter);
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
          <Typography variant="h6" className={classes.title}>
            Recipe Finder
          </Typography>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              id="color"
              color="primary"
              onChange={(e) => handleChange(e)}
            />
            <Button onClick={(e) => handleSubmit(e)} color="inherit">
              <Search />
            </Button>
          </form>
          <Button
            aria-controls="open-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ color: "white" }}
          >
            {searchFilter === "i"
              ? "Main Ingredient"
              : searchFilter === "c"
              ? "Category"
              : searchFilter === "a"
              ? "Country"
              : "Search Filter"}
            <ExpandMore />
          </Button>
          <Menu
            id="search-term-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClose("i")}>
              Main Ingredient
            </MenuItem>
            <MenuItem onClick={() => handleClose("c")}>Category</MenuItem>
            <MenuItem onClick={() => handleClose("a")}>Country</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navigation;
