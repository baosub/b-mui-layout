'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AdoubleImage from './bgroundcomponents/AdoubleImage';






const page = () => {
    return (

        <>
        <Box

//To fix the issue of the bar and avoid the ooverflow do this:
//minHeight: 'calc(100vh - barSize)'
sx={{

    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    backgroundImage: 'url(/images/estrella.svg)',
    backgroundSize: '400px 400px', // Tamaño específico de la imagen
    backgroundPosition: 'left center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
}}
>
<Box
    sx={{
       
        width: '100%',
        minHeight: 'calc(100vh - 50px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '8px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    }}
>
    <Typography variant="h2" align="center" gutterBottom>
        ¡Bienvenido!
    </Typography>
    <Typography variant="body1" align="center">
        Esta es tu página de bienvenida con un fondo elegante y un diseño minimalista.
    </Typography>

    {/*<img src="/images/estrella.svg" alt="background svg" /> */}
</Box>

</Box>

<AdoubleImage/>
        
        </>
        
    )
}

export default page
