'use client'
import React, { useState } from 'react';
import { Box, Button, Collapse, Typography } from '@mui/material';



const Acollapse = () => {
    const [open, setOpen] = useState(false); // Estado para controlar el colapso
  
    const handleToggle = () => {
      setOpen(!open); // Alterna entre expandido y colapsado
    };
  
    return (
      <Box sx={{ width: 300, margin: 'auto', textAlign: 'center', mt: 5 }}>
        {/* Botón para alternar el colapso */}
        <Button variant="contained" onClick={handleToggle}>
          {open ? 'Hide Details' : 'Show Details'}
        </Button>
  
        {/* Contenido que colapsa o se expande */}
        <Collapse in={open}>
          <Box sx={{ mt: 2, p: 2, border: '1px solid black', borderRadius: 1 }}>
            <Typography variant="body1">
              This is the hidden content that you can show or hide using the Collapse component.
            </Typography>
          </Box>
        </Collapse>
      </Box>
    );
  };
  
  export default Acollapse;