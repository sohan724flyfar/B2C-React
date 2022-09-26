import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../image/dsh-img/WhiteLogo.png";
import { Link, useLocation } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import "./Header.css";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  // console.log("trigger", trigger);
  const location = useLocation();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandleClick = () => {
    setMenuOpen((prev) => !prev);
  };
  const menuHandleClickAway = () => {
    setMenuOpen(false);
  };
  return (
    <Box className="header-parent custom-modal-close">
      {/* ------------------------------Responsive Menubar Start -----------------*/}
      <Box className="containers header-tab ">
        <Box className="header-logoo">
          <Link to="/">
            <img alt="logo-not-found" src={logo} />
          </Link>
        </Box>
        <Box>
          <ClickAwayListener onClickAway={menuHandleClickAway}>
            <Box>
              <Box>
                <Button onClick={menuHandleClick} className="menu-icon">
                  <HiMenuAlt1 fontSize={"40px"} color="#fff" />
                </Button>
              </Box>
              {menuOpen ? (
                <Box>
                  <Box className="menuStyles" pt="60px">
                    <ul>
                      <li>
                        <Link to="/">
                          <Button>
                            Home
                            <FiberManualRecordIcon
                              id="active"
                              sx={{ fontSize: "8px", marginLeft: "5px" }}
                            />
                          </Button>
                        </Link>
                      </li>
                      <li className="visa89">
                        <Link to="/">
                          <Button style={{ marginLeft: "-5px" }}>Visa</Button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <Button>About Us</Button>
                        </Link>
                      </li>
                      <li>
                        <Button>Contact Us</Button>
                      </li>
                    </ul>
                  </Box>
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>
        </Box>
      </Box>

      {/* -----------------------Responsive Menubar End -----------------*/}

      {/* desktop main menu here  */}
      <AppBar position="static" className="headerBgs appbody containers">
        <Box className="header-width">
          <Toolbar disableGutters>
            <Box className="header-logo">
              <Link to="/">
                <img alt="logo-not-found" src={logo} width="150px" />
              </Link>
            </Box>

            {/* responsive  menu end  here */}

            {/* main menu here  */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Box className="manu-parent">
                <Box className="menu-contentt">
                  <Link to="/">
                    <Button>
                      Home
                      <FiberManualRecordIcon
                        id="active"
                        sx={{ fontSize: "8px", marginLeft: "5px" }}
                      />{" "}
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button>Visa</Button>
                  </Link>
                  <Link to="/">
                    <Button>About Us </Button>
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
