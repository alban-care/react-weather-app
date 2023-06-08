import React from "react";
import { Box } from "@mui/material";

type WeatherIconProps = {
  icon: string;
  width?: number;
  height?: number;
};

const WeatherIcon: React.FC<WeatherIconProps> = ({
  icon,
  width = 56,
  height = 56,
}) => {
  const url = `../public/assets/images/${icon}.png`;

  if (!url)
    return (
      <Box width={width} height={height}>
        ...loading
      </Box>
    );

  return (
    <Box
      width={width}
      height={height}
      sx={{
        background: `no-repeat url(../public/assets/images/${icon}.png) center center / contain`,
      }}
    />
  );
};
export default WeatherIcon;
