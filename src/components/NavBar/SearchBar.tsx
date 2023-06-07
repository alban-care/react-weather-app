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
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import SearchIcon from "../Icons/SearchIcon";
import GeoIcon from "../Icons/GeoIcon";
import { useEffect, useState, useRef } from "react";
import useDebounce from "../../hook/UseDebounce";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cityState, citiesState } from "../../state/city";
import { searchState } from "../../state/search";
import { getGeoLocationByCityName } from "../../api";

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
  const inputRef = useRef<HTMLInputElement>(null);
  const { palette } = theme;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [search, setSearch] = useRecoilState<string>(searchState);
  const [cities, setCities] = useRecoilState<GeoLocation[]>(citiesState);
  const setCityState = useSetRecoilState<GeoLocation>(cityState);

  const debouncedValue = useDebounce<string>(search, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // update search state (controlled field)
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return [];
    // todo: fetch data from api
    const cities = await getGeoLocationByCityName(search);
    // update cities state
    setCities(cities);
    // open the menu
    setAnchorEl(inputRef.current);
  };

  const handleClickOnMenuItem = (e: React.MouseEvent<HTMLElement>) => {
    const id = Number(e.currentTarget.id);
    // update city state when user select a city in the menu
    setCityState(cities[id]);
    // close the menu
    setAnchorEl(null);
    // reset search state
    setSearch("");
  };

  useEffect(() => {
    // todo: fetch data from api
  }, [debouncedValue]);

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
            <Search ref={inputRef}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                fullWidth
                onChange={handleChange}
                value={search}
              />
            </Search>
            <IconButton size="large" edge="start" sx={{ ml: 2 }}>
              <GeoIcon />
            </IconButton>
          </Box>
          <Menu
            id="search-menu"
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            open={Boolean(anchorEl)}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                minWidth: 300,
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
          >
            {cities && (
              <Box sx={{ p: 2, pb: 0.5 }}>
                {cities.map((result, index) => (
                  <MenuItem
                    id={`${index}`}
                    key={index}
                    onClick={handleClickOnMenuItem}
                    sx={{ typography: "body2" }}
                  >
                    <GeoIcon />
                    <Box ml={2}>
                      <Typography variant="subtitle1" color="text.primary">
                        {result.name}
                      </Typography>
                      <Typography variant="inherit" color="text.secondary">
                        {`${result.state}, ${result.country}`}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Box>
            )}
          </Menu>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default SearchBar;
