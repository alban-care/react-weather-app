import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

type TodaySectionProps = {
  // props
};

const TodaySection: React.FC<TodaySectionProps> = () => {
  const today = [
    {
      hour: "00:00",
      icon: (
        <img src="https://via.placeholder.com/50" alt="icon" />
      ) as JSX.Element,
      value: "14",
      symbol: "°C",
    },
    {
      hour: "03:00",
      icon: (
        <img src="https://via.placeholder.com/50" alt="icon" />
      ) as JSX.Element,
      value: "14",
      symbol: "°C",
    },
    {
      hour: "06:00",
      icon: (
        <img src="https://via.placeholder.com/50" alt="icon" />
      ) as JSX.Element,
      value: "17",
      symbol: "°C",
    },
    {
      hour: "09:00",
      icon: (
        <img src="https://via.placeholder.com/50" alt="icon" />
      ) as JSX.Element,
      value: "25",
      symbol: "°C",
    },
    {
      hour: "12:00",
      icon: (
        <img src="https://via.placeholder.com/50" alt="icon" />
      ) as JSX.Element,
      value: "30",
      symbol: "°C",
    },
    {
      hour: "15:00",
      icon: (
        <img src="https://via.placeholder.com/50" alt="icon" />
      ) as JSX.Element,
      value: "35",
      symbol: "°C",
    },
    {
      hour: "18:00",
      icon: (
        <img src="https://via.placeholder.com/50" alt="icon" />
      ) as JSX.Element,
      value: "24",
      symbol: "°C",
    },
    {
      hour: "21:00",
      icon: (
        <img src="https://via.placeholder.com/50" alt="icon" />
      ) as JSX.Element,
      value: "18",
      symbol: "°C",
    },
  ];

  return (
    <Grid item xs={12} component="section">
      <Typography color="text.secondary">Today</Typography>
      <Grid container spacing={2} columns={16} my={1}>
        {today.map((item) => (
          <Grid item xs={4} sm={2} key={item.hour}>
            <Card>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                >
                  <Typography variant="subtitle2">{item.hour}</Typography>
                  <Typography
                    display="flex"
                    alignItems={"center"}
                    p={1}
                    color="red"
                  >
                    {item.icon}
                  </Typography>
                  <Typography variant="body2" fontWeight="bolder">
                    {`${item.value}${item.symbol}`}
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
