import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down("md")]: {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
    },
    marginRight: theme.spacing(8),
    marginLeft: theme.spacing(22),
  },
  menuOptions: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

function NavBar(props) {
  const { history } = props;
  console.log(history);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuList = [
    { id: 1, title: "HOME", to: "/" },
    { id: 2, title: "ABOUT", to: "/about" },
    { id: 3, title: "PATIENT PORTAL", to: "/patientportal" },
    { id: 4, title: "SERVICES", to: "/services" },
    { id: 5, title: "BLOG", to: "/blog" },
    { id: 6, title: "CONTACT", to: "/contact" },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Dokita
          </Typography>

          <div>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuList.map((item) => (
                    <MenuItem onClick={() => handleMenuClick(`${item.to}`)}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <div className={classes.menuOptions}>
                {menuList.map((item) => (
                  <Button onClick={() => handleButtonClick(`${item.to}`)}>
                    {item.title}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);
