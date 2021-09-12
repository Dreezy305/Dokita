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
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
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

  const menuList = [
    "HOME",
    "ABOUT",
    "PATIENT PORTAL",
    "SERVICES",
    "BLOG",
    "CONTACT",
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar disableGutter>
          <Typography variant="h6" className={classes.title}>
            Photos
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
                  <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/about")}>
                    About Us
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/blog")}>
                    Blog
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div>
                <Button variant="contained">HOME</Button>
                <Button variant="contained">ABOUT US</Button>
                {/*<Button>PATIENT PORTAL</Button>*/}
                {/*<Button>SERVICES</Button>*/}
                <Button variant="contained">BLOG</Button>
                {/*<Button>CONTACT</Button>*/}
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);
