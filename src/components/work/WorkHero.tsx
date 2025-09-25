'use client';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';

export default function WorkHero() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Stack spacing={1.5} sx={{ maxWidth: '82ch' }}>
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ letterSpacing: '-.01em' }}
          >
            Work Experience
          </Typography>
          <Typography color="text.secondary">
            A showcase of the products, platforms, and AI agents I’ve built —
            solving real problems with thoughtful design and scalable code.
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 0.5 }}
            flexWrap="wrap"
            useFlexGap
          >
            <Chip label="Full-Stack" size="small" />
            <Chip label="React/Next.js" size="small" />
            <Chip label="Node/TypeScript" size="small" />
            <Chip label="AI Agents" size="small" />
          </Stack>
          <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
            <Button href="/about" variant="contained">
              Let’s Work Together
            </Button>
            {/* <Button href="/work#projects" variant="outlined">
              Browse All
            </Button> */}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
