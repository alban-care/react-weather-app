import React from "react";
import Typography from "@mui/material/Typography";

type CopyrightProps = {
  // todo
};

const Copyright: React.FC<CopyrightProps> = () => {
  return (
    <Typography variant="body2">
      {`Copyright © ${new Date().getFullYear()}`}
    </Typography>
  );
};

export default Copyright;
