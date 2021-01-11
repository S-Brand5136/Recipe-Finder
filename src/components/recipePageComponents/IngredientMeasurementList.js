import React from "react";

// MaterialUI imports
import {
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const IngredientMeasurementList = ({ ingredientList, measurementList }) => {
  const classes = useStyles();
  const rows = [];

  function createData() {
    for (let i = 0; i < ingredientList.length; i++) {
      rows.push({
        ingredient: ingredientList[i],
        measurement: measurementList[i],
      });
    }
  }

  createData();

  return <Grid></Grid>;
};

export default IngredientMeasurementList;
