'use client'

import React, { useState } from 'react';
import { Slide, Button, Box } from '@mui/material';

const SlideExample: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Button variant="contained" onClick={handleToggle}>
        Toggle Slide
      </Button>
      <Slide direction="left" in={show} mountOnEnter unmountOnExit>
        <Box sx={{ width: 100, height: 100, bgcolor: 'success.main', mt: 2 }} />
      </Slide>
    </Box>
  );
};

export default SlideExample;