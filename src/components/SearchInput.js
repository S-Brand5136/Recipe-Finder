import React, { useState } from "react";
import { useDispatch } from "react-redux";

// MaterialUi imports
import { Input, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  MuiInput: {
    borderRadius: "50px",
    border: "2px solid black",
    width: "30rem",
    fontSize: "18px",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      width: "20rem",
      left: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      left: "1rem",
    },
  },
  Search: {
    marginRight: "6px",
    marginLeft: "6px",
  },
}));

const SearchInput = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <Input
        className={classes.MuiInput}
        color="primary"
        autoFocus
        disableUnderline
        placeholder="search"
        startAdornment={<Search className={classes.Search} />}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </form>
  );
};

export default SearchInput;
