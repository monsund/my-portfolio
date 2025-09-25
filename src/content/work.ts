import { WorkItem } from '../lib/types';

const work: WorkItem[] = [
  {
    id: 'work-1',
    title: 'Smart Workflow Agent',
    slug: 'smart-workflow-agent',
    category: 'work',
    date: '2025-06-01',
    summary:
      'AI agents orchestrating Slack, Jira & Calendar to automate product ops.',
    cover: '/images/work/workflow.jpg',
    tags: ['React', 'Node', 'MCP', 'LangGraph'],
    role: 'Senior Frontend Engineer',
    stack: ['Next.js', 'Node', 'CSS'],
    problem: 'Manual product rituals were slow and inconsistent.',
    approach: ['Agent tools for Slack/Jira/Calendar', 'Next.js dashboards'],
    outcomes: [{ metric: 'standup time', before: '20m', after: '5m' }],
  },
];

export default work;
