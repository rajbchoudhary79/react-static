import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { pallete } from "../css/Theme";
import { makeStyles } from "tss-react/mui";

function HowItWorks() {
  const steps = [
    {
      label: "Discovery Call",
      title: "Step 1",
      icon: "assets/images/group.png",
      description: `To get started with finding the perfect assistant for you, you can join a Discovery Call with our sales team. During this call, you can discuss your requirements and they will help you identify the ideal assistant for your specific needs. `,
    },
    {
      label: "Get The Perfect Match",
      title: "Step 2",
      icon: "assets/images/group2.png",
      description:
        "Our team will work diligently to pair you with the perfect assistant. We have a deep network of highly qualified professionals and we are confident in our ability to assign the ideal team member for the job or recruit a new applicant with the desired profile. You can trust us to provide top-notch service.",
    },
    {
      label: "Initiate",
      title: "Step 3",
      icon: "assets/images/group3.png",
      description: `Facilitate the onboarding process for your virtual assistant and begin task assignments. Our administration team oversees productivity through time and performance monitoring software, conducting regular feedback sessions.`,
    },
  ];
  const { classes } = useStyles();

  return (
    <Box className={classes.box}>
      <Grid
        container
        className={classes.contentWrapper}
      >
        {steps.map((step, index) => (
          <Grid item key={index} className={classes.grid}>
            <Box
              component="img"
              className={classes.imageTop}
              src={step.icon}
              alt="Descriptive Alt Text"
              style={{
                maxHeight: 80,
                objectFit: "contain",
              }}
            />
            <Typography variant="h5" color={pallete.primaryWhite}>
              {step.label}
            </Typography>
            <Typography variant="p" color={pallete.primaryWhite}>
              {step.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box className={classes.arrowBox}>
        <Box
          component="img"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg1IiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMTg1IDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTgzLjkzNiAzNC42NjE3QzE4NC4zNDUgMzQuNTk3MSAxODQuNjI0IDM0LjIxMzEgMTg0LjU2IDMzLjgwMzlMMTgzLjUwNyAyNy4xMzY1QzE4My40NDMgMjYuNzI3MyAxODMuMDU5IDI2LjQ0OCAxODIuNjUgMjYuNTEyNUMxODIuMjQxIDI2LjU3NzEgMTgxLjk2MSAyNi45NjExIDE4Mi4wMjYgMjcuMzcwM0wxODIuOTYxIDMzLjI5NjlMMTc3LjAzNCAzNC4yMzIzQzE3Ni42MjUgMzQuMjk2OCAxNzYuMzQ2IDM0LjY4MDggMTc2LjQxIDM1LjA5QzE3Ni40NzUgMzUuNDk5MSAxNzYuODU5IDM1Ljc3ODUgMTc3LjI2OCAzNS43MTM5TDE4My45MzYgMzQuNjYxN1pNMS4xMDIgMjguNTUwNEM0NS40MjUzIC02LjM1NTgxIDEyMy4zNjEgLTkuMTI3OTggMTgzLjM3OCAzNC41Mjc0TDE4NC4yNiAzMy4zMTQzQzEyMy43NjYgLTEwLjY4ODcgNDUuMDg1NiAtNy45OTc1OSAwLjE3Mzk0IDI3LjM3MkwxLjEwMiAyOC41NTA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
          alt=""
          className={classes.arrow}
        />
        <Box
          component="img"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg1IiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMTg1IDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTgzLjkzNiAzNC42NjE3QzE4NC4zNDUgMzQuNTk3MSAxODQuNjI0IDM0LjIxMzEgMTg0LjU2IDMzLjgwMzlMMTgzLjUwNyAyNy4xMzY1QzE4My40NDMgMjYuNzI3MyAxODMuMDU5IDI2LjQ0OCAxODIuNjUgMjYuNTEyNUMxODIuMjQxIDI2LjU3NzEgMTgxLjk2MSAyNi45NjExIDE4Mi4wMjYgMjcuMzcwM0wxODIuOTYxIDMzLjI5NjlMMTc3LjAzNCAzNC4yMzIzQzE3Ni42MjUgMzQuMjk2OCAxNzYuMzQ2IDM0LjY4MDggMTc2LjQxIDM1LjA5QzE3Ni40NzUgMzUuNDk5MSAxNzYuODU5IDM1Ljc3ODUgMTc3LjI2OCAzNS43MTM5TDE4My45MzYgMzQuNjYxN1pNMS4xMDIgMjguNTUwNEM0NS40MjUzIC02LjM1NTgxIDEyMy4zNjEgLTkuMTI3OTggMTgzLjM3OCAzNC41Mjc0TDE4NC4yNiAzMy4zMTQzQzEyMy43NjYgLTEwLjY4ODcgNDUuMDg1NiAtNy45OTc1OSAwLjE3Mzk0IDI3LjM3MkwxLjEwMiAyOC41NTA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
          alt=""
          className={classes.arrow}
        />
      </Box>
    </Box>
  );
}

export default HowItWorks;

const useStyles = makeStyles()((theme) => {
  return {
    box: {
      flexGrow: 1,
      display: "flex",
      position: "relative",
      marginTop: "50px",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    arrowBox: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    arrow: {
      position: "absolute",
      transform: "translate(-97px)",
      top: 0,
      width: 0,
      overflow: "hidden",
      animation: "showArrow 1.2s forwards",
      "&:first-child": {
        animationDelay: "1s",
        left: "33.33%",
      },
      "&:nth-child(2)": {
        animationDelay: "1.5s",
        left: "66.66%",
      },
    },
    contentWrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gridGap: "32px",
      gap: "32px",
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(1,1fr)",
      },
    },
    grid: {
      height: "100%",
      width: "100%",
      transition: "all .4s",
      position: "relative",
      textAlign: "center",
      borderRadius: "8px",
    },
  };
});
