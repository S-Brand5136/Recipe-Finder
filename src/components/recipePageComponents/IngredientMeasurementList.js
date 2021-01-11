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
  Typography,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  MuiTyporgraphy: {
    marginBottom: "1rem",
    [theme.breakpoints.down("md")]: {
      margin: "1rem",
    },
  },
}));

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

  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems="flex-start"
      xs={12}
      lg={4}
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    >
      <Typography
        className={classes.MuiTyporgraphy}
        variant="h4"
        component="h4"
      >
        Ingredient List:
      </Typography>
      <TableContainer size="large" component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ingredient</TableCell>
              <TableCell>Measurement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.ingredient}>
                <TableCell component="th" scope="row">
                  {row.ingredient}
                </TableCell>
                <TableCell>{row.measurement}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default IngredientMeasurementList;
