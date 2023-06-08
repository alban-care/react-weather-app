import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CalendarIcon from "./Icons/CalendarIcon";
import GeoAltFill from "./Icons/GeoIcon";
import MoistureIcon from "./Icons/MoistureIcon";
import ThermometerIcon from "./Icons/ThermometerIcon";
import { blue } from "@mui/material/colors";
import { useRecoilValue } from "recoil";
import { weatherState } from "../state/weather";
import { convertTemperatureBasedOnUnits, getDateByLocale } from "../utils";
import { cityState } from "../state/city";
import WeatherIcon from "./WeatherIcon";

type NowSectionProps = {
  // todo
};

const NowSection: React.FC<NowSectionProps> = () => {
  const getWeather = useRecoilValue(weatherState);
  const getCity = useRecoilValue(cityState);

  const { dt, main, weather } = getWeather;
  const { humidity, feels_like, temp } = main;
  const { description, icon } = weather[0];

  if (!getWeather || !getCity) return <div>loading...</div>;

  return (
    <Grid item xs={12} component="section">
      <Typography color="text.secondary">Now</Typography>
      <Grid container spacing={2} my={1}>
        <Grid item xs={12} sm={9}>
          <Card>
            <CardContent>
              <Box display="flex" flexDirection="column">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mb={2}
                >
                  <WeatherIcon icon={icon} width={128} />
                  <Typography variant="h6" mt={2}>
                    {description}
                  </Typography>
                  <Typography variant="h4" mt={2}>
                    {convertTemperatureBasedOnUnits(temp, "metric")}
                  </Typography>
                </Box>
                <Divider />
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mt={2}
                >
                  <Box display="flex" alignItems="center">
                    <CalendarIcon />
                    <Typography variant="h6" m={1}>
                      {getDateByLocale(dt, "fr-FR")}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <GeoAltFill />
                    <Typography variant="h6" m={1}>
                      {`${getCity.name}, ${getCity.state}, ${getCity.country}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} display="flex">
          <Box
            display="flex"
            flexDirection={{ xs: "row", sm: "column" }}
            justifyContent="space-between"
            flexGrow={1}
          >
            <Card sx={{ minWidth: "48%" }}>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                >
                  <Typography variant="h6" mb={2}>
                    Humidity
                  </Typography>
                  <Typography display="flex" alignItems={"center"} p={1}>
                    <MoistureIcon sx={{ fontSize: 40, color: blue[300] }} />
                  </Typography>
                  <Typography variant="h6" mt={2} fontWeight="bolder">
                    {`${humidity}%`}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: "48%" }}>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                >
                  <Typography variant="h6" mb={2}>
                    Feels Like
                  </Typography>
                  <Typography display="flex" alignItems={"center"} p={1}>
                    <ThermometerIcon sx={{ fontSize: 40 }} />
                  </Typography>
                  <Typography variant="h6" mt={2} fontWeight="bolder">
                    {convertTemperatureBasedOnUnits(feels_like, "metric")}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NowSection;
