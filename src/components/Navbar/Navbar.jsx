import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

// Custom imports
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthContextProvider";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { useCart } from "../../contexts/CartContextProvider";

// const pages = ["Products", "Pricing", "Blog"];

const pages = [
  {
    type: "Products",
    path: "/products",
  },
  { type: "Admin", path: "/admin" },
];
const pages2 = [{ type: <ShoppingCartIcon />, path: "/cart" }];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settings = [
  {
    type: "Register",
    path: "/register",
  },
  {
    type: "Login",
    path: "/login",
  },
];
const settings2 = [
  {
    type: "Cart",
    path: "/cart",
  },
];
//for dark mode
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "red",
  },
}));

const ResponsiveAppBar = () => {
  // const [count, setCount] = React.useState("");

  // const handleCount = () => {};

  // custom LOgic

  const navigate = useNavigate();
  const { user, logout, checkAuth } = useAuth();

  const { count, getCount } = useCart();

  useEffect(() => {
    getCount();
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);
  //END
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const setCountFunc = () => {
  //   let array = [];
  //   cart.products.map((item) => {
  //     array.push(item.count++);
  //   });
  //   let sum = array.reduce((a, b) => a + b, 0);
  //   console.log(sum);
  //   setCount(sum);
  // };
  // useEffect(() => {
  //   setCountFunc();
  // }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.type} onClick={handleCloseNavMenu}>
                    <Typography
                      key={page.type}
                      textAlign="center"
                      onClick={() => navigate(page.path)}
                    >
                      {page.type}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page2) => (
                <Button
                  key={page2.type}
                  onClick={() => navigate(page2.path)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page2.type}
                </Button>
              ))}

              {pages2.map((page) => (
                <StyledBadge
                  badgeContent={count}
                  color="primary"
                  sx={{ margin: 0, padding: 0 }}
                >
                  <Button
                    key={page.type}
                    onClick={() => navigate(page.path)}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      right: "50",
                      width: "1em",
                      height: "1em",
                    }}
                  >
                    {page.type}
                  </Button>
                </StyledBadge>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile Menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user} src="/static/images/avatar/2.jpg" />
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
                  <MenuItem key={setting.type} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate(setting.path)}
                    >
                      {setting.type}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={() => logout()}>
                    LogOut
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
