import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import { pallete } from "../css/Theme";
import Drawer from "@mui/material/Drawer";
import {
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  IconButton,
  Collapse,
} from "@mui/material"; // StarBorder
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router-dom";
import { PopupModal } from "react-calendly";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CallRoundedIcon from "@mui/icons-material/CallRounded";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [anchorElCompany, setAnchorElCompany] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [popOvertrue] = React.useState(false);
  const [openCalendely, setOpenCalendely] = React.useState(false);
  const [openServ, setOpenServ] = React.useState(false);
  const [openComp, setOpenComp] = React.useState(false);

  const handleClick = () => {
    console.log("called ==> ");
    setOpenServ(!openServ);
  };

  const handleClickComp = () => {
    console.log("called ==> comp");
    setOpenComp(!openComp);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (route) => {
    navigate(route);
    setAnchorElCompany(null);
    setAnchorElServices(null);
  };

  const handleClickS = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseS = () => {
    setAnchorElServices(null);
  };
  const handleClickC = (event) => {
    setAnchorElCompany(event.currentTarget);
  };

  const handleCloseC = () => {
    setAnchorElCompany(null);
  };

  const openServices = Boolean(anchorElServices);
  const openCompany = Boolean(anchorElCompany);
  const idServices = openCompany ? "simple-popover" : undefined;
  const idCompany = openCompany ? "simple-popover" : undefined;
  const customPaperStyle = {
    borderRadius: "10px",
    width: "300px",
    top: "40px !importent",
    right: "120px",
  };

  const serviceList = [
    {
      name: "Virtual Private Assistant",
      path: "/services-vpa",
      icon: "",
    },
    {
      name: "Healthcare (VA) Medical Assistant",
      path: "/healthcareservices",
      icon: "",
    },
    {
      name: "Sales Development",
      path: "/salesdevelopment",
      icon: "",
    },
    {
      name: "Virtual Receptionist Service",
      path: "/virtualreceptionist",
      icon: "",
    },
    {
      name: "Translation/Interpreter Service",
      path: "/spanish-translation",
      icon: "",
    },
    {
      name: "Social Media Management",
      path: "/socialmediamanagement",
      icon: "",
    },
  ];

  const handleMobileClicks = (path) => {
    navigate(path);
    handleDrawerToggle();
  };

  const renderDrawer = () => (
    <Box
      // onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Box
        className={classes.gsdLogoBox}
        onClick={() => handleMobileClicks("/")}
      >
        <img
          className={classes.mainLogoSize}
          alt="logo"
          src="assets/logos/gsdnewLogo.png"
        />
      </Box>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemText
            primary="Home"
            onClick={() => handleMobileClicks("/")}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            primary="Contact Us"
            onClick={() => handleMobileClicks("/about-us")}
          />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Services" />
          {openServ ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openServ} timeout="auto" unmountOnExit>
          {serviceList.map((x) => (
            <List key={x.name} component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleMobileClicks(x.path)}
              >
                <ListItemText primary={x.name} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>
        <ListItemButton onClick={handleClickComp}>
          <ListItemText primary="Company" />
          {openComp ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openComp} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                primary="About Us"
                onClick={() => handleMobileClicks("/contact-us")}
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Box
        className={classes.gsdLogoBox}
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
        }}
      >
        <Typography style={{ display: "flex", justifyContent: 'center', fontWeight: 700 }}>
          <CallRoundedIcon style={{ fontSize: "20px", marginRight: "5px" }} />
          +57 301 551 4257
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ zIndex: "999", maxWidth: "90%" }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={popOvertrue ? null : handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "70%" },
        }}
      >
        {renderDrawer()}
      </Drawer>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: scrolled ? "#fff" : "transparent",
          boxShadow: scrolled ? "0px 2px 4px -1px rgba(0,0,0,0.4)" : "none",
          padding: scrolled ? "10px" : "15px 10px",
        }}
      >
        <Toolbar className={classes.toolbar}>
          <Box className={classes.mainBox}>
            <Box className={classes.gsdLogoBox} onClick={() => navigate("/")}>
              <img
                className={classes.mainLogoSize}
                alt="logo"
                src="assets/logos/gsdnewLogo.png"
              />
            </Box>
            <Box className={classes.menuBoxParent}>
              <Box className={classes.menuBoxPopver}>
                <Box
                  className={classes.menuBoxPopver}
                  aria-describedby={idServices}
                  variant="contained"
                  onClick={handleClickS}
                >
                  <Typography
                    className={
                      anchorElServices
                        ? classes.menuTextActive
                        : classes.menuText
                    }
                  >
                    Services
                  </Typography>
                  {anchorElServices ? (
                    <KeyboardArrowUpIcon
                      className={
                        anchorElServices
                          ? classes.downarrowActive
                          : classes.downarrow
                      }
                    />
                  ) : (
                    <KeyboardArrowDownIcon
                      className={
                        anchorElServices
                          ? classes.downarrowActive
                          : classes.downarrow
                      }
                    />
                  )}
                </Box>
              </Box>
              <Popover
                id={idServices}
                open={openServices}
                anchorEl={anchorElServices}
                onClose={handleCloseS}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                PaperProps={{
                  sx: customPaperStyle,
                }}
              >
                <List>
                  <ListItem
                    disablePadding
                    onClick={() => handleNavigation("/services-vpa")}
                  >
                    <ListItemButton>
                      <ListItemText primary="Virtual Private Assistant" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem
                    disablePadding
                    onClick={() => handleNavigation("/healthcareservices")}
                  >
                    <ListItemButton>
                      <ListItemText primary="Healthcare (VA) Medical Assistant" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem
                    disablePadding
                    onClick={() => handleNavigation("/salesdevelopment")}
                  >
                    <ListItemButton>
                      <ListItemText primary="Sales Development" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    onClick={() => handleNavigation("/virtualreceptionist")}
                  >
                    <ListItemButton>
                      <ListItemText primary="Virtual Receptionist Service" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    onClick={() => handleNavigation("/spanish-translation")}
                  >
                    <ListItemButton>
                      <ListItemText primary="Translation/Interpreter Service" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    onClick={() => handleNavigation("/socialmediamanagement")}
                  >
                    <ListItemButton>
                      <ListItemText primary="Social Media Management" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>
              <Box className={classes.menuBoxPopver}>
                <Box
                  className={classes.menuBoxPopver}
                  aria-describedby={idCompany}
                  variant="contained"
                  onClick={handleClickC}
                >
                  <Typography
                    className={
                      anchorElCompany
                        ? classes.menuTextActive
                        : classes.menuText
                    }
                  >
                    Company
                  </Typography>
                  {anchorElCompany ? (
                    <KeyboardArrowUpIcon
                      className={
                        anchorElCompany
                          ? classes.downarrowActive
                          : classes.downarrow
                      }
                    />
                  ) : (
                    <KeyboardArrowDownIcon
                      className={
                        anchorElCompany
                          ? classes.downarrowActive
                          : classes.downarrow
                      }
                    />
                  )}
                </Box>
              </Box>
              <Popover
                id={idCompany}
                open={openCompany}
                anchorEl={anchorElCompany}
                onClose={handleCloseC}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                PaperProps={{
                  sx: customPaperStyle,
                }}
              >
                <List>
                  <ListItem
                    disablePadding
                    onClick={() => handleNavigation("/about-us")}
                  >
                    <ListItemButton>
                      <ListItemText primary="About US" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </List>
              </Popover>
              <Box
                className={classes.menuBox}
                onClick={() => navigate("/blogs")}
              >
                <Typography className={classes.menuText}>Blog</Typography>
              </Box>
              <Box
                className={classes.menuBox}
                onClick={() => navigate("/contact-us")}
              >
                <Typography className={classes.menuText}>Contact us</Typography>
              </Box>
              <Box className={classes.phoneBox}>
                <Typography
                  className={classes.menuText}
                  style={{ display: "flex" }}
                >
                  <CallRoundedIcon
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />
                  +57 301 551 4257
                </Typography>
              </Box>
            </Box>
            <Box className={classes.btnBox}>
              <Button
                onClick={() => navigate("/book-demo")}
                className={classes.mainBtn}
                variant="contained"
              >
                Get Started
              </Button>
            </Box>
            <Box className={classes.btnBoxMobile}>
              <IconButton>
                <MenuRoundedIcon
                  sx={{ fontSize: "35px", color: pallete.primaryPurple }}
                  onClick={handleDrawerToggle}
                />
              </IconButton>
            </Box>
          </Box>
          <PopupModal
            url="https://calendly.com/nikkipanchal388/zoom-meeting"
            styles={{
              height: "1000px",
            }}
            onModalClose={() => setOpenCalendely(true)}
            open={openCalendely}
            rootElement={document.getElementById("root")}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const useStyles = makeStyles()((theme) => {
  return {
    gsdLogoBox: {
      cursor: "pointer",
      padding: "5px",
    },
    btnBox: {
      margin: "auto 2px",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    btnBoxMobile: {
      margin: "auto 2px",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    mainBtn: {
      backgroundColor: pallete.parimayBlue,
      color: pallete.primaryWhite,
      textTransform: "none",
      padding: "12px 40px",
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Roboto",
      [theme.breakpoints.down("lg")]: {
        padding: "12px 20px",
      },
    },
    popoverBox: {
      top: "100px !importent",
      left: "255px !importent",
    },
    downarrow: {
      "&:hover": {
        cursor: "pointer",
        color: pallete.primaryPink,
      },
    },
    downarrowActive: {
      color: pallete.primaryPink,
      "&:hover": {
        cursor: "pointer",
        color: pallete.primaryPink,
      },
    },
    mainLogoSize: {
      width: "80px",
      height: "60px",
      marginTop: "10px",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "20px",
        width: "70px",
        height: "70px",
      },
    },
    logoTExt: {
      color: pallete.primaryBlack,
      //   fontFamily: "Roboto",
      fontSize: "9px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    menuText: {
      margin: "auto",
      padding: "0 5px",
      color: pallete.primaryBlack,
      fontFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
      "&:hover": {
        cursor: "pointer",
        color: pallete.primaryPink,
      },
    },
    menuTextActive: {
      margin: "auto",
      padding: "0 5px",
      color: pallete.primaryPink,
      fontFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
      "&:hover": {
        cursor: "pointer",
        color: pallete.primaryPink,
      },
    },
    menuBoxParent: {
      ...styles.flexDRS,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    menuBoxPopver: {
      ...styles.flexDRS,
      margin: "auto 10px",
      padding: "5px",
      color: pallete.black,
      ".MuiPopover-root": {
        top: "40px !importent",
        right: "120px",
      },
      "&:hover": {
        cursor: "pointer",
        color: pallete.primaryPink,
      },
      [theme.breakpoints.down("md")]: {
        margin: "auto 5px",
      },
    },
    menuBox: {
      ...styles.flexDRS,
      margin: "auto 10px",
      padding: "10px",
      color: pallete.black,
      [theme.breakpoints.down("md")]: {
        margin: "auto 5px",
      },
    },
    phoneBox: {
      ...styles.flexDRS,
      margin: "auto 10px",
      padding: "10px",
      color: pallete.black,
    },
    mainBox: {
      ...styles.flexDRS,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    appBar: {
      background: "transparent",
      padding: "10px",
      height: "100px", // Set the desired height
      zIndex: 0,
      [theme.breakpoints.up("md")]: {
        padding: "10px 30px",
      },
    },
    toolBar: {
      display: "flex",
      flexDirection: "row",
      cursor: "pointer",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});
