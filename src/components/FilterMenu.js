import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchParam } from "../actions/searchActions";

// materialui imports
import {
  ButtonGroup,
  Button,
  makeStyles,
  Typography,
  Popover,
} from "@material-ui/core";
import { Done, Cancel } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#1d1d1d",
    position: "relative",
    color: "white",
    left: "1rem",
    marginTop: "1rem",
  },
  MuiPopover: {
    pointerEvents: "none",
  },
  MuiPaper: {
    padding: theme.spacing(1),
  },
}));

const FilterMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [openPopper, setOpenPopper] = useState(null);
  const [popoverText, setPopoverText] = useState("");

  const searchParam = useSelector((state) => state.searchParam);
  const { param } = searchParam;

  const clickHandler = (param) => {
    dispatch(setSearchParam(param));
  };

  const handlePopoverOpen = (e) => {
    setOpenPopper(e.currentTarget);
    switch (e.currentTarget.textContent) {
      case "Ingredient":
        return setPopoverText("Such as chicken, beef, etc.");
      case "Area":
        return setPopoverText("Such as british, polish, etc.");
      case "Category":
        return setPopoverText("Such as starter, breakfast, etc.");
      default:
        return "";
    }
  };

  const handlePopoverClose = (e) => {
    setOpenPopper(null);
  };

  const open = Boolean(openPopper);

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
        startIcon={
          param === "INGREDIENT" ? (
            <Done style={{ color: "#6C63FF" }} />
          ) : (
            <Cancel style={{ color: "#6C63FF" }} />
          )
        }
        aria-owns={true ? "menu-popper" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Ingredient
      </Button>
      <Button
        className={classes.MuiButton}
        onClick={() => clickHandler("AREA")}
        startIcon={
          param === "AREA" ? (
            <Done style={{ color: "#6C63FF" }} />
          ) : (
            <Cancel style={{ color: "#6C63FF" }} />
          )
        }
        aria-owns={true ? "menu-popper" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Area
      </Button>
      <Button
        className={classes.MuiButton}
        onClick={() => clickHandler("CATEGORY")}
        startIcon={
          param === "CATEGORY" ? (
            <Done style={{ color: "#6C63FF" }} />
          ) : (
            <Cancel style={{ color: "#6C63FF" }} />
          )
        }
        aria-owns={true ? "menu-popper" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Category
      </Button>
      <Popover
        className={classes.MuiPopover}
        classes={{
          paper: classes.MuiPaper,
        }}
        id="menu-popper"
        open={open}
        anchorEl={openPopper}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        disableRestoreFocus
      >
        <Typography>{popoverText}</Typography>
      </Popover>
    </ButtonGroup>
  );
};

export default FilterMenu;
