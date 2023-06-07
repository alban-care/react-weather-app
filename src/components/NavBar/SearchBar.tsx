import {
  AppBar,
  InputBase,
  IconButton,
  alpha,
  styled,
  Box,
  Container,
  Toolbar,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "../Icons/SearchIcon";
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchQueryState } from "../../store/searchAtoms";
import { currentCityState } from "../../store/openWeatherAtoms";
import GeoIcon from "../Icons/GeoIcon";

type SearchBarProps = {
  // props
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.common.white, 0.15)
      : theme.palette.grey[400],
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? alpha(theme.palette.common.white, 0.25)
        : theme.palette.grey[500],
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

const SearchBar: React.FC<SearchBarProps> = () => {
  const theme = useTheme();
  const { palette } = theme;
  const [search, setSearch] = useRecoilState(searchQueryState);
  const currentCityWeather = useSetRecoilState(currentCityState);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    currentCityWeather(search);
    setSearch("");
  };

  return (
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
          <Box
            component="form"
            display="flex"
            justifyContent="center"
            onSubmit={handleSubmit}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                fullWidth
                onChange={handleSearch}
                value={search}
              />
            </Search>
            <IconButton size="large" edge="start" sx={{ ml: 2 }}>
              <GeoIcon />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default SearchBar;
