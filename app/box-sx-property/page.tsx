'use client'

import { Typography } from '@mui/material'
import React from 'react'
import Box, { BoxProps } from '@mui/material/Box';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

const page = () => {
  return (
    <>
    <Typography variant='h2'>This is Box Component with sx property (flex box)</Typography>

    <div style={{ width: '100%' }}>

        <Box sx={{display: "flex", flexDirection: "column"}}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>




        </Box>







    </div>
      
    </>
  )
}

export default page
