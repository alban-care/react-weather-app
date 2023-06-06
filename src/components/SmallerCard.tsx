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
          <Typography variant="subtitle2" mb={2}>
            {title}
          </Typography>
          <Typography display="flex" alignItems={"center"} p={1} color="red">
            {icon}
          </Typography>
          <Typography variant="body2" mt={2} fontWeight="bolder">
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SmallerCard;
