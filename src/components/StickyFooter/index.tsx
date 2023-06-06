import React from "react";
import { Box } from "@mui/material";
import Copyright from "./Copyright.js";

type StickyFooterProps = {
  // todo
};

const StickyFooter: React.FC<StickyFooterProps> = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: "auto",
        textAlign: "center",
      }}
    >
      <Copyright />
    </Box>
  );
};

export default StickyFooter;
