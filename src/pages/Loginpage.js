import { Box, Grid } from '@mui/material'
import React from 'react'
import Login from '../components/Login'



const Loginpage = () => {
  return (
    <Box
      sx={{
        paddingX: 10,
        backgroundColor: 'black'
      }}
    >
      <Grid container >
          <Login />
      </Grid>
    </Box>
  )
}

export default Loginpage