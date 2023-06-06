import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import sun from "../assets/images/01d.png";
import cloud from "../assets/images/03d.png";
import rain from "../assets/images/09d.png";
import snow from "../assets/images/13d.png";
import thunderstorm from "../assets/images/11d.png";

type ForecastCardProps = {
  // todo
};

const ForecastCard: React.FC<ForecastCardProps> = () => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={2}
          mb={2}
          direction={{ xs: "row", lg: "column" }}
          justifyContent="space-between"
          alignItems="center"
          columns={10}
        >
          <Grid item xs={10} sm={2} lg={10}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection={{ xs: "row", sm: "column", lg: "row" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "flex-start", sm: "center" }}
                flexGrow="1"
                mr={2}
                mb={{ xs: 0, sm: 2, lg: 0 }}
              >
                <Typography variant="subtitle1">Thursday</Typography>
                <Typography variant="subtitle1">2 June</Typography>
              </Box>
              <img src={sun} alt="weather icon" width={48} height={48} />
              <Typography
                variant="h6"
                ml={{ xs: 2, sm: 0, lg: 2 }}
                mt={{ xs: 0, sm: 2, lg: 0 }}
              >
                20°C
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} sm={2} lg={10}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection={{ xs: "row", sm: "column", lg: "row" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "flex-start", sm: "center" }}
                flexGrow="1"
                mr={2}
                mb={{ xs: 0, sm: 2, lg: 0 }}
              >
                <Typography variant="subtitle1">Friday</Typography>
                <Typography variant="subtitle1">3 June</Typography>
              </Box>
              <img src={cloud} alt="weather icon" width={48} height={48} />
              <Typography
                variant="h6"
                ml={{ xs: 2, sm: 0, lg: 2 }}
                mt={{ xs: 0, sm: 2, lg: 0 }}
              >
                24°C
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} sm={2} lg={10}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection={{ xs: "row", sm: "column", lg: "row" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "flex-start", sm: "center" }}
                flexGrow="1"
                mr={2}
                mb={{ xs: 0, sm: 2, lg: 0 }}
              >
                <Typography variant="subtitle1">Saturday</Typography>
                <Typography variant="subtitle1">4 June</Typography>
              </Box>
              <img src={rain} alt="weather icon" width={48} height={48} />
              <Typography
                variant="h6"
                ml={{ xs: 2, sm: 0, lg: 2 }}
                mt={{ xs: 0, sm: 2, lg: 0 }}
              >
                18°C
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} sm={2} lg={10}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection={{ xs: "row", sm: "column", lg: "row" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "flex-start", sm: "center" }}
                flexGrow="1"
                mr={2}
                mb={{ xs: 0, sm: 2, lg: 0 }}
              >
                <Typography variant="subtitle1">Sunday</Typography>
                <Typography variant="subtitle1">5 June</Typography>
              </Box>
              <img src={snow} alt="weather icon" width={48} height={48} />
              <Typography
                variant="h6"
                ml={{ xs: 2, sm: 0, lg: 2 }}
                mt={{ xs: 0, sm: 2, lg: 0 }}
              >
                15°C
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} sm={2} lg={10}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection={{ xs: "row", sm: "column", lg: "row" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "flex-start", sm: "center" }}
                flexGrow="1"
                mr={2}
                mb={{ xs: 0, sm: 2, lg: 0 }}
              >
                <Typography variant="subtitle1">Monday</Typography>
                <Typography variant="subtitle1">6 June</Typography>
              </Box>
              <img
                src={thunderstorm}
                alt="weather icon"
                width={48}
                height={48}
              />
              <Typography
                variant="h6"
                ml={{ xs: 2, sm: 0, lg: 2 }}
                mt={{ xs: 0, sm: 2, lg: 0 }}
              >
                17°C
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default ForecastCard;
