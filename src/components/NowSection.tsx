import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Icon from "../assets/images/01d.png";
import CalendarIcon from "./Icons/CalendarIcon";
import GeoAltFill from "./Icons/GeoIcon";
import MoistureIcon from "./Icons/MoistureIcon";
import ThermometerIcon from "./Icons/ThermometerIcon";
import { blue } from "@mui/material/colors";

type NowSectionProps = {
  // todo
};

const NowSection: React.FC<NowSectionProps> = () => {
  const humidity = {
    title: "Humidity",
    icon: <MoistureIcon />,
    value: "50",
    symbol: "%",
  };

  const feelsLike = {
    title: "Feels Like",
    icon: <ThermometerIcon />,
    value: "30",
    symbol: "°C",
  };

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
                  <img src={Icon} alt="weather icon" width={56} height={56} />
                  <Typography variant="h6" mt={2}>
                    Sunny
                  </Typography>
                  <Typography variant="h4" mt={2}>
                    20°C
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
                      Thursday 2, June
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <GeoAltFill />
                    <Typography variant="h6" m={1}>
                      Austin, TX
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
                  <Typography variant="subtitle2" mb={2}>
                    {humidity.title}
                  </Typography>
                  <Typography
                    display="flex"
                    alignItems={"center"}
                    p={1}
                    color={blue[300]}
                  >
                    {humidity.icon}
                  </Typography>
                  <Typography variant="body2" mt={2} fontWeight="bolder">
                    {`${humidity.value}${humidity.symbol}`}
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
                  <Typography variant="subtitle2" mb={2}>
                    {feelsLike.title}
                  </Typography>
                  <Typography display="flex" alignItems={"center"} p={1}>
                    {feelsLike.icon}
                  </Typography>
                  <Typography variant="body2" mt={2} fontWeight="bolder">
                    {`${feelsLike.value}${feelsLike.symbol}`}
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
