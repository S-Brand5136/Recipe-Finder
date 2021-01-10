import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchParam } from "../actions/searchActions";

// materialui imports
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";
import { Done, Cancel } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    color: "black",
    left: "1rem",
    marginTop: "1rem",
  },
}));

const FilterMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const searchParam = useSelector((state) => state.searchParam);
  const { param } = searchParam;

  const clickHandler = (param) => {
    dispatch(setSearchParam(param));
  };

  return (
    <ButtonGroup
      className={classes.root}
      variant="text"
      color="inherit"
      aria-label="Search Filter Menu"
    >
      <Button
        className={classes.MuiButton}
        onClick={() => clickHandler("INGREDIENT")}
        startIcon={param === "INGREDIENT" ? <Done /> : <Cancel />}
      >
        Ingredient
      </Button>
      <Button
        className={classes.MuiButton}
        onClick={() => clickHandler("AREA")}
        startIcon={param === "AREA" ? <Done /> : <Cancel />}
      >
        Area
      </Button>
      <Button
        className={classes.MuiButton}
        onClick={() => clickHandler("CATEGORY")}
        startIcon={param === "CATEGORY" ? <Done /> : <Cancel />}
      >
        Category
      </Button>
    </ButtonGroup>
  );
};

export default FilterMenu;
