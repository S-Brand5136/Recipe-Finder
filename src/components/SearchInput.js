import React from "react";
import { useDispatch } from "react-redux";

// MaterialUi imports
import { Grid, Input, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  MuiInput: {
    borderRadius: "50px",
    border: "2px solid black",
    width: "30rem",
  },
  Search: {
    marginRight: "6px",
    marginLeft: "6px",
  },
}));

const SearchInput = () => {
  const classes = useStyles();

  return (
    <>
      <Input
        className={classes.MuiInput}
        color="primary"
        disableUnderline
        placeholder="search"
        startAdornment={<Search className={classes.Search} />}
      />
    </>
  );
};

export default SearchInput;
