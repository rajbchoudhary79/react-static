import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Button,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { pallete } from "../css/Theme";

const PaymentPage = () => {
  const { classes } = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* section-1*/}
      <Container maxWidth={false} className={classes.mainContainer}>
        <Grid container className={classes.mainGrid}>
          <Grid item md={6} className={classes.columnsGrid}>
            <Typography className={classes.serveceBelo}>
              Easy Way to Make online{" "}
              <span style={{ color: pallete.primaryPurple }}>
                Payments and Secure
              </span>
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.columnsGridRight}>
            <Box className={classes.homemenBox}>
              <img
                alt="boy"
                src="assets/images/paymentPage/Img.png"
                className={classes.homemenImg}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/*section-2 */}
      <Container maxWidth={false} classes={classes.container2}>
        <Grid container className={classes.mainGrid}>
          <Grid item md={6} className={classes.columnsGrid}>
            <Box className={classes.rectangleBox}>
              <Typography>Coming soon</Typography>
            </Box>
          </Grid>
          <Grid item md={6} className={classes.columnsGridRight}>
            <Box className={classes.rectangleBox2}>
              <Typography className={classes.SummaryHeading}>
                Booking Summary
              </Typography>
              <Paper className={classes.container}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography className={classes.BoxNormal}>
                      Product name
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.BoxNormal} align="right">
                      00$
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.BoxNormal}>
                      Taxes and fees
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" className={classes.BoxNormal}>
                      00$
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.BoxBold}>
                      Subtotal
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" className={classes.BoxBold}>
                      00$
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.BoxNormal}>
                      Service tax
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" className={classes.BoxNormal}>
                      00$
                    </Typography>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    {" "}
                  </Grid>

                  <Grid item xs={6}>
                    <Typography className={classes.BoxBold}>Total</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" className={classes.BoxBold}>
                      00$
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={handleOpen}
                      variant="contained"
                      className={classes.payNowButton}
                    >
                      Pay Now
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className={classes.style}>
                        <img
                          style={{ alignSelf: "center" }}
                          alt=""
                          src="assets/icons/PaymentPage/checkIcon.svg"
                          className={classes.playIcon}
                        />
                        <Typography
                          style={{ alignSelf: "center" }}
                          className={classes.modalHeading}
                          sx={{ mt: 2 }}
                        >
                          You’ve successfully ordered!
                        </Typography>
                        <Typography
                          align="center"
                          className={classes.modalText}
                        >
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate the
                          visual form of a document or a typeface without
                          relying on meaningful content. Lorem ipsum may be used
                          as a placeholder before final copy is available.
                          <br />
                          <br />
                          Questions? Suggestions? insightful thoughts?
                          <br />
                          <span className={classes.text}>
                            Shoot us an email.
                          </span>
                        </Typography>
                        <Box className={classes.rectangleBox3}>
                          <Paper>
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <Typography style={{ alignSelf: "flex-start" }}>
                                  Order Review
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <img
                                  style={{ alignSelf: "right" }}
                                  alt=""
                                  src="assets/icons/PaymentPage/dropDown.svg"
                                  className={classes.Icon2}
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <Typography className={classes.BoxNormal}>
                                  Total
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography
                                  align="right"
                                  className={classes.BoxNormal}
                                >
                                  00$
                                </Typography>
                              </Grid>
                            </Grid>
                          </Paper>
                          <Button
                            onClick={handleClose}
                            variant="contained"
                            className={classes.homePageBack}
                          >
                            Back to Home Page
                          </Button>
                        </Box>
                      </Box>
                    </Modal>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PaymentPage;

const useStyles = makeStyles()((theme) => {
  return {
    text: {
      color: "#020246",
      textDecoration: "underline",
    },
    homePageBack: {
      width: "550px",
      height: "47px",
      flexShrink: 0,
      borderRadius: "24px",
      background: "#6800D7",
      color: "#fff",
      marginTop: theme.spacing(2),
      //marginLeft: "60px"
    },
    Icon2: {
      marginLeft: "242px",
    },
    rectangleBox3: {
      width: "550px",
      height: "100px",
      flexShrink: 0,
      border: "1px solid rgba(18, 20, 22, 0.20)",
      background: "#FFF",
      marginTop: theme.spacing(2), // Adjust margin as needed
    },
    modalText: {
      color: "#667085",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "20px" /* 155.556% */,
    },
    modalHeading: {
      color: "#020246",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "28px" /* 155.556% */,
    },
    playIcon: {
      //marginLeft:"160px"
    },
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      //width: 400,
      backgroundColor: "White",
      borderRadius: "24.203px",
      boxShadow: "12px 12px 36px 6px rgba(2, 2, 70, 0.12)",
      p: 4,
      display: "flex",
      padding: "32px",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "32px",
    },
    payNowButton: {
      width: "159px",
      height: "47px",
      flexShrink: 0,
      borderRadius: "24px",
      background: "#6800D7",
      color: "#fff",
      marginTop: theme.spacing(2),
      marginLeft: "60px",
    },
    BoxBold: {
      color: "#030303",

      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
    },
    BoxNormal: {
      color: "#030303",

      fontFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    },
    SummaryHeading: {
      paddingLeft: theme.spacing(2),
      color: "#030303",

      fontFamily: "Roboto",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    },
    container: {
      padding: theme.spacing(2),
    },
    rectangleBox2: {
      width: "300px",
      height: "400px",
      marginLeft: "50px",
      marginTop: theme.spacing(2), // Adjust margin as needed
      flexShrink: 0,
      border: "0px solid rgba(18, 20, 22, 0.20)",
      background: "#FFF",
    },
    rectangleBox: {
      width: "550px",
      height: "600px",
      flexShrink: 0,
      border: "1px solid rgba(18, 20, 22, 0.20)",
      background: "#FFF",
      marginTop: theme.spacing(2), // Adjust margin as needed
    },
    container2: {
      marginTop: "110px",
      height: "120vh",
    },
    serveceBelo: {
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",

      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
      },
    },
    mainContainer: {
      marginTop: "110px",
      height: "81vh",
      background: "linear-Gradient(180deg,#DECAF4 0%,#EDC9DB 100%)",

      backgroundColor: "linear-gradint(180deg,#DECAF4 0%,#EDC9DB 100%)",
    },
    mainGrid: {
      height: "100%",
      paddingLeft: "121px",
    },
    columnsGrid: {
      margin: "auto 0px",
    },
    mainText: {
      background: "linear-gradient(93deg, #6800D7 0.68%, #DC0155 65.41%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        // padding:'20px'
      },
    },
    secondHeading: {
      fontSize: "16px",
      fontStyle: "normal",
      fontFamily: "Roboto",
      fontWeight: 500,
      lineHeight: "25px",
      color: "#333333",
      margin: "20px 0px",
    },
    columnsGridRight: {
      display: "flex",
      flexDirection: "center",
    },
    homemenImgBG: {
      // width: "839.763px",
      height: "300px",
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
    },
    homemenImg: {
      // width: "839.763px",
      height: "450px",
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
    },
  };
});
