'use client'

import React, { useState } from 'react'
import Link from "next/link";
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';


const pages = [
    { title: 'BoxMUI', path: '/' },
    { title: 'Container', path: '/container' },
    { title: 'Grid', path: '/grid' },
    { title: 'Stack', path: '/stack' },
    { title: 'BoxSx', path: '/box-sx-property' },
    {title: 'Customization', path: '/custom'},
    {title:'Typography', path: '/typo'},
    {title: 'BackGrounds', path: '/bground'},
    {title: 'Transitions', path: '/transitions'},
    

];


const NavBar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);
    return (
        <Box sx={{height: '50px'}}>
            {open ? (<Box sx={{ width: '100vw', height: '100vh', bgcolor: 'grey', position: 'absolute' }} >
                <Box>
                    <button onClick={toggleMenu}>cerrar</button>
                </Box>
                <Box sx={{ width: 1, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>   {
                        pages.map((page) => (
                            <Box
                                component={Link} onClick={toggleMenu}
                                href={page.path} key={page.title} passHref
                                sx={{
                                    bgcolor: pathname === page.path ? 'black' : 'white',
                                    color: pathname === page.path ? 'white' : 'pink',
                                    marginRight: 2,
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: 'yellow',
                                    }, textAlign: 'center'
                                }}>
                                {page.title}
                            </Box>
                        ))
                    }  </Box>
                </Box>
            </Box>) : (<><button onClick={toggleMenu}>botton para desplegar el menu</button></>)}
        </Box>
    )
}

export default NavBar