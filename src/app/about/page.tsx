import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About — Monsoon.dev',
  description:
    'Full-stack engineer building thoughtful products with React/Next.js, Node/TypeScript, and scalable architectures.',
};

export default function AboutPage() {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
      {/* Hero */}
      <Box
        sx={{
          bgcolor: 'background.default',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'center',
            }}
          >
            <Box>
              <Stack spacing={2}>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: 1.1, color: 'text.secondary' }}
                >
                  About Me
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: 800, lineHeight: 1.05 }}
                >
                  Full-Stack Developer
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  I design and build production systems end-to-end — from
                  modular frontends to resilient backends — focusing on
                  performance, developer experience, and reliability.
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ pt: 1, flexWrap: 'wrap', gap: 1 }}
                >
                  <Chip
                    label="React / Next.js"
                    color="default"
                    variant="outlined"
                  />
                  <Chip
                    label="Node / TypeScript"
                    color="default"
                    variant="outlined"
                  />
                  <Chip
                    label="Micro-UI / Module Federation"
                    color="default"
                    variant="outlined"
                  />
                  <Chip
                    label="MongoDB / Postgres"
                    color="default"
                    variant="outlined"
                  />
                  <Chip
                    label="CI/CD (GH Actions)"
                    color="default"
                    variant="outlined"
                  />
                </Stack>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ pt: 2, alignItems: 'center' }}
                >
                  <Button
                    component={Link}
                    href="/work"
                    variant="contained"
                    color="primary"
                    sx={{
                      px: 3,
                      py: 1.25,
                      fontWeight: 700,
                      borderRadius: 2,
                      background:
                        'linear-gradient(90deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%)',
                      boxShadow: '0 10px 24px rgba(147, 197, 253, .22)',
                      '&:hover': {
                        filter: 'saturate(1.05)',
                        boxShadow: '0 14px 28px rgba(147, 197, 253, .28)',
                      },
                    }}
                  >
                    View Work
                  </Button>
                  {/* <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    color="inherit"
                    sx={{ px: 3, py: 1.25 }}
                  >
                    Let’s Talk
                  </Button> */}
                </Stack>

                {/* Social Links */}
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{ pt: 4, alignItems: 'center', flexWrap: 'wrap', gap: 2 }}
                >
                  <Button
                    component="a"
                    href="https://github.com/monsund/stock-pilot"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    🐙 GitHub
                  </Button>
                  <Button
                    component="a"
                    href="https://www.linkedin.com/in/monsoon-dibragede-22077149/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    🔗 LinkedIn
                  </Button>
                  <Button
                    component="a"
                    href="https://stock-pilot-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    ▲ Vercel
                  </Button>
                </Stack>
              </Stack>
            </Box>

            <Box>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 16px 32px rgba(0,0,0,.12)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(135deg, rgba(147,197,253,.20), rgba(96,165,250,.05) 30%, rgba(59,130,246,.0))',
                    zIndex: 1,
                  },
                }}
              >
                <Image
                  src="/images/about/hero-monsoon.jpg"
                  alt="Monsoon — Full-Stack Developer"
                  width={1200}
                  height={900}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Highlights */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          <Box>
            <Card variant="outlined" sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  What I Do
                </Typography>
                <Typography color="text.secondary">
                  Build scalable web platforms, modular UIs, and automation
                  agents; integrate third-party systems; ship fast with clean
                  architecture and CI/CD.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box>
            <Card variant="outlined" sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Recent Focus
                </Typography>
                <Typography color="text.secondary">
                  AI-assisted workflows (SLM/LangGraph/MCP), property ops, and
                  manufacturing platforms with Micro-UI + Module Federation.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box>
            <Card
              variant="outlined"
              sx={{
                borderRadius: 3,
                borderColor: 'rgba(250,204,21,.35)',
                boxShadow: '0 8px 22px rgba(250,204,21,.08)',
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Toolbelt
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ flexWrap: 'wrap', gap: 1 }}
                >
                  <Chip label="Next.js" />
                  <Chip label="Node" />
                  <Chip label="TypeScript" />
                  <Chip label="MongoDB" />
                  <Chip label="Postgres" />
                  <Chip label="LangGraph" />
                  <Chip label="MCP" />
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Timeline */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
            Highlights & Recent Work
          </Typography>
          <Card variant="outlined" sx={{ borderRadius: 3 }}>
            <CardContent>
              <Stack spacing={2} divider={<Divider flexItem />}>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>
                    StockPilot — AI Trading Agent
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Modular agent platform (MCP + SLM) with robust tool
                    orchestration and observability.
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>
                    Pendo — Property Management Platform
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Full-featured rental operations: applications, screening,
                    e-leases, rent, inspections, finances, and listings.
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>
                    BatteryOps — Workflow Streamlining
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Micro-UI platform using Webpack Module Federation for
                    independently deployable modules.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
