import React, { useState } from "react";
import { Link } from "react-router-dom";

// MaterialUI imports
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { FavoriteBorderOutlined, Favorite } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  MuiButton: {
    borderColor: "#6C63FF",
    "&:hover": {
      backgroundColor: "#6C63FF",
      color: "white",
    },
    width: "15rem",
    fontSize: "18px",
    borderRadius: "25px",
    borderWidth: "4px",
    position: "relative",
    bottom: "9rem",
    [theme.breakpoints.down("lg")]: {
      bottom: "7rem",
    },
    [theme.breakpoints.down("sm")]: {
      bottom: "5rem",
    },
  },
  iconStyle: {
    color: "#6C63FF",
  },
  infoText: {
    marginBottom: "2rem",
  },
  linkStyle: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const InfoText = ({ title, area, category, youtube }) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <Grid
      style={{ height: "75vh" }}
      container
      justify="center"
      alignItems="center"
      item
      spacing={0}
      xs={12}
      lg={6}
    >
      <Grid item xs={12}>
        <Typography align="center" variant="h3" component="h4">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          className={classes.infoText}
          align="center"
          variant="h5"
          component="p"
        >
          Meal Heritage: {area}
        </Typography>
        <Typography
          className={classes.infoText}
          align="center"
          variant="h5"
          component="p"
        >
          Meal Type: {category}
        </Typography>
        <Typography
          className={classes.infoText}
          align="center"
          variant="h5"
          component="p"
        >
          Youtube: <Link className={classes.linkStyle}>{youtube}</Link>
        </Typography>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <Button
          className={classes.MuiButton}
          startIcon={
            !hover ? (
              <FavoriteBorderOutlined className={classes.iconStyle} />
            ) : (
              <Favorite />
            )
          }
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          variant="outlined"
        >
          Save Recipe
        </Button>
      </Grid>
    </Grid>
  );
};

export default InfoText;
