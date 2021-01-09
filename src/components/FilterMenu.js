import React, { useState } from "react";
import { useDispatch } from "react-redux";

// materialui imports
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";
import { Done, Cancel } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    right: "10px",
    color: "black",
  },
}));

const FilterMenu = () => {
  const classes = useStyles();

  const clickHandler = () => {};

  return (
    <ButtonGroup
      className={classes.root}
      variant="text"
      color="inherit"
      aria-label="Search Filter Menu"
    >
      <Button startIcon={<Done />}>Ingredient</Button>
      <Button startIcon={<Done />}>Area</Button>
      <Button startIcon={<Done />}>Category</Button>
    </ButtonGroup>
  );
};

export default FilterMenu;
