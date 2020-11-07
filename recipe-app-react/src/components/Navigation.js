import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByMainIng } from "../actions/searchActions";
// Material UI imports
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByMainIng(searchTerm, searchFilter));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
          <TextField
            id="color"
            color="primary"
            onChange={(e) => handleChange(e)}
            value={searchTerm}
          />
          <Button onClick={(e) => handleSubmit(e)} color="inherit">
            <Search />
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ color: "white" }}
          >
            Search Filter
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => setSearchFilter("i")}>
              Main Ingredient
            </MenuItem>
            <MenuItem onClick={() => setSearchFilter("c")}>Category</MenuItem>
            <MenuItem onClick={() => setSearchFilter("a")}>Area</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
