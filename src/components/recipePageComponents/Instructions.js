import React from "react";

// MaterialUI Imports
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  instructions: {
    letterSpacing: ".1rem",
    lineHeight: "1.8rem",
    [theme.breakpoints.down("sm")]: {
      letterSpacing: "0rem",
    },
  },
  gridStyles: {
    position: "relative",
    left: "3rem",
    [theme.breakpoints.down("md")]: {
      left: "0",
      padding: "0 1.2rem 2rem 1.2rem",
      top: "4rem",
    },
  },
  titleStyling: {
    marginBottom: "1rem",
  },
}));

const Instructions = ({ instructions }) => {
  const classes = useStyles();

  const newInstructions = instructions.split(".");

  return (
    <Grid
      item
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      xs={12}
      lg={8}
      className={classes.gridStyles}
    >
      <div style={{ marginBottom: "1rem" }}>
        <Typography
          className={classes.titleStyling}
          variant="h4"
          component="h4"
          align="center"
        >
          Instructions on how to cook:{" "}
        </Typography>
        {newInstructions.map((string) => (
          <Typography
            variant="body1"
            component="p"
            className={classes.instructions}
          >
            {string}
          </Typography>
        ))}
      </div>
    </Grid>
  );
};

export default Instructions;
