'use client';
import { stories } from '@/lib/travel';
import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function StoryTimeline() {
  // Group by year
  const years = [...new Set(stories.map(s => s.year))].sort((a, b) => b - a);

  return (
    <Box id="stories" sx={{ display: 'grid', gap: 3 }}>
      {years.map(y => (
        <Box key={y} sx={{ display: 'grid', gap: 2 }}>
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            {y}
          </Typography>

          {stories
            .filter(s => s.year === y)
            .map(s => (
              <Paper
                key={s.id}
                component={Link}
                href={`/travel/${s.slug}`}
                sx={{
                  p: 2.5,
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '360px 1fr' },
                  gap: 2.25,
                  alignItems: 'center',
                  textDecoration: 'none',
                  bgcolor: '#ffffff',
                  borderColor: '#e2e8f0',
                  transition: 'transform .15s ease, box-shadow .2s ease',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: 2 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={s.cover}
                    alt={s.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>

                <Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mb: 0.5 }}
                  >
                    <Typography variant="h6" fontWeight={800}>
                      {s.title}
                    </Typography>
                    <Chip label={s.country} size="small" />
                  </Stack>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {s.teaser}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {s.tags.map(t => (
                      <Chip key={t} label={t} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </Box>
              </Paper>
            ))}
        </Box>
      ))}
    </Box>
  );
}
