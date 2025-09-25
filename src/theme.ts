import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial`,
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
  },
  shadows: [
    'none',
    '0 8px 20px rgba(0,0,0,.08)', // shadow level used on cards
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
    '0 8px 20px rgba(0,0,0,.08)',
  ],
  components: {
    MuiContainer: {
      styleOverrides: { root: { maxWidth: '1200px', paddingInline: '4vw' } },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid #d0d7e2',
          boxShadow:
            '0 1px 0 rgba(16,24,40,.02), 0 8px 24px rgba(16,24,40,.06)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 },
        containedPrimary: {
          background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)',
        },
        outlined: {
          borderColor: '#e2e8f0',
          background:
            'linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.7))',
          backdropFilter: 'blur(6px)',
          boxShadow: '0 8px 20px rgba(0,0,0,.08)',
        },
      },
      defaultProps: { disableElevation: true },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontSize: '.78rem',
          border: '1px solid #e0e0e0',
        },
        filled: { backgroundColor: '#f8fafc', color: '#475569' },
      },
      defaultProps: { size: 'small', variant: 'filled' },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(255,255,255,.85)',
          borderBottom: '1px solid #e0e0e0',
          color: '#757575',
        },
      },
      defaultProps: { elevation: 0, position: 'sticky' },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid #d0d7e2`,
          boxShadow:
            '0 1px 0 rgba(16,24,40,.02), 0 8px 24px rgba(16,24,40,.06)',
          transition:
            'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 6px 22px rgba(16,24,40,.10)',
            borderColor: '#c2cce0',
          },
        },
      },
    },
  },
});

export default theme;
