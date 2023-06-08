import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { forecastState } from "../state/weather";
import { convertTemperatureBasedOnUnits, getTimeByLocale } from "../utils";
import WeatherIcon from "./WeatherIcon";

type TodaySectionProps = {
  // props
};

const TodaySection: React.FC<TodaySectionProps> = () => {
  const getForecast = useRecoilValue<Forecast>(forecastState);
  const { list } = getForecast;

  const today = list.slice(1, 9);

  return (
    <Grid item xs={12} component="section">
      <Typography color="text.secondary">Today</Typography>
      <Grid container spacing={2} columns={16} my={1}>
        {today.map((item) => (
          <Grid item xs={4} sm={2} key={item.dt}>
            <Card>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                >
                  <Typography variant="subtitle2">
                    {getTimeByLocale(item.dt, "fr-FR")}
                  </Typography>
                  <WeatherIcon icon={item.weather[0].icon} />
                  <Typography variant="body2" fontWeight="bolder">
                    {convertTemperatureBasedOnUnits(item.main.temp, "metric")}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default TodaySection;
