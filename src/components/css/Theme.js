import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const montserrat = "'Montserrat', sans-serif";
const roboto = "'Roboto', sans-serif";

export const pallete = {
  black: "#000",
  primaryBlack: "#030303",
  primaryPink: "#DC0155",
  parimayBlue: "#6800D7",
  primaryWhite: "#FFFFFF",
  primaryPurple: "#6800D7",
  primaryGray: "#b8b8b8",
  primaryLightPink: "#F0E6FB",
};

let theme = createTheme({
  palette: {
    primary: { main: pallete.primaryPurple },
    secondary: { main: pallete.primaryPurple },
    error: { main: "#6E353A" },
    warning: { main: "#F5EE9E" },
    info: { main: "#645FF2" },
    success: { main: "#645FF2" },
    background: { default: "#fff" },
  },
  breakpoints: {
    values: { xs: 600, sm: 800, md: 1000, lg: 1200, xl: 1536 },
  },
  typography: {
    fontFamily: montserrat,
    h5: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h6: {
      color: "#030303",
      fontFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      // lineHeight: 2,
    },
    h4: {
      fontFamily: montserrat,
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 600,
    },
    h3: {
      fontFamily: roboto,
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: 400,
    },
    h2: {
      color: "#645FF2",
      fontSize: "20px",
      fontWeight: "600",
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: "400",
      padding: "10px 0",
      letterSpacing: "0.03rem",
    },
    subtitle2: { fontSize: 12, letterSpacing: "0.03rem", fontWeight: "400" },
    body1: {
      color: "#030303",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    // h1:{
    // fontSize: "65px",
    // fontWeight: 600,
    // },
    body2: { fontSize: 16, letterSpacing: "0.03rem" },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
