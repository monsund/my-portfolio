import { Box, Chip, Paper, Stack, Typography } from '@mui/material';

type Skill = { name: string };
type Group = {
  key: 'frontend' | 'backend' | 'ai' | 'devops';
  title: string;
  note?: string;
  skills: Skill[];
};

const accents: Record<
  Group['key'],
  { bar: string; chipBg: string; chipText: string; chipBorder: string }
> = {
  frontend: {
    bar: '#bfdbfe',
    chipBg: '#eff6ff',
    chipText: '#1d4ed8',
    chipBorder: '#bfdbfe',
  },
  backend: {
    bar: '#ddd6fe',
    chipBg: '#f5f3ff',
    chipText: '#6d28d9',
    chipBorder: '#ddd6fe',
  },
  ai: {
    bar: '#fed7e2',
    chipBg: '#fff1f2',
    chipText: '#be185d',
    chipBorder: '#fecdd3',
  },
  devops: {
    bar: '#99f6e4',
    chipBg: '#ecfeff',
    chipText: '#0f766e',
    chipBorder: '#99f6e4',
  },
};

const groups: Group[] = [
  {
    key: 'frontend',
    title: 'Frontend',
    note: 'UI/UX · performance · a11y',
    skills: [
      { name: 'React / Next.js' },
      { name: 'TypeScript' },
      { name: 'Material-UI' },
      { name: 'Zustand / Redux Toolkit' },
      { name: 'React Hook Form' },
      { name: 'Framer Motion' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    note: 'APIs & infra',
    skills: [
      { name: 'Node.js / Express' },
      { name: 'MongoDB' },
      { name: 'REST / Webhooks' },
      { name: 'Auth (JWT, OAuth)' },
    ],
  },
  {
    key: 'ai',
    title: 'AI & Agents',
    note: 'automation & tool-calling',
    skills: [
      { name: 'LangChain / LangGraph' },
      { name: 'MCP (tool adapters)' },
      { name: 'Prompting / RAG' },
    ],
  },
  {
    key: 'devops',
    title: 'DevOps',
    note: 'ship fast, safely',
    skills: [
      { name: 'Vercel / Render / Workers' },
      { name: 'CI/CD (GitHub Actions)' },
      { name: 'Perf & Observability' },
    ],
  },
];

export default function Skills() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2,1fr)',
          lg: 'repeat(4,1fr)',
        },
        gap: 3,
        alignItems: 'stretch',
      }}
    >
      {groups.map(g => {
        const acc = accents[g.key];
        return (
          <Paper
            key={g.title}
            sx={{
              p: 2.5,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 1.25,
              position: 'relative',
              borderColor: '#e2e8f0',
              boxShadow: '0 8px 24px rgba(16,24,40,.06)',
              '&:before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 12,
                bottom: 12,
                width: 4,
                borderRadius: 2,
                background: acc.bar,
              },
            }}
          >
            <Stack
              direction="row"
              alignItems="baseline"
              justifyContent="space-between"
              gap={1}
              sx={{ pl: 0.5 }}
            >
              <Typography variant="subtitle1" fontWeight={800}>
                {g.title}
              </Typography>
              {g.note && (
                <Chip
                  label={g.note}
                  size="small"
                  variant="outlined"
                  sx={{
                    bgcolor: acc.chipBg,
                    color: acc.chipText,
                    borderColor: acc.chipBorder,
                  }}
                />
              )}
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mt: 0.5 }}
            >
              {g.skills.map(s => (
                <Chip
                  key={s.name}
                  label={s.name}
                  size="small"
                  sx={{
                    bgcolor: '#f8fafc',
                    color: '#475569',
                    borderColor: '#e2e8f0',
                    borderRadius: 999,
                    fontSize: '.82rem',
                  }}
                  variant="outlined"
                />
              ))}
            </Stack>
          </Paper>
        );
      })}
    </Box>
  );
}
