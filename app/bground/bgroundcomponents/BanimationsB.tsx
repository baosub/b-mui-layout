import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Slide } from '@mui/material';

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target); // Deja de observar una vez que la sección es visible
            }
          });
        },
        {
          threshold: 0.2, // El 20% de la sección tiene que estar visible para activar la animación
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
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
        {/* Slide de Material UI que anima cuando isVisible es true */}
        <Slide direction="up" in={isVisible} timeout={1000}>
          <Typography variant="h3" component="h2" sx={{ color: 'black' }}>
            {title}
          </Typography>
        </Slide>
      </Box>
    );
  };
  
  export default Section;
