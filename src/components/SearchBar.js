import React from "react";
import { useDispatch } from "react-redux";

// MaterialUi imports
import { Input, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  MuiInput: {},
}));

const SearchBar = () => {
  return (
    <>
      <Input></Input>
    </>
  );
};

export default SearchBar;
