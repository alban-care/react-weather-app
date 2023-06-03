import React from "react";
import { Container, Grid } from "@mui/material";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Container>
  );
};

export default Wrapper;
