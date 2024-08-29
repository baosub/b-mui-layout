import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const FixedContainer = () => {
  return (
    
     <>
    <Typography variant='h3'>This is a Fixed container</Typography>

    maxWidth =
    sm:
      <Container fixed maxWidth="sm">
        <Box sx={{ bgcolor: '#FF0000', height: '10vh' }} />
      </Container>
      md:
      <Container fixed maxWidth="md">
        <Box sx={{ bgcolor: '#FF0000', height: '10vh' }} />
      </Container>
      lg
      <Container fixed maxWidth="lg">
        <Box sx={{ bgcolor: '#FF0000', height: '10vh' }} />
      </Container>
      xl
      <Container fixed maxWidth="xl">
        <Box sx={{ bgcolor: '#FF0000', height: '10vh' }} />
      </Container>

    </>
      
    
  )
}

export default FixedContainer
