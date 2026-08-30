import type { Project, NavItem } from '@/types'

export const PROJECTS: Project[] = [
  // AI/ML Projects
  {
    id: 'rag-harness',
    title: 'RAG Repo Harness',
    url: 'https://github.com/girijashankarj/garry-rag-repo-harness',
    liveUrl: 'https://girijashankarj.github.io/garry-rag-repo-harness/',
    category: 'ai-ml',
    description: 'Retrieval-Augmented Generation (RAG) system for codebase knowledge extraction and intelligent Q&A.',
    technologies: ['RAG', 'LLM', 'Vector Databases', 'Semantic Search'],
    highlights: ['Codebase indexing', 'Semantic search', 'AI-powered Q&A']
  },
  {
    id: 'github-security-agent-mcp',
    title: 'GitHub Security Agent MCP',
    url: 'https://github.com/girijashankarj/garry-github-security-agent-mcp',
    category: 'ai-ml',
    featured: true,
    description: 'Agentic GitHub security platform combining Claude Code, Cursor, MCP, deterministic remediation, CI automation, and post-change verification.',
    technologies: ['TypeScript', 'MCP', 'Claude Code', 'GitHub API', 'GitHub Actions'],
    highlights: ['Agentic security workflows', 'MCP server', 'Deterministic remediation', 'Security verification']
  },
  {
    id: 'tech-news-aggregator',
    title: 'Tech News Aggregator',
    url: 'https://github.com/girijashankarj/garry-tech-news-aggregator',
    category: 'dev-tools',
    description: 'Automated tech news aggregator: fetches RSS, filters by relevance, sends curated daily digests via email (GitHub Actions).',
    technologies: ['TypeScript', 'RSS', 'GitHub Actions', 'Google Sheets'],
    highlights: ['Daily digest', 'Per-subscriber topics', 'Zero-cost automation']
  },
  {
    id: 'cursor-handbook',
    title: 'Cursor Handbook',
    url: 'https://github.com/girijashankarj/cursor-handbook',
    category: 'dev-tools',
    featured: true,
    description: 'Open-source rules engine for Cursor IDE — 110 rules, agents, and skills that turn your AI into a senior engineer who follows your standards.',
    technologies: ['Cursor IDE', 'Rules Engine', 'Agents', 'Skills', 'Hooks'],
    highlights: ['110 components', '30%+ token savings', 'Security guardrails']
  },
  {
    id: 'clear-prompt',
    title: 'Clear Prompt',
    url: 'https://github.com/girijashankarj/garry-clear-prompt',
    liveUrl: 'https://girijashankarj.github.io/garry-clear-prompt/',
    category: 'dev-tools',
    description: 'Prompt quality analyzer and optimizer for AI-assisted development with real-time scoring.',
    technologies: ['AI Tools', 'NLP', 'TypeScript', 'React'],
    highlights: ['Prompt optimization', 'Quality scoring', 'AI workflow']
  },
  {
    id: 'micro-dev',
    title: 'Micro Dev Utilities',
    url: 'https://github.com/girijashankarj/garry-micro-dev-utilities',
    liveUrl: 'https://girijashankarj.github.io/garry-micro-dev-utilities/',
    category: 'dev-tools',
    description: 'Collection of micro-utilities and helper functions for faster development workflows.',
    technologies: ['Utilities', 'Developer Tools'],
    highlights: ['Productivity tools', 'Reusable utilities']
  },
  {
    id: 'n8n-decision',
    title: 'N8N Decision Action',
    url: 'https://github.com/girijashankarj/garry-n8n-decision-action',
    liveUrl: 'https://girijashankarj.github.io/garry-n8n-decision-action/',
    category: 'dev-tools',
    description: 'Custom N8N workflow action for decision-making and conditional logic in automation.',
    technologies: ['N8N', 'Workflow Automation'],
    highlights: ['Workflow automation', 'Decision logic']
  },
  {
    id: 'ocd-boilerplate',
    title: 'OCD Boilerplate',
    url: 'https://github.com/girijashankarj/garry-ocd-boilerplate',
    category: 'dev-tools',
    description: 'Opinionated boilerplate template for rapid project setup with best practices and conventions.',
    technologies: ['Boilerplate', 'Project Templates'],
    highlights: ['Quick setup', 'Best practices']
  },
  {
    id: 'newsletter-subscription',
    title: "Garry's Daily Digest — Newsletter",
    url: 'https://github.com/girijashankarj/garry-newsletter-subscription-page',
    liveUrl: 'https://girijashankarj.github.io/garry-newsletter-subscription-page/',
    category: 'react-web',
    description: 'Newsletter subscription page: subscribe/unsubscribe, topic tags, article count. React + Vite + Tailwind, Google Sheet via Apps Script.',
    technologies: ['React 19', 'Vite 7', 'Tailwind v4', 'Apps Script'],
    highlights: ['Live on GitHub Pages', '3-step wizard', 'Light/dark theme']
  },
  {
    id: 'linkedin-scheduler',
    title: 'LinkedIn Content Scheduler',
    url: 'https://github.com/girijashankarj/garry-linkedin-scheduler',
    category: 'dev-tools',
    description: 'Automated LinkedIn posting from a version-controlled content calendar via GitHub Actions (daily 9:00 AM IST).',
    technologies: ['TypeScript', 'LinkedIn API', 'GitHub Actions'],
    highlights: ['Daily automation', 'Email notifications', 'CSV/JSON calendar']
  },
  {
    id: 'google-tasks-digest',
    title: 'Google Tasks Daily Digest',
    url: 'https://github.com/girijashankarj/garry-google-tasks-digest',
    category: 'dev-tools',
    description: 'Daily digest of Google Tasks delivered to your inbox (7-day + Common + Targets lists). Runs at 7:00 AM IST on GitHub Actions.',
    technologies: ['TypeScript', 'Google Tasks API', 'GitHub Actions'],
    highlights: ['HTML email digest', 'Pending tasks only', 'Zero cost']
  },
  {
    id: 'architecture-prep',
    title: "Garry's Architecture Preparation",
    url: 'https://github.com/girijashankarj/garry-architecture-prep',
    category: 'dev-tools',
    description: 'Language-neutral repo for HLD, LLD, Software Architecture, and AWS Solutions Architecture.',
    technologies: ['System Design', 'HLD', 'LLD', 'AWS'],
    highlights: ['Interview prep', 'Design patterns', 'AWS cert focus']
  },
  {
    id: 'react-webpack',
    title: 'React Basic Webpack App',
    url: 'https://github.com/girijashankarj/react_basic_webpack_app',
    category: 'react-web',
    description: 'React application with custom Webpack configuration demonstrating build setup and optimization.',
    technologies: ['Webpack', 'Babel', 'React', 'SCSS'],
    highlights: ['Custom Webpack config', 'Build optimization']
  },
  {
    id: 'react-explorer',
    title: 'React File Explorer App',
    url: 'https://github.com/girijashankarj/reactjs_file_explorer_app',
    category: 'react-web',
    description: 'File explorer component built with React showcasing tree navigation and file management UI.',
    technologies: ['File System API', 'JavaScript', 'React'],
    highlights: ['Tree structure navigation', 'File management UI']
  },
  {
    id: 'material-todo',
    title: 'Material-UI Todo App',
    url: 'https://github.com/girijashankarj/material_ui_todo_app',
    category: 'react-web',
    description: 'Todo application built with React and Material-UI demonstrating modern UI patterns and state management.',
    technologies: ['State Management', 'React', 'Material-UI'],
    highlights: ['Material Design', 'CRUD operations', 'Filtering']
  },
  {
    id: 'next-login',
    title: 'Next Login Page (React/Node/Chakra)',
    url: 'https://github.com/girijashankarj/next_login_page',
    category: 'react-web',
    description: 'Full-stack authentication system with Next.js, Node.js, and Chakra UI for modern login experience.',
    technologies: ['Node.js', 'Authentication', 'Next.js', 'Chakra UI'],
    highlights: ['Full-stack auth', 'Modern UI', 'JWT tokens']
  },
  {
    id: 'react-patterns',
    title: 'React Concepts & Patterns',
    url: 'https://github.com/girijashankarj/discuss_react_patterns',
    liveUrl: 'https://girijashankarj.github.io/discuss_react_patterns/',
    category: 'react-web',
    description: 'Educational website explaining React concepts, patterns, and best practices with interactive examples.',
    technologies: ['Documentation', 'Education', 'React'],
    highlights: ['Interactive examples', 'Pattern explanations']
  },
  {
    id: 'js-flux-explorer',
    title: 'JS File Explorer App (Flux)',
    url: 'https://github.com/girijashankarj/js_file_explorer_app_with_flux',
    category: 'javascript',
    description: 'File explorer implementation using Flux architecture pattern demonstrating unidirectional data flow.',
    technologies: ['JavaScript', 'Flux Architecture', 'Vanilla JS'],
    highlights: ['Flux pattern', 'Unidirectional data flow']
  },
  {
    id: 'neon-counter',
    title: 'Neon Counter App (Flux)',
    url: 'https://github.com/girijashankarj/neon_counter_app_with_flux_architecture',
    category: 'javascript',
    description: 'Neon-styled counter application implementing Flux architecture with modern UI effects.',
    technologies: ['Flux', 'JavaScript', 'CSS Animations'],
    highlights: ['Flux architecture', 'Neon UI effects']
  },
  {
    id: 'json-diff',
    title: 'JSON Diff using Lodash',
    url: 'https://github.com/girijashankarj/json_diff_using_lodash',
    category: 'javascript',
    description: 'Utility tool for comparing JSON objects and highlighting differences using Lodash library.',
    technologies: ['JavaScript', 'Lodash', 'JSON'],
    highlights: ['Deep comparison', 'Difference highlighting']
  },
  {
    id: 'idkjs',
    title: "I Don't Know JS - Series",
    url: 'https://github.com/girijashankarj/idkjs_javascript_series',
    liveUrl: 'https://girijashankarj.github.io/idkjs_javascript_series/',
    category: 'javascript',
    description: 'Educational series exploring JavaScript fundamentals, advanced concepts, and language quirks.',
    technologies: ['JavaScript', 'Education', 'Documentation'],
    highlights: ['Deep JS concepts', 'Learning resource']
  },
  {
    id: 'kalu-memories',
    title: 'Kalu Memories (HTML/CSS/JS)',
    url: 'https://github.com/girijashankarj/kalu_memories',
    category: 'fullstack',
    description: 'Memory sharing web application built with vanilla HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    highlights: ['Vanilla JS', 'Memory sharing']
  },
  {
    id: 'kings-riders',
    title: 'Kings Royal Riders (JavaScript)',
    url: 'https://github.com/girijashankarj/kings-royal-riders',
    liveUrl: 'https://girijashankarj.github.io/kings-royal-riders/',
    category: 'fullstack',
    description: 'Interactive web application showcasing JavaScript capabilities and modern web features.',
    technologies: ['JavaScript', 'Web APIs'],
    highlights: ['Interactive features']
  },
]

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'dev-tools', label: 'Developer Tools & Config' },
  { id: 'ai-ml', label: 'AI/ML Projects' },
  { id: 'react-web', label: 'React/Web' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'javascript', label: 'JavaScript' },
] as const

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'live-demo', label: 'Live Demo', href: '#live-demo' },
  { id: 'featured-projects', label: 'Featured Projects', href: '#featured-projects' },
  { id: 'highlights', label: 'Highlights', href: '#highlights' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'journey', label: 'Journey', href: '#journey' },
  { id: 'community', label: 'Community', href: '#community' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]