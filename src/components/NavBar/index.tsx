import {
  AppBar,
  Container,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React from "react";
import ColorModeButton from "../ColorModeButton.tsx";
import GeoAltFill from "../Icons/GeoAltFill.tsx";
import LogoUmbrella from "../Icons/LogoUmbrella.tsx";
import SearchIcon from "./SearchIcon.tsx";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

type NavBarProps = {
  // todo
};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <LogoUmbrella color="white" size="24" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, ml: 2 }}
          >
            React Weather App
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton size="large" edge="start" color="inherit" sx={{ ml: 2 }}>
            <GeoAltFill color="white" size="24" />
          </IconButton>
          <ColorModeButton />
          {/* <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {colorMode === "dark" ? (
              <Typography variant="h6" noWrap component="div">
                Dark Mode
              </Typography>
            ) : (
              <Typography variant="h6" noWrap component="div">
                Light Mode
              </Typography>
            )}
          </IconButton> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
