import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const rows = [
  {
    title: 'Work',
    href: '/work',
    cover: '/images/work/work-cover.jpg',
    subtitle: 'Senior Software Engineer • Frontend Lead',
    summary:
      'Architecting scalable, high-performance web platforms from the ground up — from micro-frontend React apps and optimized Node.js backends to building an AI agent platform that automates workflows and connects tools like Slack, Google Calendar, and Angel One.',
    badge: 'work',
    cta: 'Read cases',
  },
  {
    title: 'Travel Stories',
    href: '/travel',
    cover: '/images/travel/travel-cover.jpg',
    subtitle: 'Journeys & itineraries',
    summary:
      'Stories and snapshots from my journeys across 10+ countries — from the fjords of Iceland & Norway to the Alps of Austria & Switzerland, and vibrant cultures of Vietnam, Kazakhstan, and India’s Himalayan and Northeast states.',
    badge: 'travel',
    cta: 'See travel',
  },
  {
    title: 'Leisure & Now',
    href: '/',
    cover: '/images/leisure/leisure-cover.jpg',
    subtitle: 'Music • Food • Hobbies',
    summary:
      'A peek into the things I enjoy beyond code — from guitar sessions, cooking experiments, and BBQ evenings to tennis and badminton matches.',
    badge: 'leisure',
    cta: 'Browse leisure',
  },
] as const;

type Category = 'work' | 'travel' | 'leisure';

const getCategoryChipStyles = (category: Category) => {
  const styles = {
    work: {
      bgcolor: '#eff6ff',
      color: '#1d4ed8',
      borderColor: '#bfdbfe',
    },
    travel: {
      bgcolor: '#ecfeff',
      color: '#0f766e',
      borderColor: '#99f6e4',
    },
    leisure: {
      bgcolor: '#fff7ed',
      color: '#b45309',
      borderColor: '#fde68a',
    },
  };
  return styles[category];
};

export default function ExploreRows() {
  return (
    <Stack spacing={2}>
      {rows.map((row, index) => (
        <Paper
          key={row.title}
          component={Link}
          href={row?.href}
          sx={{
            p: 0,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            minHeight: { xs: 'auto', md: 360 },
            alignItems: 'stretch',
            textDecoration: 'none',
            bgcolor: '#f9fbff',
            borderColor: '#dfe7f5',
            transition: 'all 0.2s ease',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: 2,
            },
          }}
        >
          {/* Image - alternates sides on desktop */}
          <Box
            sx={{
              order: { xs: 0, md: index % 2 ? 2 : 1 },
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: { xs: 200, md: 320 },
                width: '100%',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <Image
                src={row.cover}
                alt={row.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>

          {/* Content */}
          <Box
            sx={{
              order: { xs: 1, md: index % 2 ? 1 : 2 },
              p: 2.5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
              sx={{ mb: 0.5 }}
            >
              <Typography variant="h6" fontWeight={800}>
                {row.title}
              </Typography>
              <Chip
                label={row.badge.toUpperCase()}
                size="small"
                variant="outlined"
                sx={getCategoryChipStyles(row.badge)}
              />
            </Stack>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {row.subtitle}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 1.5,
                lineHeight: 1.5,
              }}
            >
              {row.summary}
            </Typography>

            <Chip
              label={row.cta}
              size="small"
              variant="outlined"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                borderColor: 'primary.main',
                alignSelf: 'flex-start',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            />
          </Box>
        </Paper>
      ))}
    </Stack>
  );
}
