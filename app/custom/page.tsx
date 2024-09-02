import { Typography } from '@mui/material'
import React from 'react'
import SxProp from './customcomponents/SxProp'
import StyledCustomization from './customcomponents/StyledCustomization'

const page = () => {
    return (
        <>
            <Typography variant='h2' sx={{fontWeight: 1000}}>
                How to customize
            </Typography>
            <SxProp/>
            <StyledCustomization/>

        </>
    )
}

export default page
