import React from 'react'
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';


const SxProp = () => {
    return (
        <><Typography variant='h3'>1.- One-off customization</Typography>
            <Typography variant='h4'>The sx prop</Typography>
            <Slider
                defaultValue={30}
                sx={{
                    width: 500,
                    color: 'success.main',
                }}
            />

            <Slider
                defaultValue={30}
                sx={{
                    width: 300,
                    color: 'success.main',
                    '& .MuiSlider-thumb': {
                        borderRadius: '4px',
                    },
                }}
            />

        </>
    )
}

export default SxProp
