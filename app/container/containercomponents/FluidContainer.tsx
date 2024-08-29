import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


const FluidContainer = () => {
  return (
    <>
    <Typography variant='h3'>This is a Fluid container</Typography>
    maxWidth=false & disableGutters=true
    <Container disableGutters={true} maxWidth={false}>
        <Box sx={{ bgcolor: '#008000', height: '10vh' }} />
      </Container>

without maxWidth:
    <Container>
        <Box sx={{ bgcolor: '#008000', height: '10vh' }} />
      </Container>

    maxWidth =
    sm:
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#008000', height: '10vh' }} />
      </Container>
      md:
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#008000', height: '10vh' }} />
      </Container>
      lg
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#008000', height: '10vh' }} />
      </Container>
      xl
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#008000', height: '10vh' }} />
      </Container>

    </>
  )
}

export default FluidContainer
