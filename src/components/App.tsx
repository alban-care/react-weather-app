import { Box, Container, Grid } from "@mui/material";
import ForecastSection from "./ForecastSection";
import NavBar from "./NavBar";
import NowSection from "./NowSection";
import StickyFooter from "./StickyFooter";
import TodaySection from "./TodaySection";

type AppProps = {
  // props
};

const App: React.FC<AppProps> = () => {
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
            <NowSection />
            <TodaySection />
            <ForecastSection />
          </Grid>
        </Container>
      </Box>
      <StickyFooter />
    </Box>
  );
};

export default App;
