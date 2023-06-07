import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  useTheme,
  Typography,
} from "@mui/material";
import React from "react";
import UmbrellaIcon from "../Icons/UmbrellaIcon";
import ColorModeButton from "./ColorModeButton";
import SearchBar from "./SearchBar";
import githubMarkWhite from "./github-mark-white.png";
import githubMark from "./github-mark.png";

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
      <SearchBar />
    </>
  );
};

export default NavBar;
