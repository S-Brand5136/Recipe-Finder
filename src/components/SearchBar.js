import React from "react";
import { useDispatch } from "react-redux";
import FilterMenu from "./FilterMenu";
import SearchInput from "./SearchInput";

// MaterialUi imports
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
    position: "relative",
    right: "2rem",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      right: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      right: "3.5rem",
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      justify="space-between"
      direction="row"
      alignItems="center"
    >
      <Grid item xs={12} lg={12} xl={10}>
        <SearchInput />
      </Grid>
      <Grid item xs={12} lg={12} xl={2}>
        <FilterMenu />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
