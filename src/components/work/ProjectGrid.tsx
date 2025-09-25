'use client';
import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  title: string;
  slug: string;
  cover: string;
  summary: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: 'Docs Sync Tool',
    slug: 'docs-sync',
    cover: '/images/work/docs-sync.jpg',
    summary: 'CLI + server to sync docs between providers with rules.',
    stack: ['Node', 'TypeScript', 'CLI'],
  },
  {
    title: 'Email Parser',
    slug: 'email-parser',
    cover: '/images/work/email-parser.jpg',
    summary: 'Extracts structured data from transactional emails.',
    stack: ['Node', 'Cheerio'],
  },
  {
    title: 'Static Site Engine',
    slug: 'static-engine',
    cover: '/images/work/static.jpg',
    summary: 'Markdown to static site with extensible plugins.',
    stack: ['Next.js'],
  },
  // add more...
];

export default function ProjectGrid() {
  return (
    <Box
      id="projects"
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        },
        gap: 3,
      }}
    >
      {projects.map(p => (
        <Paper
          key={p.slug}
          component={Link}
          href={`/work/${p.slug}`}
          sx={{
            textDecoration: 'none',
            overflow: 'hidden',
            transition: 'transform .15s ease, box-shadow .2s ease',
            '&:hover': { transform: 'translateY(-3px)', boxShadow: 3 },
          }}
        >
          <Box
            sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}
          >
            <Image
              src={p.cover}
              alt={p.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight={700}>
              {p.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {p.summary}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {p.stack.map(s => (
                <Chip key={s} label={s} size="small" variant="outlined" />
              ))}
            </Stack>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
