import { Box, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { pallete } from '../css/Theme';

function AboutSection({description}) {
const { classes } = useStyles();

  return (
    <Container maxWidth={false} className={classes.aboutContainer}>
      <Box>
        <Typography variant="h4" className={classes.aboutHeading}>
          About
        </Typography>
      </Box>
      <Grid container className={classes.aboutInner}>
        <Grid item md={12}>
          <Card className={classes.about}>
            <Typography variant="h6">
              {description ||
                `Discover the transformative power of hiring a virtual assistant!
              Unlock a realm of benefits, where decreased employment costs,
              soaring productivity, and the gift of reclaimed time become your
              daily reality. Imagine slashing costs by up to 70%, gaining
              invaluable moments in your day, and witnessing a surge in overall
              efficiency. By entrusting your most laborious tasks to a virtual
              assistant, you liberate your mind to focus on tasks that only you
              can master. Moreover, this isn't just a cost-effective solution;
              it's the key to scaling your business effortlessly, without the
              burden of costly office space or equipment. Embrace sustainable
              growth, and let a virtual assistant redefine the way you work!`}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutSection

const useStyles = makeStyles()((theme) => {
  return {
    aboutContainer: {
      padding: "50px 0",
      [theme.breakpoints.down("md")]: {
        padding: "30px 0",
      },
    },
    aboutHeading: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      textTransform: "capitalize",
      textAlign: "center",
      color: `${pallete.primaryPurple}`,
      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
      },
    },
    aboutInner: {
      padding: "40px",
      display: "flex", // Set the container to be a flex container
      flexDirection: "row", // Align children in a row
      alignItems: "stretch",
      [theme.breakpoints.down("md")]: {
        padding: "20px",
      },
    },
    about: {
      padding: "40px",
      background: "#F7F7FD",
      boxShadow: "28px 38px 40px -11px rgba(55,46,206,.1)",
      borderRadius: "30px",
    },
  };
});