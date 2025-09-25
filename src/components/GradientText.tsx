import { Typography, TypographyProps } from '@mui/material';

export default function GradientText(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6, #ec4899)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontWeight: 800,
        letterSpacing: '.2px',
        ...props.sx,
      }}
    />
  );
}
