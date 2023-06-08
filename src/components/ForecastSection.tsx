import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import { useRecoilValue } from "recoil";
import { forecastState } from "../state/weather";
import { convertTemperatureBasedOnUnits, getDateByLocale } from "../utils";

type ForecastSectionProps = {
  // todo
};

const ForecastSection: React.FC<ForecastSectionProps> = () => {
  const getForecast = useRecoilValue<Forecast>(forecastState);
  const { list } = getForecast;

  const data = list.filter(
    (item, index) => index % 8 === 0 && Object.keys(item).length !== 0
  );

  return (
    <Grid item xs={12} component="section">
      <Typography color="text.secondary">Forecast</Typography>
      <Card sx={{ marginTop: "1.5rem" }}>
        <CardContent>
          <Grid container spacing={2} columns={10}>
            {data.map((item, index) => (
              <Grid item xs={10} sm={2} key={index}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection={{ xs: "row", sm: "column" }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    mb={1}
                    mr={{ xs: 4, sm: 0 }}
                  >
                    <Typography variant="subtitle1">
                      {getDateByLocale(item.dt, "fr-FR", {
                        weekday: "long",
                        year: undefined,
                        month: undefined,
                        day: undefined,
                        timeZone: "UTC",
                      })}
                    </Typography>
                    <Typography variant="subtitle1">
                      {getDateByLocale(item.dt, "fr-FR", {
                        weekday: undefined,
                        year: undefined,
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC",
                      })}
                    </Typography>
                  </Box>
                  <WeatherIcon icon={item.weather[0].icon} />
                  <Typography variant="h6" mt={1} ml={{ xs: 4, sm: 0 }}>
                    {convertTemperatureBasedOnUnits(item.main.temp, "metric")}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default ForecastSection;
