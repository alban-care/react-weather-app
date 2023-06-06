import React, { ReactNode } from "react";
import { Grid } from "@mui/material";

type CardWrapperProps = {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  maxWidth?: string;
};

const CardWrapper: React.FC<CardWrapperProps> = (props) => {
  return (
    <Grid item {...props}>
      {props.children}
    </Grid>
  );
};

export default CardWrapper;
