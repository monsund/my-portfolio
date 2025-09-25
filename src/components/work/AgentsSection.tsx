'use client';
import { Box, Chip, Paper, Stack, Typography } from '@mui/material';

type Agent = {
  name: string;
  summary: string;
  stack: string[];
};

const agents: Agent[] = [
  {
    name: 'SLM Agent (News & Actions)',
    summary:
      'Small-language-model agent that summarizes news and triggers actions via tools.',
    stack: ['Node', 'LangGraph', 'MCP'],
  },
  {
    name: 'Calendar Orchestrator',
    summary:
      'Agent that reads context and schedules meetings with conflict checks.',
    stack: ['Node', 'Google API'],
  },
  {
    name: 'Angel One Trader',
    summary: 'Executes trading workflows via broker API with safeguards.',
    stack: ['Node', 'Broker API'],
  },
];

export default function AgentsSection() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' },
        gap: 3,
      }}
    >
      {agents.map(a => (
        <Paper key={a.name} sx={{ p: 2.5 }}>
          <Typography variant="subtitle1" fontWeight={800}>
            {a.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5, mb: 1 }}
          >
            {a.summary}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {a.stack.map(s => (
              <Chip key={s} label={s} size="small" variant="outlined" />
            ))}
          </Stack>
        </Paper>
      ))}
    </Box>
  );
}
