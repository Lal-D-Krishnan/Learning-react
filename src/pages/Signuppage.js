import { Box, Grid } from '@mui/material';
import React from 'react'
import Signup from '../components/Signup'

const Signuppage = () => {
  return (
    <Box
    sx={{
      paddingX: 10,
      backgroundColor: 'black'
    }}
  >
    <Grid container >
    <Signup/>
    </Grid>
</Box>
  )
}

export default Signuppage;