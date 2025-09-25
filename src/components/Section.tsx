import GradientText from '@/components/GradientText';
import { Box, Container, Typography } from '@mui/material';

type Props = {
  id?: string;
  title: string;
  description?: React.ReactNode; // NEW
  children: React.ReactNode;
  dense?: boolean; // optional: tighter spacing
};

export default function Section({
  id,
  title,
  description,
  children,
  dense,
}: Props) {
  return (
    <Box
      id={id}
      component="section"
      sx={{ py: dense ? { xs: 4, md: 6 } : { xs: 6, md: 8 } }}
    >
      <Container>
        <GradientText variant="h4" sx={{ mb: description ? 0.5 : 1.5 }}>
          {title}
        </GradientText>

        {description && (
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 2, maxWidth: '78ch' }}
          >
            {description}
          </Typography>
        )}

        {children}
      </Container>
    </Box>
  );
}
