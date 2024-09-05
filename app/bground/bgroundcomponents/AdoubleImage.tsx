
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/system';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const AdoubleImage = () => {
  return (
    <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative', // Posicionamiento relativo para el contenedor principal
                overflow: 'hidden', // Para evitar overflow causado por el SVG rotatorio
            }}
        >
            {/* Imagen de fondo fija en la izquierda */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    transform: 'translateY(-50%)',
                    width: '400px',
                    height: '400px',
                    backgroundImage: 'url(/images/degradado.svg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Imagen de fondo rotatoria en la parte superior derecha */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '800px', // Ajusta el tamaño según tus necesidades
                    height: '800px',
                    backgroundImage: 'url(/images/caracolito.svg)', // Reemplaza con tu archivo SVG rotatorio
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    animation: `${rotateAnimation} 10s linear infinite`, // Aplica la animación de rotación
                }}
            />

            {/* Contenido principal */}
            <Box
                sx={{
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'rgba(255, 255, 255, .6)',
                    borderRadius: '8px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    zIndex: 1, // Asegura que el contenido esté sobre la imagen de fondo
                }}
            >


                <Typography variant="h2" align="center" gutterBottom>
                    ¡Bienvenido!
                </Typography>
                <Typography variant="body1" align="center">
                    Esta es tu página de bienvenida con un fondo elegante y un diseño minimalista.
                </Typography>



                <Box sx={{ textAlign: 'center', marginTop: '50px', position: 'relative' }}>
    <Typography
      variant="h1"
      sx={{
        background: 'linear-gradient(90deg, #000000, #333333)', // Gradiente de negro a gris oscuro
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent', // Esto hace que el gradiente se aplique solo al texto
        fontWeight: 'bold',
      }}
    >
      Elegancia Minimalista
    </Typography>
  </Box>

               
            </Box>
        </Box>
  )
}

export default AdoubleImage
