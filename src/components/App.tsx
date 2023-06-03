import NavBar from "./NavBar";
import StickyFooter from "./StickyFooter";
import { Box, Grid, Typography } from "@mui/material";
import NowCard from "./NowCard";
import Wrapper from "./Wrapper";
import CardWrapper from "./CardWrapper";
import SmallerCard from "./SmallerCard";
import Moisture from "./Icons/Moisture";
import ThermometerSun from "./Icons/ThermometerSun";

function App() {
  const humidity = {
    title: "Humidity",
    icon: <Moisture size="2rem" />,
    value: "50",
    Symbol: "%",
  };

  const feelsLike = {
    title: "Feels Like",
    icon: <ThermometerSun size="2rem" />,
    value: "30",
    Symbol: "°C",
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
          <CardWrapper xs={4}>
            <Typography color="text.secondary">Now</Typography>
            <NowCard />
            <Grid container spacing={2} my={1}>
              <CardWrapper xs={6}>
                <SmallerCard
                  title={humidity.title}
                  icon={humidity.icon}
                  value={`${humidity.value}${humidity.Symbol}`}
                />
              </CardWrapper>
              <CardWrapper xs={6}>
                <SmallerCard
                  title={feelsLike.title}
                  icon={feelsLike.icon}
                  value={`${feelsLike.value}${feelsLike.Symbol}`}
                />
              </CardWrapper>
            </Grid>
          </CardWrapper>
          <CardWrapper xs={4}>
            <NowCard />
          </CardWrapper>
          <CardWrapper xs={4}>
            <NowCard />
          </CardWrapper>
        </Wrapper>
      </Box>
      <StickyFooter />
    </Box>
  );
}

export default App;
