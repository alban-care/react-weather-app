import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

type SmallerCardProps = {
  title: string;
  icon: React.ReactNode;
  value: string;
};

const SmallerCard: React.FC<SmallerCardProps> = ({ title, icon, value }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems={"center"}>
          <Typography variant="h6" mb={2}>
            {title}
          </Typography>
          <Box display="flex" alignItems={"center"} p={1} color="inherit">
            {icon}
          </Box>
          <Typography variant="h4" mt={2}>
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SmallerCard;
