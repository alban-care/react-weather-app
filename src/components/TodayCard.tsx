import React from "react";
import { Grid } from "@mui/material";
import CardWrapper from "./CardWrapper";
import SmallerCard from "./SmallerCard";

type TodayCardProps = {
  // props
};

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

const TodayCard: React.FC<TodayCardProps> = () => {
  return (
    <Grid container spacing={2} my={1}>
      {today.map((item) => (
        <CardWrapper xs={3} key={item.hour}>
          <SmallerCard
            title={item.hour}
            icon={item.icon}
            value={`${item.value}${item.symbol}`}
          />
        </CardWrapper>
      ))}
    </Grid>
  );
};
export default TodayCard;
