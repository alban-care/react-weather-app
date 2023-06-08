import { Box, Container, Grid, Typography } from "@mui/material";
import ForecastSection from "./ForecastSection";
import NavBar from "./NavBar";
import NowSection from "./NowSection";
import StickyFooter from "./StickyFooter";
import TodaySection from "./TodaySection";
import { useRecoilValue, useRecoilState } from "recoil";
import { weatherState, forecastState } from "../state/weather";
import { cityState } from "../state/city";
import { useEffect } from "react";
import { getForecastByCoordinate, getWeatherByCoordinate } from "../api";

type AppProps = {
  // props
};

const App: React.FC<AppProps> = () => {
  const [weather, setWeather] = useRecoilState(weatherState);
  const [forecast, setForecast] = useRecoilState(forecastState);
  const getCityState = useRecoilValue(cityState);

  useEffect(() => {
    if (getCityState) {
      const { lat, lon } = getCityState;
      getWeatherByCoordinate(lat, lon).then((data) => {
        setWeather(data);
      });
      getForecastByCoordinate(lat, lon).then((data) => {
        setForecast(data);
      });
    }
  }, [getCityState, setWeather, setForecast]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        flexGrow: 1,
      }}
    >
      <NavBar />
      <Box component="main" p={2} flexGrow={1}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            {weather && forecast ? (
              <>
                <NowSection />
                <TodaySection />
                <ForecastSection />
              </>
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                mt={4}
                flexGrow={1}
              >
                <Typography variant="h1" align="center">
                  🌤
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Search for a city to get started or allow location access
                </Typography>
              </Box>
            )}
          </Grid>
        </Container>
      </Box>
      <StickyFooter />
    </Box>
  );
};

export default App;
