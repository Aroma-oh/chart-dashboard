const fontSize = {
  xs: '0.5rem',
  sm: '0.75rem',
  base: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
};

const colors = {
  background: '#e3e1e3',
  fontPrimary: 'black',
  fontSecondary: 'gray',
  primary: '#00a0ff',
  secondary: '#ddd',
  hover: '#00a0ff50',
} as const;

const theme = {
  fontSize,
  colors,
} as const;

export type Theme = typeof theme;
export default theme as Theme;
