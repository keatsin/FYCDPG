import React, { useState, useEffect, Fragment } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Dialog,
  Button,
  makeStyles,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress
} from "@material-ui/core";
import "./index.css";
import { initializeApp } from "firebase";
import "firebase/app";
var firebaseConfig = {
  apiKey: "AIzaSyC7B4gF3SLM67krt-m3KpcfedhVqvrQmqg",
  authDomain: "djnycounter.firebaseapp.com",
  databaseURL: "https://djnycounter.firebaseio.com",
  storageBucket: "djnycounter.appspot.com"
};

const firebaseApp = initializeApp(firebaseConfig);
const useStyles = makeStyles(theme => ({
  button: {
    fontSize: 24,
    fontWeight: "bold",
    width: "100%",
    margin: "15px 0"
  },
  container: {
    fontSize: 20,
    color: "#fff",
    textShadow: "1px 2px 0px black;",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    margin: "15px 0"
  },
  bottomConainter: {
    color: "#fff",
    textShadow: "1px 2px 0px black;",
    padding: 10,
    backgroundColor: "rgba(30,144,255,0.5)"
  },
  ButtonDisabled: {
    color: "white !important",
    backgroundColor: "grey  !important"
  },
  DialogRoot: {
    backgroundColor: "#f5b501"
  },
  goalSpan: {
    color: "rgba(230, 52, 52, 1)",
    fontSize: 15
  },
  DialogContent: {
    fontSize: "22px"
  },
  DialogActions: {
    justifyContent: "center"
  },
  buttonSubmit: {
    fontSize: "15px"
  }
}));

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [localCount, setCount] = useState("-");
  const rootRef = firebaseApp.database().ref();
  useEffect(() => {
    rootRef.child("counter").on("value", snapshot => {
      const counter = snapshot.val();
      setDataLoaded(true);
      setCount(counter);
    });
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const completedDJ = () => {
    let updates = {};
    const newConut = Number(localCount + 1);
    updates["counter"] = Number(newConut);
    if (newConut > localCount) {
      rootRef.update(updates);
    }
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h6" className={classes.container}>
          發一崇德大紐約地區所屬佛堂
          <br />
          響應您我凝聚善願同步誦經祈願
          <br />
          誦經累計次數43200次數129600遍
          <br />
          晚餐吃素＆晚上8點恭誦
          <br />
          彌勒救苦真經，心經各三遍
          <br />
          誦經後點擊「我已經完成誦經」迴向
          <br />
          把愛串起來 凝聚您我慈悲之心
          <br />
          叩求諸天仙佛慈悲撥轉 感動上天
          <br />
          挽化疫情止息 天下眾生平安
          <br />
        </Typography>
        <Box
          bgcolor="warning.main"
          display="flex"
          alignItems="center"
          flexDirection="column"
          p={3}
        >
          {isDataLoaded ? (
            <Fragment>
              <Typography variant="h5">誦經累計次數：{localCount}</Typography>
              <span className={classes.goalSpan}>
                恭誦彌勒救苦真經、心經：{localCount * 3} 遍
              </span>
            </Fragment>
          ) : (
            <CircularProgress />
          )}
        </Box>

        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleClickOpen()}
            className={classes.button}
            classes={{ disabled: classes.ButtonDisabled }}
            disabled={!isDataLoaded}
          >
            🙏完成誦經三遍，請按此🙏
          </Button>
        </Box>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          classes={{ paper: classes.DialogRoot }}
        >
          <DialogTitle id="alert-dialog-title">迴向文：</DialogTitle>
          <DialogContent>
            <Typography variant="h6" className={classes.DialogContent}>
              願以此誦經功德
              <br />
              迥向新冠肺炎及流感疫情平息
              <br />
              祈願眾生平安
            </Typography>
          </DialogContent>
          <DialogActions className={classes.DialogActions}>
            <Button
              variant="contained"
              onClick={completedDJ}
              color="secondary"
              className={classes.buttonSubmit}
            >
              完成功德迴向，請按此
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default App;
