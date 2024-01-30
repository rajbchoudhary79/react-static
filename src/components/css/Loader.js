import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FFFFFF', // primaryBlack
  },
  loader: {
    border: '5px solid #f3f3f3', // Light grey
    borderTop: '5px solid #6800D7', // primaryPurple
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: '$spin 2s linear infinite',
  },
  text: {
    color: '#FFFFFF', // primaryWhite
    marginTop: '20px',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});

const LoadingComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loader}></div>
      <div className={classes.text}>Loading...</div>
    </div>
  );
};

export default LoadingComponent;
