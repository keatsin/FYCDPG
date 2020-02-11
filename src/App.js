import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles, Button } from "@material-ui/core";
import "./index.css";
import { initializeApp } from "firebase";
import "firebase/app";
var firebaseConfig = {
  apiKey: "AIzaSyA3eqCFZ-Y_lyU55IjZMQI4OFYkkKW4GCQ",
  authDomain: "djcounter-9057a.firebaseapp.com",
  databaseURL: "https://djcounter-9057a.firebaseio.com",
  storageBucket: "djcounter-9057a.appspot.com"
};

const firebaseApp = initializeApp(firebaseConfig);
const useStyles = makeStyles(theme => ({
  button: {
    fontSize: 24,
    fontWeight: "bold",
    width:'100%',
    margin:'15px 0',
  },
  container: {
    color: "#fff",
    textShadow: "1px 2px 0px black;",
    padding: 10,
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  bottomConainter: {
    color: "#fff",
    textShadow: "1px 2px 0px black;",
    padding: 10,
    backgroundColor:'rgba(30,144,255,0.5)'
  }
}));

const App = () => {
  const classes = useStyles();
  const [localCount, setCount] = useState("-");
  const rootRef = firebaseApp.database().ref("/");
  useEffect(() => {
    rootRef.on("value", snapshot => {
      const { counter } = snapshot.val();
      setCount(counter);
    });
  }, []);
  const updateRemoteCounter =()=>{
    rootRef.child('counter').set(localCount+1)
  }
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h6" className={classes.container}>
          發一崇德多倫多所有佛堂
          <br />
          響應您我凝聚善願同步誦經祈願
          <br />
          誦經累計次數3600次數10800遍
          <br />
          晚餐吃素＆晚上8點恭誦彌勒救苦真經三遍
          <br />
          參加者誦經前請點擊一次計數器連結
          <br />
          把愛串起來 凝聚您我慈悲之心 叩求諸天仙佛撥轉
          <br />
          感動上天 挽化疫情止息 天下眾生平安
          <br />
        </Typography>
        <Box
          bgcolor="warning.main"
          display="flex"
          justifyContent="center"
          p={3}
        >
          <Typography variant="h5">累計次數：{localCount}</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => updateRemoteCounter()}
            className={classes.button}
          >
            🙏我已經完成誦經🙏
          </Button>
        </Box>
        <Typography variant="h6" className={classes.bottomConainter}>
          迴向文：<br/>
          願以此誦經功德迴向<br/>
          平息新冠狀肺炎疫情 眾生平安
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
