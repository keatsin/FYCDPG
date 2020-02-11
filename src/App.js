import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {makeStyles, Button} from "@material-ui/core";
import './index.css';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontSize:24,
    fontWeight: 'bold',
  },
  container:{
    color:'#fff',
    textShadow:'1px 2px 0px black;'
  }
}));

export default function App() {
  const classes = useStyles();
  const [count, setCount]=useState(1)
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h6" className={classes.container}>
          發一崇德多倫多
          <br />
          仁德佛堂 智德佛堂 興德佛堂 義德佛堂
          <br />
          響應您我凝聚善願同步誦經祈願-誦經累計次數3600次數10800遍
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
        <Box bgcolor="warning.main" display="flex" justifyContent="center" p={3} m={2}>
        <Typography variant="h5">
          累積次數：{count}
        </Typography>
        </Box>

        <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" className={classes.button} onClick={()=>setCount(count+1)}>
      🙏我已經完成誦經🙏
      </Button>
        </Box>
      </Box>
    </Container>
  );
}
