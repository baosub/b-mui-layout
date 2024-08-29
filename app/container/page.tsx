import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FluidContainer from './containercomponents/FluidContainer'
import FixedContainer from './containercomponents/FixedContainer'


const page = () => {
  return (
    <Box>
        <Typography variant='h2'> Container</Typography>
        <Typography>The container centers your content horizontally. It's the most basic layout element.</Typography>
        <FluidContainer/>
        <FixedContainer/>
      
    </Box>
  )
}

export default page
