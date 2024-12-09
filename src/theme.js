import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul como color principal
    },
    secondary: {
      main: '#d32f2f', // Rojo como color secundario
    },
    background: {
      default: '#f5f5f5', // Fondo general
      paper: '#ffffff', // Fondo de elementos tipo tarjeta
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
});

export default theme;
