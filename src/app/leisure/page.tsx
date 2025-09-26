'use client';
import { MusicNote, PlayArrow, VideoLibrary } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';

// Sample leisure content - you can move this to a separate file later
const leisureContent: LeisureItem[] = [
  {
    id: 'video-1',
    title: 'Morning Breakfast Routine',
    type: 'video',
    thumbnail: '/images/leisure/easy-breakfast.jpg',
    videoUrl: 'https://www.youtube.com/embed/8sV87Ag6kgo',
    externalUrl: 'https://www.youtube.com/shorts/8sV87Ag6kgo',
    description: 'A quick and easy breakfast recipe to start your day right.',
    tags: ['easy breakfast', 'curd', 'muesli', 'multi-grains'],
  },
  {
    id: 'video-2',
    title: 'Coldplay Live - Fix You',
    type: 'video',
    thumbnail: '/images/leisure/coldplay-fix-you.jpg',
    videoUrl: 'https://www.youtube.com/embed/3Cr_3QW9yCE',
    externalUrl: 'https://www.youtube.com/shorts/3Cr_3QW9yCE',
    description: 'Coldplay live in concert, performing their greatest hits.',
    tags: ['music', 'concert', 'live', 'Amsterdam'],
  },
  {
    id: 'video-3',
    title: 'Thousand Years - Guitar Intro Cover',
    type: 'video',
    thumbnail: '/images/leisure/guitar-cover.jpg',
    videoUrl: 'https://www.youtube.com/embed/KSvHqI5b3kk',
    externalUrl: 'https://www.youtube.com/watch?v=KSvHqI5b3kk',
    description:
      'An iconic guitar intro from "Thousand Years - Christina Perri".',
    tags: ['guitar', 'music', 'thousand years', 'cover'],
  },
];

type LeisureItem = {
  id: string;
  title: string;
  type: 'video' | 'playlist';
  thumbnail: string;
  videoUrl?: string;
  externalUrl?: string;
  description: string;
  tags: string[];
};

function VideoCard({ item }: { item: LeisureItem }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [embedError, setEmbedError] = useState(false);

  const handlePlay = () => {
    if (item.type === 'video' && item.videoUrl && !embedError) {
      setIsPlaying(true);
    } else if (item.externalUrl) {
      // Open in new tab if embedding fails or for playlists
      window.open(item.externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const getIcon = () => {
    switch (item.type) {
      case 'video':
        return <VideoLibrary />;
      case 'playlist':
        return <MusicNote />;
      default:
        return <PlayArrow />;
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3,
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {isPlaying && item.videoUrl && !embedError ? (
          <Box
            sx={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio
              height: 0,
            }}
          >
            <iframe
              src={item.videoUrl}
              title={item.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allowFullScreen
              onError={() => setEmbedError(true)}
            />
          </Box>
        ) : (
          <CardMedia
            component="img"
            height="200"
            image={item.thumbnail}
            alt={item.title}
            sx={{
              cursor: 'pointer',
              position: 'relative',
            }}
            onClick={handlePlay}
          />
        )}

        {!isPlaying && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '50%',
              width: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.9)',
                transform: 'translate(-50%, -50%) scale(1.1)',
              },
            }}
            onClick={handlePlay}
          >
            {getIcon()}
          </Box>
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={1}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6" component="h3" fontWeight={600}>
              {item.title}
            </Typography>
            <Chip
              label={item.type.toUpperCase()}
              size="small"
              color={item.type === 'video' ? 'primary' : 'secondary'}
            />
          </Box>

          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {item.tags.map((tag: string) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={{ fontSize: '0.75rem' }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function LeisurePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" fontWeight={800} gutterBottom>
          Leisure — Life Beyond Code
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
          Videos, music, and hobbies that fuel creativity
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}
      >
        {leisureContent.map(item => (
          <VideoCard key={item.id} item={item} />
        ))}
      </Box>

      {/* Featured Video Section */}
      <Paper
        sx={{
          mt: 6,
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Featured Content
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          A life time experience in Coldplay concert Amsterdam.
        </Typography>

        {/* Replace the videoUrl below with your actual video URL */}
        <Box
          sx={{
            position: 'relative',
            paddingTop: '56.25%', // 16:9 aspect ratio
            height: 0,
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'grey.100',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/qLBSlIvHHQc"
            title="Featured Video"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '8px',
            }}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </Box>
      </Paper>
    </Container>
  );
}
