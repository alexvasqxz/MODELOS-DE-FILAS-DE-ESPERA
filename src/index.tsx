import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";



const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#3b5998",
			light: "#fcfcfc",
			dark: "#343857",
		

		},
		secondary: {
			main: "#3b5998",
			light: "#64a0fb",
			dark: "#f0f4fb",
		},
	},
});

ReactDOM.render(
  <React.StrictMode>
   <MuiThemeProvider theme={theme}>
	  <App />
	</MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
