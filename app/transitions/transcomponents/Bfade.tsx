'use client'

import React, { useState } from 'react';
import { Fade, Button, Box } from '@mui/material';

const FadeExample: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Button variant="contained" onClick={handleToggle}>
        Toggle Fade
      </Button>
      <Fade in={show}>
        <Box sx={{ width: 100, height: 100, bgcolor: 'primary.main', mt: 2 }} />
      </Fade>
    </Box>
  );
};

export default FadeExample;
