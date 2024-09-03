import { Typography } from '@mui/material'
import React from 'react'


const BtypoProperties = () => {
    return (
        <>
            <Typography variant='h3' gutterBottom>These are some properties of the component typography</Typography>
            <Typography variant='body1' align="center">Texto centrado, las propiedades de align son: inherit, left, center, right, justify</Typography>
            <Typography paragraph>Este es un párrafo de texto.</Typography>
            <Typography sx={{ lineHeight:1.5  }}>
                Texto con altura de línea ajustada.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>

            <Typography sx={{ marginLeft: 2 }}>
                Mui no tienen sangria pero se puede usar a traves de sx prop
                marginLeft.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>



            <Typography sx={{ margin: '16px', padding: '8x', textAlign: 'justify' }}>
                Css props personalizadas por sx prop
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>

        </>
    )
}

export default BtypoProperties
