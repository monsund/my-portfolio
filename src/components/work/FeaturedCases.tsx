'use client';
import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type CaseItem = {
  title: string;
  slug: string;
  cover: string;
  role: string;
  period?: string;
  summary: string;
  stack: string[];
  cta?: string;
  ctaLink?: string;
  ui?: string;
  uiLink?: string;
};

const featured: CaseItem[] = [
  {
    title: 'StockPilot — AI Trading Agent',
    slug: 'stockpilot-ai-trading-agent',
    cover: '/images/work/stockpilot.jpg',
    role: 'Product Builder · Full-Stack',
    // period: '2024',
    summary:
      'Modular agent platform (MCP + SLM) that automates trade research and execution. Robust tool orchestration and observability.',
    stack: ['Next.js', 'Node', 'FastAPI', 'MCP', 'AI Agents', 'SLM'],
    cta: 'GitHub Repo',
    ctaLink: 'https://github.com/monsund/stock-pilot',
    ui: 'UI Link',
    uiLink: 'https://stock-pilot-frontend.vercel.app/',
  },
  {
    title: 'Pendo — Property Management Platform',
    slug: 'property-management-platform',
    cover: '/images/work/pendo-platform.gif',
    role: 'Fullstack Engineer',
    // period: '2022–23',
    summary:
      'A full-featured rental management platform that streamlines every stage of property operations — from online applications and tenant screening to digital lease signing, automated rent collection, inspections, financial tracking, and property listings. Platform processes $2M+/month in transactions.',
    stack: [
      'React.js',
      'Node.js',
      'Express',
      'MongoDB',
      'AWS SQS',
      'Redis',
      'Mandril',
      'Microservices',
    ],
    cta: 'Private project - Canadian client',
  },
  {
    title: 'Panasonic BatteryOps — Workflow Streamlining Platform',
    slug: 'panasonic-batteryops',
    cover: '/images/work/panasonic.gif',
    role: 'Frontend Engineer · Lead',
    // period: '2021',
    summary:
      'This platform is designed to streamline the various processes involved in a Battery Manufacturing Unit by seamlessly integrating multiple micro applications. It optimizes raw material management, maintains efficient workflows, and monitors assembly lines to ensure quality control at every stage. The platform facilitates real-time inventory tracking, automates order processing, and enhances supply chain coordination, significantly improving operational efficiency and productivity.',
    stack: [
      'React.js',
      'Module Federation',
      'Postgres',
      'Kafka',
      'Storybook',
      'Microservices',
    ],
    cta: 'Private project - Panasonic US',
  },
  {
    title: 'Contract Abstraction Tool',
    slug: 'contract-abstraction-tool',
    cover: '/images/work/contract-abstraction.gif',
    role: 'Fullstack Engineer',
    // period: '2021',
    summary:
      "This tool is designed to extract key information from any contract efficiently. With an integrated Machine Learning interface for document classification and clustering, the tool's efficiency and functionality are significantly enhanced. This advanced feature allows for precise organization and analysis of contract data, making it an invaluable asset for managing large volumes of legal documents.",
    stack: [
      'Node.js',
      'React.js',
      'Redux',
      'MongoDB',
      'Redis',
      'Amazon Cognito',
      'Natural Language Processing',
      'AWS',
    ],
    cta: 'Private Project - PwC',
  },
  {
    title: 'Weather Forecasting Tool',
    slug: 'weather-forecasting-tool',
    cover: '/images/work/weather-forecasting.gif',
    role: 'Fullstack Engineer',
    // period: '2021',
    summary:
      "Weather Forecaster is a powerful tool for predicting weather conditions in any location. Leveraging Accuweather's APIs, it provides accurate forecasts and displays the results with a beautiful user interface. The application categorizes various weather conditions such as sunny, partly cloudy, cloudy, and rainy, offering users a clear and detailed weather overview.",
    stack: ['Node.js', 'React.js', 'Redux', 'MongoDB'],
    cta: 'GitHub Repo',
    ctaLink: 'https://github.com/monsund/weather-forecast-app-backend',
  },
];

function CaseRow({ item, flip = false }: { item: CaseItem; flip?: boolean }) {
  return (
    <Paper
      component={Link}
      href={`/work/${item.slug}`}
      sx={{
        p: 2.5,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 3,
        alignItems: 'center',
        textDecoration: 'none',
        bgcolor: '#f9fbff',
        borderColor: '#dfe7f5',
        transition: 'transform .15s ease, box-shadow .2s ease',
        '&:hover': { transform: 'translateY(-2px)', boxShadow: 2 },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          order: { xs: 0, md: flip ? 2 : 1 },
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src={item.cover}
          alt={item.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Text */}
      <Box sx={{ order: { xs: 1, md: flip ? 1 : 2 } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 0.5 }}
        >
          <Typography variant="h6" fontWeight={800}>
            {item.title}
          </Typography>
          <Chip label="CASE" size="small" />
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          {item.role}
          {item.period ? ` • ${item.period}` : ''}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 1.25,
          }}
        >
          {item.summary}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {item.stack.map(s => (
            <Chip key={s} label={s} size="small" variant="outlined" />
          ))}
        </Stack>

        {(item.cta || item.ui) && (
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            {item.cta && (
              <Chip
                component={item.ctaLink ? Link : 'div'}
                href={item.ctaLink}
                target={item.ctaLink?.startsWith('http') ? '_blank' : undefined}
                rel={
                  item.ctaLink?.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                label={item.cta}
                size="small"
                variant="outlined"
                onClick={(e: React.MouseEvent) => {
                  if (item.ctaLink) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (item.ctaLink.startsWith('http')) {
                      window.open(
                        item.ctaLink,
                        '_blank',
                        'noopener,noreferrer'
                      );
                    } else {
                      window.location.href = item.ctaLink;
                    }
                  }
                }}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderColor: 'primary.main',
                  cursor: item.ctaLink ? 'pointer' : 'default',
                  '&:hover': item.ctaLink
                    ? {
                        bgcolor: 'primary.dark',
                        color: 'white',
                      }
                    : {
                        bgcolor: 'primary.main',
                        color: 'white',
                      },
                }}
              />
            )}
            {item.ui && (
              <Chip
                component={item.uiLink ? Link : 'div'}
                href={item.uiLink}
                target={item.uiLink?.startsWith('http') ? '_blank' : undefined}
                rel={
                  item.uiLink?.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                label={item.ui}
                size="small"
                variant="outlined"
                onClick={(e: React.MouseEvent) => {
                  if (item.uiLink) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (item.uiLink.startsWith('http')) {
                      window.open(item.uiLink, '_blank', 'noopener,noreferrer');
                    } else {
                      window.location.href = item.uiLink;
                    }
                  }
                }}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderColor: 'primary.main',
                  cursor: item.uiLink ? 'pointer' : 'default',
                  '&:hover': item.uiLink
                    ? {
                        bgcolor: 'primary.dark',
                        color: 'white',
                      }
                    : {
                        bgcolor: 'primary.main',
                        color: 'white',
                      },
                }}
              />
            )}
          </Stack>
        )}
      </Box>
    </Paper>
  );
}

export default function FeaturedCases() {
  return (
    <Stack spacing={2}>
      {featured.map((f, i) => (
        <CaseRow key={f.slug} item={f} flip={i % 2 === 1} />
      ))}
    </Stack>
  );
}
