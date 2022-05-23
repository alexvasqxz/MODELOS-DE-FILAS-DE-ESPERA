
import React from "react";
import { History } from "history";
import { useCallback } from "react";
import useStyles from "./HomePageStyles";

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';



interface HomePageProps {
  history: History;
}

const HomePage: React.FC<HomePageProps> = ({ history }) => {
  const classes = useStyles();

  const navToMidSquare = useCallback(() => {
    history.push(`midsquare`);
  }, [history]);


  return (
    <Box className={classes.root}> 
      <div  className={classes.gradient}>
        <h1 className={classes.title}>SIMULADOR DE MODELOS DE COLAS</h1>
        
        <Divider className={classes.divider} />
        <h4 
        className={classes.title}>
          Gustavo Vasquez Acosta - A00823326 <br></br> <br></br>
          Nicolas Gazzolo Varela - A01339945 <br></br> <br></br>
          Andrea Villarruel Sernas - A01656255 
          </h4>
        <Card className={classes.card}>
          <CardContent>
            <Link component={RouterLink} to="/mm1">
              <Grid
              container
              direction="row"
              justify="space-between"
          
              
            >
              <Avatar className={classes.Avatar1}>
                  <Icon>view_list</Icon>
              </Avatar>
              <Typography className={classes.subtitles}  gutterBottom>
                Modelo M/M/1
              </Typography>
            
            </Grid>
            </Link>
            
            <Divider className={classes.dividersmall} />
            <Link component={RouterLink} to="/mms">
              <Grid
                container
                direction="row"
                justify="space-between"
              >
                <Avatar className={classes.Avatar2}>
                    <Icon>view_list</Icon>
                </Avatar>
                <Typography className={classes.subtitles} gutterBottom>
                  Modelo M/M/s
                </Typography>
              
              </Grid>
            </Link>
            <Divider className={classes.dividersmall} />
            <Link component={RouterLink} to="/mmk">
              <Grid
                container
                direction="row"
                justify="space-between"
              >
                <Avatar className={classes.Avatar3}>
                    <Icon>view_list</Icon>
                </Avatar>
                <Typography className={classes.subtitles}  gutterBottom>
                  Modelo M/M/s/K
                </Typography>
              
                </Grid>
              </Link>
            <Divider className={classes.dividersmall} />
            <Link component={RouterLink} to="/mg1">
              <Grid
                container
                direction="row"
                justify="space-between"
              >
                <Avatar className={classes.Avatar4}>
                    <Icon>view_list</Icon>
                </Avatar>
                <Typography className={classes.subtitles}  gutterBottom>
                  Modelo M/G/1
                </Typography>
                </Grid>
              </Link>
            <Divider className={classes.dividersmall} />
            <Link component={RouterLink} to="/mg1e">
              <Grid
                  container
                  direction="row"
                  justify="space-between"
              >
                <Avatar className={classes.Avatar5}>
                  <Icon>view_list</Icon>
                </Avatar>
                <Typography className={classes.subtitles}  gutterBottom>
                  Modelo M/G/1 - Ek
                </Typography>
              </Grid>
            </Link>
        </CardContent>
        </Card>
        </div>
      </Box>
  );
};



export default HomePage;