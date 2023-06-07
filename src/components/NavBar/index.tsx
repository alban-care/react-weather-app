import {
  AppBar,
  Box,
  Container,
  IconButton,
  InputBase,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import React from "react";
import ColorModeButton from "./ColorModeButton";
import GeoIcon from "../Icons/GeoIcon";
import UmbrellaIcon from "../Icons/UmbrellaIcon";
import SearchIcon from "../Icons/SearchIcon";
import githubMarkWhite from "./github-mark-white.png";
import githubMark from "./github-mark.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.common.white, 0.15)
      : theme.palette.grey[600],
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? alpha(theme.palette.common.white, 0.25)
        : theme.palette.grey[700],
  },
  marginLeft: 0,
  width: "100%",
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
    padding: theme.spacing(2, 2, 1, 2),
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    width: "100%",
    fontSize: "1rem",
  },
}));

type NavBarProps = {
  // todo
};

const NavBar: React.FC<NavBarProps> = () => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <>
      <AppBar position="relative">
        <Container maxWidth="md">
          <Toolbar
            sx={{ paddingLeft: "0 !important", paddingRight: "0 !important" }}
          >
            <Box flexGrow={1} display="flex">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}
              >
                React Weather App
              </Typography>
              <UmbrellaIcon />
            </Box>
            <ColorModeButton />
            <Link
              href="https://github.com/alban-care/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{ mr: 1 }}
            >
              {palette.mode === "dark" ? (
                <img
                  src={githubMarkWhite}
                  alt="GitHub Mark"
                  width="32"
                  height="32"
                />
              ) : (
                <img
                  src={githubMark}
                  alt="GitHub Mark"
                  width="32"
                  height="32"
                />
              )}
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar
        position="sticky"
        sx={{
          display: { xs: "none", md: "flex" },
          backgroundColor:
            palette.mode === "dark" ? palette.grey[900] : palette.common.white,
        }}
      >
        <Toolbar disableGutters>
          <Container maxWidth="md">
            <Box display="flex" justifyContent="center">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  fullWidth
                />
              </Search>
              <IconButton size="large" edge="start" sx={{ ml: 2 }}>
                <GeoIcon />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
