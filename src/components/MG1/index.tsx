import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { History } from "history";

import useStyles from "../Global/Styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

import MG1 from "../../core/classes/MG1";

const LAMBDA = "LAMBDA";
const MIU = "MIU";
const STD = "STD";
const N = "N";
const CS = "CS";
const CW = "CW";

type Input = "LAMBDA" | "MIU" | "STD" | "N" | "CS" | "CW";

interface ServerOneProps {
  history: History;
}

const getHistory = (sim: MG1, n: number) => {
  let arr: number[] = [];

  for (let i = 0; i < n; i += 1) {
    arr.push(sim.getPn(i));
  }
  return arr;
};

const ServerFive: React.FC<ServerOneProps> = ({ history }) => {
  const classes = useStyles();
  const [lambda, setLambda] = useState(0);
  const [items, setItems] = useState<number[]>([]);
  const [miu, setMiu] = useState(0);
  const [cw, setCw] = useState(0);
  const [cs, setCs] = useState(0);
  const [n, setN] = useState(0);
  const [dev, setDev] = useState(0);
  const [state, setState] = useState({
    ro: 0,
    l: 0,
    lq: 0,
    wq: 0,
    w: 0,
    p0: 0,
    totalCost: 0
  });

  // useEffect(() => {}, []);

  const handleChange = (n: string, type: Input) => {
    if (!n) return;

    const parsedNum = parseInt(n);
    if (parsedNum < 0) return;
    if (type === LAMBDA) setLambda(parsedNum);
    if (type === MIU) setMiu(parsedNum);
    if (type === N) setN(parsedNum);
    if (type === CW) setCw(parsedNum);
    if (type === CS) setCs(parsedNum);
  };

  const handleStdChange = (n: string, type: Input) => {
    if (!n) return;

    const parsedNum = parseFloat(n);
    if (parsedNum < 0) return;
    if (type === STD) setDev(parsedNum);
  };

  const handleCalculate = () => {
    const sim: MG1 = new MG1(lambda, miu, dev);
    const res = sim.calculateVars();
    setState(res);
    setItems(getHistory(sim, n));
  };

  const handleCostCalculation = () => {
    const sim: MG1 = new MG1(lambda, miu, dev);
    const totalCost = sim.getTotalCost(cw, cs);
    setState({
      ...state,
      totalCost
    })
  };

  const navBack = useCallback(() => {
    history.replace("/");
  }, [history]);

  return (
    <Box pt={4} className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.gradient4}  container
                direction="row">
            <IconButton size="medium" onClick={navBack}>
                <ArrowBackIosIcon fontSize="inherit" />
              </IconButton>
            <h1 className={classes.title}> Modelo M/G/1</h1>
          </Grid>
          <Grid item xs={6}>
            <Typography  variant="h4" color="inherit" className={classes.subtitles} >
              <br></br>
              Variables
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography  variant="h4" color="inherit" className={classes.subtitles} >
              <br></br>
              Resultados
            </Typography>
          </Grid>
          <Grid item xs={12} direction="row" container justify="space-between">
            <Grid item xs={6}  direction="row" container >
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                  label="Lambda (λ)"
                  variant="outlined"
                  className={classes.textfield}
                  type="number"
                  value={lambda}
                  onChange={(e) => handleChange(e.target.value, LAMBDA)}
                />
              </Grid>
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                  label="Miu (µ)"
                  variant="outlined"
                  type="number"
                  className={classes.textfield}
                  value={miu}
                  onChange={(e) => handleChange(e.target.value, MIU)}
                />
              </Grid>
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                  label="N"
                  variant="outlined"
                  type="number"
                  className={classes.textfield}
                  value={n}
                  onChange={(e) => handleChange(e.target.value, N)}
                />
              </Grid>
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                    label="STD"
                    variant="outlined"
                    type="number"
                    className={classes.textfield}
                    value={dev}
                    onChange={(e) => handleStdChange(e.target.value, STD)}
                />
              </Grid>
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                    label="Cw"
                    variant="outlined"
                    type="number"
                    className={classes.textfield}
                    value={cw}
                    onChange={(e) => handleChange(e.target.value, CW)}
                />
              </Grid>
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                    label="Cs"
                    variant="outlined"
                    type="number"
                    className={classes.textfield}
                    value={cs}
                    onChange={(e) => handleChange(e.target.value, CS)}
                />
              </Grid>
              <Grid item xs={6} className={classes.myPadding}>
                <Fab variant="extended" onClick={handleCalculate} className={classes.myBtn}  >
                  Calcular
                </Fab>
              </Grid>
              <Grid item xs={6} className={classes.myPadding}>
                <Fab variant="extended" onClick={handleCostCalculation} className={classes.myBtn}  >
                  Costo Total
                </Fab>
              </Grid>
              <Grid item xs={12} container >
                <List className={classes.root}>
                  <ListItem>
                    <Avatar className={classes.Result1}>
                      <Icon>check</Icon>
                    </Avatar>
                    <ListItemText primary="&nbsp;&nbsp;Ro (λ / sµ)" secondary={"= " + state.ro} className={ classes.text}/>
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.Result2}> 
                      <Icon>check</Icon>
                    </Avatar>
                    <ListItemText primary="&nbsp;&nbsp;P0" secondary={"= " + state.p0}/>
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.Result3}>
                      <Icon>check</Icon>
                    </Avatar>
                    <ListItemText primary="&nbsp;&nbsp;Lq (Número promedio de clientes en la cola)" secondary={"= " + state.lq}/>
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.Result4}> 
                      <Icon>check</Icon>
                    </Avatar>
                    <ListItemText primary="&nbsp;&nbsp;L (Número promedio de clientes en el sistema)" secondary={"= " + state.l} />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.Result5}> 
                      <Icon>check</Icon>
                    </Avatar>
                    <ListItemText primary="&nbsp;&nbsp;W (Tiempo promedio en el sistema)" secondary={"= " + state.w} />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.Result6}>
                      <Icon>check</Icon>
                    </Avatar>
                    <ListItemText primary="&nbsp;&nbsp;Wq (Tiempo esperado en la cola)" secondary={"= " +  state.wq} />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.Result7}>
                      <Icon>check</Icon>
                    </Avatar>
                    <ListItemText primary="&nbsp;&nbsp;Costo" secondary={"= " +  state.totalCost}/>
                  </ListItem>
                </List>
              </Grid>
            </Grid>


            <Grid item xs={6}>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Pn</TableCell>
                      <TableCell align="center">Probabilidad</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((item: number, index: number) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row" align="center">
                          P{index}
                        </TableCell>
                        <TableCell align="center">{item}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
            </TableContainer>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default ServerFive;
