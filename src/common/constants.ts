import type { Project, NavItem } from '@/types'

export const PROJECTS: Project[] = [
  // AI/ML Projects
  { 
    id: 'rag-harness', 
    title: 'RAG Repo Harness', 
    url: 'https://github.com/girijashankarj/garry-rag-repo-harness', 
    category: 'ai-ml',
    description: 'Retrieval-Augmented Generation (RAG) system for codebase knowledge extraction and intelligent Q&A.',
    technologies: ['RAG', 'LLM', 'Vector Databases', 'Semantic Search'],
    highlights: ['Codebase indexing', 'Semantic search', 'AI-powered Q&A']
  },
  { 
    id: 'tensorflow', 
    title: 'TensorFlow Practice App', 
    url: 'https://github.com/girijashankarj/tensorflow_practise_app', 
    category: 'ai-ml',
    description: 'Hands-on machine learning practice application using TensorFlow for building and training neural networks.',
    technologies: ['TensorFlow', 'Python', 'Machine Learning'],
    highlights: ['Neural network implementation', 'Model training and evaluation']
  },
  
  // Gen AI Developer Tools
  { 
    id: 'cursor-config', 
    title: 'Cursor Config', 
    url: 'https://github.com/girijashankarj/garry-cursor-config', 
    category: 'dev-tools',
    description: 'Comprehensive Cursor IDE configuration and rules for AI-assisted development workflows.',
    technologies: ['Cursor IDE', 'AI Tools', 'Configuration'],
    highlights: ['AI development setup', 'Best practices']
  },
  { 
    id: 'clear-prompt', 
    title: 'Clear Prompt', 
    url: 'https://github.com/girijashankarj/garry-clear-prompt', 
    category: 'dev-tools',
    description: 'Prompt quality analyzer and optimizer for AI-assisted development with real-time scoring.',
    technologies: ['AI Tools', 'NLP', 'TypeScript', 'React'],
    highlights: ['Prompt optimization', 'Quality scoring', 'AI workflow']
  },
  
  // Developer Tools & Config
  { 
    id: 'micro-dev', 
    title: 'Micro Dev Utilities', 
    url: 'https://github.com/girijashankarj/garry-micro-dev-utilities', 
    category: 'dev-tools',
    description: 'Collection of micro-utilities and helper functions for faster development workflows.',
    technologies: ['Utilities', 'Developer Tools'],
    highlights: ['Productivity tools', 'Reusable utilities']
  },
  { 
    id: 'n8n-decision', 
    title: 'N8N Decision Action', 
    url: 'https://github.com/girijashankarj/garry-n8n-decision-action', 
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
  
  // React/Web Projects
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
    url: 'https://girijashankarj.github.io/discuss_react_patterns/', 
    category: 'react-web',
    description: 'Educational website explaining React concepts, patterns, and best practices with interactive examples.',
    technologies: ['Documentation', 'Education', 'React'],
    highlights: ['Interactive examples', 'Pattern explanations']
  },
  
  // JavaScript Projects
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
    title: 'I Don\'t Know JS - Series', 
    url: 'https://girijashankarj.github.io/idkjs_javascript_series/', 
    category: 'javascript',
    description: 'Educational series exploring JavaScript fundamentals, advanced concepts, and language quirks.',
    technologies: ['JavaScript', 'Education', 'Documentation'],
    highlights: ['Deep JS concepts', 'Learning resource']
  },
  
  // Full Stack Applications
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
    category: 'fullstack',
    description: 'Interactive web application showcasing JavaScript capabilities and modern web features.',
    technologies: ['JavaScript', 'Web APIs'],
    highlights: ['Interactive features']
  },
  { 
    id: 'vvedding', 
    title: 'Vvedding', 
    url: 'https://github.com/girijashankarj/vvedding', 
    category: 'fullstack',
    description: 'Full-stack wedding management application with modern UI and backend integration.',
    technologies: ['Full Stack', 'Node.js', 'React'],
    highlights: ['Wedding management', 'Full-stack app']
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
  { id: 'highlights', label: 'Highlights', href: '#highlights' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'journey', label: 'Journey', href: '#journey' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'community', label: 'Community', href: '#community' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]
