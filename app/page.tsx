import { Button, Typography } from '@mui/material'
import React from 'react'
import BoxBasic from './boxcomponents/BoxBasic'
import BoxSx from './boxcomponents/BoxSx'

const page = () => {
  return (
    <div>
      page
      <Button>Hello</Button>
      <Typography variant='h2'>This is box component</Typography>
      <BoxBasic/>
      <BoxSx/>
      
    </div>
  )
}

export default page
