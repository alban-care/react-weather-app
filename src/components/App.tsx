import { Box, Container, Grid, Typography } from "@mui/material";
import ForecastSection from "./ForecastSection";
import NavBar from "./NavBar";
import NowSection from "./NowSection";
import StickyFooter from "./StickyFooter";
import TodaySection from "./TodaySection";
import { useRecoilValue } from "recoil";
import { weatherState } from "../state/weather";
import { cityState } from "../state/city";

type AppProps = {
  // props
};

const App: React.FC<AppProps> = () => {
  const weather = useRecoilValue(weatherState);
  const getCityState = useRecoilValue(cityState);

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
            {weather ? (
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
                <pre>{JSON.stringify(getCityState, null, 2)}</pre>
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
