import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const BoxBasic = () => {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography variant='h5' >This box renders as an html section</Typography>

      
    </Box>
  )
}

export default BoxBasic
