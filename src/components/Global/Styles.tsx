import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#efefef",
      minHeight: "100vh",
      color: theme.palette.primary.dark,
      flexFlow: "1",
    },
    container: {
      padding: theme.spacing(2),
    },
    text: {
      color: theme.palette.primary.dark,
      fontWeight: "bold",
    },
    gradient1: {
      background: "#99D1E9",
      padding: "50px 100px",
      width: "100%",
    },
    gradient2: {
      background: "#9391C9",
      padding: "50px 100px",
      width: "100%",
    },
    gradient3: {
      background: "#BBA0CB",
      padding: "50px 100px",
      width: "100%",
    },
    gradient4: {
      background: "#EEB4A7",
      padding: "50px 100px",
      width: "100%",
    },
    gradient5: {
      background: "#D2DAB1",
      padding: "50px 100px",
      width: "100%",
    },

    title: {
      color: "#f0f4fb",
      margin: "1rem auto",
    },
    subtitles: {
      color: theme.palette.primary.main,
      margin: "auto 0  !important",
      fontWeight: "bold",
      textAlign: "center",
    },

    myPadding: {
      padding: "10px"
    },
    redAvatar: {
      backgroundColor: "#4e69a2 !important"
    },
    yellowAvatar: {
      backgroundColor: "#627aac !important"
    },  
    greenAvatar: {
      backgroundColor: "#758ab6 !important"
    },
    blueAvatar: {
      backgroundColor: "#899bc1 !important"
    }, 

    Result1: {
      backgroundColor: "#70658A !important",
    },
    Result2: {
      backgroundColor: "#D47FAA !important",
    },
    Result3: {
      backgroundColor: "#E28EA5 !important",
    },
    Result4: {
      backgroundColor: "#F9B280 !important",
    },
    Result5: {
      backgroundColor: "#FBCE80 !important",
    },
    Result6: {
      backgroundColor: "#FBE397 !important",
    },
    Result7: {
      backgroundColor: "#AFC58C !important",
    },
    lambdae: {
      backgroundColor: "#967bb6 !important",
    },

    card: {
      maxWidth: "30rem",
      margin: "9rem auto 0 auto",
    },

    myBtn: {
      backgroundColor: "#3b5998 !important",
      color: "#ffffff !important",
    },

    textfield: {
      width: "100%",
    },
    cardTemp: {
      height: "214px",
    },
    centeredCard: {
      width: "100%",
      height: "214px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    centered: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default useStyles;
