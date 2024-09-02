import { Typography } from '@mui/material'
import React from 'react'
import SxProp from './customcomponents/SxProp'

const page = () => {
    return (
        <>
            <Typography variant='h2' sx={{fontWeight: 1000}}>
                How to customize
            </Typography>
            <SxProp/>

        </>
    )
}

export default page
