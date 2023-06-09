import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  getGeoLocationByCityName,
  getGeoLocationByCoordinate,
} from "../../api";
import useDebounce from "../../hook/UseDebounce";
import { citiesState, cityState } from "../../state/city";
import { historyState } from "../../state/history";
import { searchState } from "../../state/search";
import GeoIcon from "../Icons/GeoIcon";
import SearchIcon from "../Icons/SearchIcon";
import HistoryIcon from "../Icons/HistoryIcon";

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
  const [error, setError] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [search, setSearch] = useRecoilState<string>(searchState);
  const [cities, setCities] = useRecoilState<GeoLocation[]>(citiesState);
  const [history, setHistory] = useRecoilState<GeoLocation[]>(historyState);
  const setCityState = useSetRecoilState<GeoLocation | null>(cityState);

  const debouncedValue = useDebounce<string>(search, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // update search state (controlled field)
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!search) return [];
    // fetch data from api
    const cities = await getGeoLocationByCityName(search);
    // update cities state
    setCities(cities);
    // open the menu
    setAnchorEl(inputRef.current);
  };

  const handleClickOnMenuItem = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    if (!id) return;
    const city =
      cities[Number(id.replace("city-", ""))] ||
      history[Number(id.replace("history-", ""))];
    if (!city) return;
    // update city state
    setCityState(city);
    // update history state (remove duplicate and keep only 5 items)
    setHistory((item) => {
      return [city, ...item.filter((item) => item.name !== city.name)].slice(
        0,
        5
      );
    });
    // close the menu
    setAnchorEl(null);
    // reset search state
    setSearch("");
  };

  const handleClickOnHistoryIcon = () => {
    setError(null);

    if (!history.length) setError("Aucune recherche récente.");
    // open the menu
    setAnchorEl(inputRef.current);
  };

  const handleClickOnGeoIcon = async () => {
    setError(null);

    type Position = {
      coords: {
        latitude: number;
        longitude: number;
      };
    };

    try {
      // get user's current location
      const position = await new Promise<Position>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        });
      });

      // fetch data from api
      const cities = await getGeoLocationByCoordinate(
        position.coords.latitude,
        position.coords.longitude
      );
      // update cities state
      setCities(cities);
      // open the menu
    } catch (error) {
      if (error instanceof GeolocationPositionError) {
        if (error.code === error.PERMISSION_DENIED) {
          setError(
            "La géolocalisation n'est pas autorisée pour votre navigateur. Veuillez l'activer."
          );
        } else {
          setError(
            "Une erreur de géolocalisation est survenue. Veuillez réessayer ultérieurement."
          );
        }
      } else {
        setError(
          "Une erreur inattendue est survenue. Veuillez réessayer ultérieurement."
        );
      }
    }

    setAnchorEl(inputRef.current);
  };

  useEffect(() => {
    // todo: fetch data from api
  }, [debouncedValue]);

  return (
    <AppBar
      position="sticky"
      sx={{
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
            <IconButton
              size="large"
              edge="start"
              sx={{ mr: 2 }}
              onClick={handleClickOnHistoryIcon}
            >
              <HistoryIcon />
            </IconButton>
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
            <IconButton
              size="large"
              edge="start"
              sx={{ ml: 2 }}
              onClick={handleClickOnGeoIcon}
            >
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
            {error ? (
              <Box sx={{ p: 2, pb: 0.5 }}>
                <Typography color="text.secondary">{error}</Typography>
              </Box>
            ) : (
              <Box>
                {cities && (
                  <Box>
                    <Box sx={{ p: 2, pb: 0.5 }}>
                      {cities.map((result, index) => (
                        <MenuItem
                          id={`city-${index}`}
                          key={index}
                          onClick={handleClickOnMenuItem}
                          sx={{ typography: "body2" }}
                        >
                          <GeoIcon />
                          <Box ml={2}>
                            <Typography
                              variant="subtitle1"
                              color="text.primary"
                            >
                              {result.name}
                            </Typography>
                            <Typography
                              variant="inherit"
                              color="text.secondary"
                            >
                              {`${result.state}, ${result.country}`}
                            </Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    {history.length > 0 && (
                      <Box sx={{ p: 2, pb: 0.5 }}>
                        {history.map((result, index) => (
                          <MenuItem
                            id={`history-${index}`}
                            key={index}
                            onClick={handleClickOnMenuItem}
                            sx={{ typography: "body2" }}
                          >
                            <GeoIcon />
                            <Box ml={2}>
                              <Typography
                                variant="subtitle1"
                                color="text.primary"
                              >
                                {result.name}
                              </Typography>
                              <Typography
                                variant="inherit"
                                color="text.secondary"
                              >
                                {`${result.state}, ${result.country}`}
                              </Typography>
                            </Box>
                          </MenuItem>
                        ))}
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            )}
          </Menu>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default SearchBar;
