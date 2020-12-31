import React, { useState } from "react";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 280,
  },
});

const CardItem = ({
  meal,
  meal: {
    strArea,
    strCategory,
    strMeal,
    strMealThumb,
    strInstructions,
    strSource,
    strYoutube,
  },
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const arraySplit = strInstructions.split(". ");

  const ingredients = [];
  const measurements = [];

  Object.keys(meal).map((line) =>
    line.startsWith("strIngredient") && meal[line] !== "" && meal[line] !== null
      ? ingredients.push(meal[line])
      : line.startsWith("strMeasure") &&
        meal[line] !== "" &&
        meal[line] !== null
      ? measurements.push(meal[line])
      : ""
  );
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia className={classes.media} image={strMealThumb} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {strMeal}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Country Origin: {strArea}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Main Ingredient: {strCategory}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        scroll="body"
      >
        <DialogTitle id="alert-dialog-slide-title">{strMeal}</DialogTitle>
        <img className="imageHolder" alt={strMeal} src={strMealThumb}></img>
        <DialogContent>
          <DialogContentText>
            <Typography variant="p" color="textPrimary" component="p">
              Country Origin: {strArea}
            </Typography>
            <br />
            <Typography variant="p" color="textPrimary" component="p">
              Main Ingredient: {strCategory}
            </Typography>
            <br />
            <Typography variant="p" color="textPrimary" component="p">
              Youtube Link: <a href={strYoutube}>{strYoutube}</a>
            </Typography>
            <br />
          </DialogContentText>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Ingredients</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DialogContentText>
                <TableContainer component={Paper} className="table">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Ingredients</TableCell>
                        <TableCell align="right">Measurements</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {ingredients.map((ing) => (
                        <TableRow>
                          <TableCell component="th" scope="row">
                            <Typography component="p" color="textPrimary">
                              {ing}
                            </Typography>
                          </TableCell>

                          <TableCell align="right">
                            <Typography component="p" color="textPrimary">
                              {measurements[ingredients.indexOf(ing)]}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </DialogContentText>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Recipe Instructions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DialogContentText>
                {arraySplit.map((line) => (
                  <p>{line}.</p>
                ))}
              </DialogContentText>
            </AccordionDetails>
          </Accordion>

          <DialogContentText id="addMargin">
            Source Link: <a href={strSource}>{strSource}</a>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardItem;
