import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Slide } from '@mui/material';

interface SectionProps {
  title: string;
  direction: 'left' | 'right'; // Solo acepta 'left' o 'right'
}

const Section: React.FC<SectionProps> = ({ title, direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        mb: 2,
      }}
    >
      <Slide direction={direction} in={isVisible} timeout={1000}>
        <Typography variant="h3" component="h2" sx={{ color: 'black' }}>
          {title}
        </Typography>
      </Slide>
    </Box>
  );
};

export default Section;