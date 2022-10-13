import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Home from '../components/Home'

const Homepage = () => {
  return (
    <Box
    sx={{
      paddingX: 10,
      backgroundColor: '#DF2935'
    }}
  >
    <Grid container >
       <Home/>
    </Grid>
  </Box>

  )
}

export default Homepage