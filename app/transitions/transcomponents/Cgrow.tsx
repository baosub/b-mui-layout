'use client'

import React, { useState } from 'react';
import { Grow, Button, Box } from '@mui/material';

const GrowExample: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Button variant="contained" onClick={handleToggle}>
        Toggle Grow
      </Button>
      <Grow in={show}>
        <Box sx={{ width: 100, height: 100, bgcolor: 'secondary.main', mt: 2 }} />
      </Grow>
    </Box>
  );
};

export default GrowExample;