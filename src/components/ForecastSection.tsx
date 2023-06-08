import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import WeatherIcon from "./WeatherIcon";

type ForecastSectionProps = {
  // todo
};

const ForecastSection: React.FC<ForecastSectionProps> = () => {
  const data = [
    {
      day: "Thursday",
      date: "2",
      month: "June",
      icon: "01d",
      temp: "20°C",
    },
    {
      day: "Friday",
      date: "3",
      month: "June",
      icon: "03d",
      temp: "24°C",
    },
    {
      day: "Saturday",
      date: "4",
      month: "June",
      icon: "09d",
      temp: "18°C",
    },
    {
      day: "Sunday",
      date: "5",
      month: "June",
      icon: "13d",
      temp: "12°C",
    },
    {
      day: "Monday",
      date: "6",
      month: "June",
      icon: "11d",
      temp: "16°C",
    },
  ];

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
                    <Typography variant="subtitle1">{item.day}</Typography>
                    <Typography variant="subtitle1">
                      {`${item.date} ${item.month}`}
                    </Typography>
                  </Box>
                  <WeatherIcon icon={item.icon} />
                  <Typography variant="h6" mt={1} ml={{ xs: 4, sm: 0 }}>
                    {item.temp}
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
