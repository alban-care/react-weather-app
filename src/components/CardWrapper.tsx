import React, { ReactNode } from 'react'
import { Grid } from '@mui/material'

type CardWrapperProps = {
  children: ReactNode,
  xs: number,
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, xs }) => {
  return (
    <Grid item xs={xs}>
        {children}
    </Grid>
  )
}

export default CardWrapper