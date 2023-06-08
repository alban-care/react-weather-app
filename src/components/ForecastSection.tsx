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

  const getMinMaxTemperature = (list: Forecast["list"]) => {
    type GetMinMaxTemperature = {
      dt_txt: string;
      temp_min: number | undefined;
      temp_max: number | undefined;
    };

    let min: number | undefined;
    let max: number | undefined;
    let currentDay: string;
    let nextDay: string;
    const data: GetMinMaxTemperature[] = [];
    list.forEach((item, index) => {
      currentDay = item.dt_txt.split(" ")[0];
      nextDay = list[index + 1]?.dt_txt.split(" ")[0];
      if (currentDay === nextDay) {
        if (min === undefined || min > item.main.temp_min) {
          min = item.main.temp_min;
        }
        if (max === undefined || max < item.main.temp_max) {
          max = item.main.temp_max;
        }
      } else {
        data.push({
          dt_txt: currentDay,
          temp_min: min,
          temp_max: max,
        });

        min = undefined;
        max = undefined;
      }
    });
    return data;
  };

  const minMaxTemperature = getMinMaxTemperature(list);

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
                    mb={2}
                    mr={{ xs: 4, sm: 0 }}
                  >
                    <Typography variant="h5">
                      {getDateByLocale(item.dt, "fr-FR", {
                        weekday: "long",
                        year: undefined,
                        month: undefined,
                        day: undefined,
                        timeZone: "UTC",
                      })}
                    </Typography>
                    <Typography variant="h5">
                      {getDateByLocale(item.dt, "fr-FR", {
                        weekday: undefined,
                        year: undefined,
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC",
                      })}
                    </Typography>
                  </Box>
                  <WeatherIcon icon={item.weather[0].icon} width={64} />
                  <Typography variant="h4" mt={2} ml={{ xs: 4, sm: 0 }}>
                    {convertTemperatureBasedOnUnits(item.main.temp, "metric")}
                  </Typography>
                  {minMaxTemperature.map((data, index) => (
                    <React.Fragment key={index}>
                      {data.dt_txt === item.dt_txt.split(" ")[0] &&
                        data.temp_min &&
                        data.temp_max && (
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems={{ xs: "flex-start", sm: "center" }}
                            mb={1}
                            mr={{ xs: 4, sm: 0 }}
                          >
                            <Typography variant="body2">
                              min{" "}
                              {convertTemperatureBasedOnUnits(
                                data.temp_min,
                                "metric"
                              )}
                            </Typography>
                            <Typography variant="body2">
                              max{" "}
                              {convertTemperatureBasedOnUnits(
                                data.temp_max,
                                "metric"
                              )}
                            </Typography>
                          </Box>
                        )}
                    </React.Fragment>
                  ))}
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
