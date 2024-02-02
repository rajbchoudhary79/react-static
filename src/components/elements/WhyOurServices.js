import { Box, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";

function WhyOurServices() {
    const { classes } = useStyles();
  return (
    <Container maxWidth={false} className={classes.conatiner3}>
      <Typography variant="h4" align="center">
        <Typography variant="h4" color="primary">
          Why Our Services Are
        </Typography>
        Different
      </Typography>
      <Grid container sx={{ ...styles.flexDRC, paddingTop: "20px" }}>
        <Grid container md={10}>
          <Grid item md={6} lg={4}>
            <Card className={classes.serv2gridCard}>
              <Box
                component="img"
                className={classes.products}
                src="\assets\icons\services\p1.svg"
                alt="Descriptive Alt Text"
              />
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: "10px" }}
              >
                Unwavering Commitment to Excellence
              </Typography>
              <Typography variant="h6" align="center">
                We emphasize an unwavering commitment to delivering excellence,
                ensuring that the quality of service surpasses conventional
                solutions in the outsourcing industry.{" "}
              </Typography>
            </Card>
          </Grid>
          <Grid item sm={6} lg={4} className={classes.whyGridMid}>
            <Box
              component="img"
              className={classes.productsBGImg}
              src="\assets\icons\services\fill.png"
              alt="Descriptive Alt Text"
            />
            <Card
              style={{ position: "relative" }}
              className={classes.serv2gridCard}
            >
              <Box
                component="img"
                className={classes.products}
                src="\assets\icons\services\p2.svg"
                alt="Descriptive Alt Text"
              />
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: "10px" }}
              >
                Flexible, Scalable, and Customized Solutions
              </Typography>
              <Typography variant="h6" align="center">
                We offer solutions that are not only flexible but also scalable
                and customized to meet the unique demands of each client,
                ensuring a tailored approach for maximum effectiveness.{" "}
              </Typography>
            </Card>
          </Grid>
          <Grid item sm={6} lg={4}>
            <Card className={classes.serv2gridCard}>
              <Box
                component="img"
                className={classes.products}
                src="\assets\icons\services\p3.svg"
                alt="Descriptive Alt Text"
              />
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: "10px" }}
              >
                Exceeding Expectations Through Dedication{" "}
              </Typography>
              <Typography variant="h6" align="center">
                GSD's commitment goes beyond conventional service providers; the
                emphasis on exceeding expectations showcases a dedication to
                delivering exceptional results and client satisfaction.{" "}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WhyOurServices;

const useStyles = makeStyles()((theme) => {
    return {
      conatiner3: {
        backgroundColor: "#F0E6FB",
        padding: "50px 0",
        [theme.breakpoints.down("md")]: {
          padding: "30px 0",
        },
      },
      serv2gridCard: {
        height: "400px",
        padding: "40px 30px",
        margin: "20px 40px",
        ...styles.flexDCC,
        alignItems: "center",
        borderRadius: "12px",
      },
      products: {
        ...styles.imagesBox,
        width: "100px",
        height: "100px",
      },
      whyGridMid: {
        position: "relative",
      },
      productsBGImg: {
        ...styles.imagesBox,
        position: "absolute",
        width: "82%",
        top: "6px",
        left: "70px",
        height: "400px",
        [theme.breakpoints.down("md")]: {
          left: "unset",
          right: 0,
        },
      },
    };
})