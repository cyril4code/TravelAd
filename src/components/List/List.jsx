import React from "react";
import { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  Inputlabel,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";

import useStyles from "./style";

const List = () => {
  const classes = useStyles();
  const { type, setType } = useState("restaurants");
  const { rating, setRating } = useState("restaurants");
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Resturants, Hotels & Attractions around you
      </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="attractions">Hotels</MenuItem>
          <MenuItem value="attractoins">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="attractions">Hotels</MenuItem>
          <MenuItem value="attractoins">Attractions</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
