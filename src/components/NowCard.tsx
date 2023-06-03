import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Icon from "../assets/images/01d.png";
import CalendarDateFill from "./Icons/CalendarDateFill";
import GeoAltFill from "./Icons/GeoAltFill";

type NowCardProps = {
  // todo
};

const NowCard: React.FC<NowCardProps> = () => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column">
          <img src={Icon} alt="weather icon" width={56} height={56} />
          <Typography variant="h4">20°C</Typography>
          <Typography variant="h6">Sunny</Typography>
          <hr />
          <Box display="flex" alignItems={"center"}>
            <CalendarDateFill color="#254985" size="24" />
            <Typography variant="h6" mx={1}>
              Thursday 2, June
            </Typography>
          </Box>
          <Box display="flex" alignItems={"center"}>
            <GeoAltFill color="#254985" size="24" />
            <Typography variant="h6" mx={1}>
              Austin, TX
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NowCard;
