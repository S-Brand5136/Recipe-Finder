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
      <Grid item xs={12} md={10}>
        <SearchInput />
      </Grid>
      <Grid item xs={12} md={2}>
        <FilterMenu />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
