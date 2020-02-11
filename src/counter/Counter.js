/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Icon, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontSize:24,
    fontWeight: 'bold',
  }
}));

const Counter = ({setCount}) => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button} onClick={setCount}>
      🙏我已經完成誦經🙏
      </Button>
    </div>
  );
};

export default Counter;
