import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      color: theme.palette.primary.dark,
      flexFlow: "1",
    },
    container: {
      padding: theme.spacing(2),
    },
    text: {
      fontFamily: "Montserrat-Bold",
    },
    gradient: {     
      background: "#E8AF94",
      height: "20rem",
      borderRadius: "0px",
      padding: '50px 100px'
    },
    cards: {
      borderRadius: "0px",
    },
    title: {
      color: "#FFFFFF",

    },
    subtitles: {
      color: "#70658A",
      margin: "auto 0  !important",
    },
    divider: {
      height: "5px !important",
      backgroundColor:  "#FFFFFF !important"
    },
    icon: {
    margin: 1 * 2,
    },
    card: {
      maxWidth: "30rem",
      margin: "7rem auto 0 auto", 
    },
    dividersmall: {
      margin: "1.5rem 0rem !important"
    },
    Avatar1: {
      backgroundColor: "#99D1E9 !important"
    },  
    Avatar2: {
      backgroundColor: "#9391C9 !important"
    },
    Avatar3: {
      backgroundColor: "#BBA0CB !important"
    },  
    Avatar4: {
      backgroundColor: "#EEB4A7 !important"
    },
    Avatar5: {
      backgroundColor: "#D2DAB1 !important"
    }  
  })
);

export default useStyles;
