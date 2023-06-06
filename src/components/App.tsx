import NavBar from "./NavBar";
import StickyFooter from "./StickyFooter";
import { Box, Grid, Typography } from "@mui/material";
import NowCard from "./NowCard";
import Wrapper from "./Wrapper";
import CardWrapper from "./CardWrapper";
import SmallerCard from "./SmallerCard";
import Moisture from "./Icons/Moisture";
import ThermometerIcon from "./Icons/ThermometerIcon";
import ForecastCard from "./ForecastCard";
import TodayCard from "./TodayCard";

function App() {
  const humidity = {
    title: "Humidity",
    icon: <Moisture fontSize="medium" color="primary" />,
    value: "50",
    symbol: "%",
  };

  const feelsLike = {
    title: "Feels Like",
    icon: <ThermometerIcon fontSize="medium" color="primary" />,
    value: "30",
    symbol: "°C",
  };

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
        <Wrapper>
          <CardWrapper xs={12} sm={6} lg={3} maxWidth="360px">
            <Typography color="text.secondary" mb={3}>
              Now
            </Typography>
            <NowCard />
            <Grid container spacing={2} my={1}>
              <CardWrapper xs={6}>
                <SmallerCard
                  title={humidity.title}
                  icon={humidity.icon}
                  value={`${humidity.value}${humidity.symbol}`}
                />
              </CardWrapper>
              <CardWrapper xs={6}>
                <SmallerCard
                  title={feelsLike.title}
                  icon={feelsLike.icon}
                  value={`${feelsLike.value}${feelsLike.symbol}`}
                />
              </CardWrapper>
            </Grid>
          </CardWrapper>
          <CardWrapper xs={12} sm={6}>
            <Typography color="text.secondary">Today</Typography>
            <TodayCard />
          </CardWrapper>
          <CardWrapper xs={12} lg={3} maxWidth="360px">
            <Typography color="text.secondary" mb={3}>
              Forecast
            </Typography>
            <ForecastCard />
          </CardWrapper>
        </Wrapper>
      </Box>
      <StickyFooter />
    </Box>
  );
}

export default App;
