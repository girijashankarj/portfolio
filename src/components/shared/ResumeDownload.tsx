export function ResumeDownload() {
  const handleDownload = () => {
    // Create a simple resume PDF or link to existing PDF
    // For now, we'll create a downloadable link
    const resumeData = {
      name: 'Girijashankar Jambhale',
      title: 'AI Platform Engineer',
      email: 'girijashankarj@gmail.com',
      phone: '888-***-****',
      location: 'Pune, Maharashtra, India',
      linkedin: 'https://www.linkedin.com/in/girijashankarj',
      github: 'https://github.com/girijashankarj',
      summary: 'AI Platform Engineer with 8+ years specializing in data engineering and Gen AI, workflow automation (n8n), Gen AI tools, MLOps (AWS), Google services (Firebase, Analytics, Maps API), AI enablement leadership, and building production-ready developer tools. JavaScript is my primary and favorite language, with production experience in Python, Java, and C++. Actively practicing Data Structures & Algorithms on LeetCode.',
    }

    // Create a comprehensive text version that can be converted to PDF
    const resumeText = `
${resumeData.name}
${resumeData.title}

═══════════════════════════════════════════════════════════════
CONTACT INFORMATION
═══════════════════════════════════════════════════════════════
Email: ${resumeData.email}
Phone: ${resumeData.phone}
Location: ${resumeData.location}
LinkedIn: ${resumeData.linkedin}
GitHub: ${resumeData.github}
Portfolio: https://girijashankarj.github.io/portfolio/

═══════════════════════════════════════════════════════════════
PROFESSIONAL SUMMARY
═══════════════════════════════════════════════════════════════
${resumeData.summary}

Organizational Contributions:
• Contributing to onboarding new team members with documentation and knowledge transfer
• Providing KT (Knowledge Transfer) sessions and technical training
• Sharing tech news, trends, and best practices across the organization
• Always vocal about new technologies, improvements, and innovation opportunities

═══════════════════════════════════════════════════════════════
PROFESSIONAL EXPERIENCE
═══════════════════════════════════════════════════════════════

Synechron · Senior Associate Consultant · AI Platform Engineer
Mar 2024 - Present · Pune (Hybrid)

AI Enablement & Leadership:
• Leading AI enablement initiatives for 5+ enterprise teams (50+ engineers), automating workflows that improved team productivity by 40% and delivery velocity
• Led Cursor adoption across organization (100+ developers), creating AI critics frameworks and best practices for AI-assisted development
• Enabling AI-driven delivery with GenAI tooling and intelligent systems architecture, reducing development time by 35% and saving 20+ hours/week across teams

Developer Tooling & Automation:
• Built production-ready Cursor configuration system with rules, skills, commands, and hooks. Implemented role-based design (Architecture/Business Analyst, Developer/DevOps, QA) that improved development efficiency
• Developed Node.js packages for PR quality checks: lint, format, commit validation, SQL scaffold, achieving 98% test coverage for large projects. Created TypeScript management tools for types/enums/interfaces and API mocking
• Automated API documentation: Built dev scripts generating OpenAPI YAML for Swagger/Readme.io with markdown. Created OpenSearch dashboards for log processing, error tracking, metrics, and KPIs
• Designed cloud-ready systems with shared AWS layers and secure integrations
• Built scalable APIs, observability, and audit-ready logging for regulated domains

Data Engineering & MLOps:
• Building production-ready data engineering pipelines and Gen AI solutions, leveraging Delta Lake, Spark, and MLflow for scalable ML workflows
• Working on AWS MLOps and cloud platforms, building 10+ production-ready ML pipelines and infrastructure
• Implementing Delta Lake for reliable data storage and versioning in production environments
• Leveraging MLflow for experiment tracking, model registry, and deployment automation
• Optimizing Spark jobs for large-scale data transformations and analytics

Product Delivery:
• Working on insurance products and service management platform (mobile, home, electronics) serving 50K+ users
• Improving documentation, API implementation, and developer productivity through AI-powered workflows

Velotio Technologies · Senior Software Engineer
Oct 2023 - Mar 2024 · Remote

Gen AI & Automation:
• Worked on Gen AI tool (Retool), building intelligent automation solutions and AI-powered applications, reducing manual processes by 60%

Data Engineering:
• Automated large-scale data engineering workflows using AWS services (Lambda, S3, ECS) and cloud data platforms, handling 1M+ records daily for health insurance project

System Architecture:
• Built scalable fintech systems with strong data consistency patterns and security controls, improving system reliability by 45%

GS Lab · Senior Software Engineer
Oct 2021 - Sep 2023 · Pune

Gen AI & Product Development:
• Worked on Gen AI tool (Flutter Flow), building AI-powered applications and intelligent workflows, improving user engagement by 50%
• Built security systems, user management, and subscription management solutions for financial projects using React and Node.js, serving 100K+ users

Real-time Analytics & Infrastructure:
• Developed real-time monitoring dashboard for UPI transactions, processing 500K+ transactions daily
• Implemented AWS Serverless architecture with shared layers, reducing infrastructure costs by 30%

GS Lab · Full Stack Developer
Feb 2020 - Sep 2021 · Pune

Full Stack Development:
• Built security, user management, and subscription management features for financial projects
• Developed IAM solutions for global enterprise clients using React and Node.js
• Built shared AWS layers, pipelines, and local debugging workflows for efficient development

ContentServ Technologies · Frontend Developer
Dec 2017 - Feb 2020 · Pune

Frontend & Product Development:
• Worked on enterprise product suite including PIM (Product Information Management) and Marketing Document Management (MXM)
• Gained foundational experience with React class components and early React versions (2017), building marketing experience management tools
• Built POCs, reusable UI utilities, and refactored legacy codebases to modern ES6 and React patterns

═══════════════════════════════════════════════════════════════
TECHNICAL SKILLS
═══════════════════════════════════════════════════════════════

Data Engineering & Gen AI:
Data Engineering, Spark, Delta Lake, MLflow, Lakehouse Architecture, Databricks, Gen AI on Databricks, Databricks Workflows

Developer Tools & Automation:
Node.js Packages, PR Quality Checks, Lint & Format, Commit Message Validation, SQL Scaffold, Test Coverage (98%), TypeScript Types, Enum Management, Interface Management, Mock Context Creation, API Mocking, OpenAPI YAML, Swagger, Readme.io, OpenSearch, Dashboard Creation, Log Processing, Metrics & KPIs

AI Platform & MLOps:
AWS, AWS Bedrock, MLOps, Gen AI, Machine Learning, Serverless, Architecture, CI/CD, Jest, MCP Servers, GitHub Copilot, ChatMade, Cursor Hooks, Cursor Rules, Cursor Skills, RAG, Agent Mode, Plan Mode, Snowflake, Azure

Workflow Automation & Gen AI Tools:
n8n, Retool, Flutter Flow, Workflow Automation, AI Workflows, Process Automation

Backend:
JavaScript (Primary & Favorite - 8+ years), Node.js, Python, Java, C++, GraphQL, REST APIs, MySQL, Data Structures & Algorithms, Google Firebase, Google Analytics, Google Maps API

Development Tools & IDEs:
Cursor, VSCode, IntelliJ IDEA, WebStorm

Frontend:
ReactJS, Redux, Next.js, TypeScript, HTML, CSS / SCSS

═══════════════════════════════════════════════════════════════
KEY PROJECTS
═══════════════════════════════════════════════════════════════

AI/ML Projects:
• RAG Repo Harness - Retrieval-Augmented Generation system for codebase knowledge extraction and intelligent Q&A (RAG, LLM, Vector Databases, Semantic Search)
• TensorFlow Practice App - Hands-on machine learning practice application for building and training neural networks (TensorFlow, Python, Machine Learning)

Developer Tools & Configuration:
• Cursor Config - Comprehensive Cursor IDE configuration and rules for AI-assisted development workflows
• Clear Prompt - Prompt quality analyzer and optimizer for AI-assisted development with real-time scoring (AI Tools, NLP, TypeScript, React)
• Micro Dev Utilities - Collection of micro-utilities and helper functions for faster development workflows
• N8N Decision Action - Custom N8N workflow action for decision-making and conditional logic in automation
• OCD Boilerplate - Opinionated boilerplate template for rapid project setup with best practices and conventions

React/Web Projects:
• React Basic Webpack App - React application with custom Webpack configuration demonstrating build setup and optimization
• React File Explorer App - File explorer component showcasing tree navigation and file management UI
• Material-UI Todo App - Todo application demonstrating modern UI patterns and state management

Full Stack Applications:
• Next.js Login Page - Full-stack authentication system with Next.js, Node.js, and Chakra UI

JavaScript Projects:
• React Patterns Discussion - Educational project discussing React patterns and best practices
• File Explorer with Flux - File explorer application implementing Flux architecture
• Neon Counter with Flux - Counter application demonstrating Flux architecture patterns
• JSON Diff Tool - Utility for comparing JSON objects using Lodash
• IDKJS JavaScript Series - Educational series on JavaScript concepts and patterns

═══════════════════════════════════════════════════════════════
TECHNOLOGIES CURRENTLY LEARNING
═══════════════════════════════════════════════════════════════
LeetCode & Competitive Programming, Advanced Data Structures & Algorithms, LangChain & LangGraph, Advanced MLOps Patterns, Kubernetes & Container Orchestration, Advanced AWS Services, Databricks Unity Catalog, Snowflake Advanced Features, Azure Cloud Services

═══════════════════════════════════════════════════════════════
CERTIFICATIONS & CREDENTIALS
═══════════════════════════════════════════════════════════════

Professional Certifications:
• AWS Certified Machine Learning Engineer - Associate (Achieved: 2025, Expires: 2028) ✓
• AWS Certified AI Practitioner (Achieved: 2025, Expires: 2028) ✓
• Microsoft Azure Fundamentals (AZ900) (Achieved: 2023) ✓
• GitHub Copilot Technical Preview (Achieved: 2023) ✓
• Cisco JavaScript Essentials (Achieved: 2022) ✓
• HackerRank React Developer (Achieved: 2021) ✓

Professional Development & Badges:
• Personality Development ✓
• Storytelling ✓
• Scrum Master ✓
• Agile Methodologies ✓

═══════════════════════════════════════════════════════════════
EDUCATION
═══════════════════════════════════════════════════════════════

Master of Computer Applications
Savitribai Phule Pune University

Bachelor of Science in Computer Science
Dr. D.Y. Patil College

═══════════════════════════════════════════════════════════════
ACHIEVEMENTS & RECOGNITION
═══════════════════════════════════════════════════════════════

Awards:
• Synechron Surpass Award
• Synechron STAR Award
• AWS ML Engineer Associate + AI Practitioner Certifications

Community Impact:
• 15,000+ LinkedIn connections globally
• 20+ sessions delivered at colleges and corporate events
• 50+ articles published on LinkedIn and Medium
• Actively mentoring 10+ developers
• Attendee at DevFest Pune and AWS Community Day Pune

Technical Achievements:
• Leading AI enablement for 5+ teams (50+ engineers)
• Built 10+ production ML pipelines
• Enabled 100+ developers with AI tooling across organization
• Achieved 98% test coverage for large-scale projects
• Created production-ready developer tools used by multiple teams

═══════════════════════════════════════════════════════════════
BUSINESS IMPACT & METRICS
═══════════════════════════════════════════════════════════════

Productivity & Efficiency:
• 40% improvement in team productivity through AI enablement, translating to faster time-to-market
• 35% reduction in development time through AI-powered workflows
• 30+ hours/week saved across teams through intelligent automation solutions
• 50% faster API scaffolding and documentation, reducing onboarding time by 50%

Cost Savings & Infrastructure:
• 30% infrastructure cost savings through optimized AWS Serverless architecture
• Substantial productivity gains and cost savings across all initiatives

Architecture & Systems:
• Designed cloud-ready systems with shared AWS layers and secure integrations
• Built scalable APIs, observability, and audit-ready logging for regulated domains
• Applied AI agents, GitHub Copilot, and MCP workflows to improve development throughput by 35%

═══════════════════════════════════════════════════════════════
COMMUNITY & LEARNING
═══════════════════════════════════════════════════════════════

Writing & Publications:
• 50+ articles published on LinkedIn and Medium
• Regular posts on AI, cloud, React, and engineering trends
• Topics covered: React Hooks, JavaScript Polyfills, React Patterns, AWS, AI tooling

LinkedIn Highlights:
• Modernizing Java Applications: Migrating Employee Management System to AWS
• React Hooks: useState() and useQuery Polyfills
• JavaScript Polyfills: bind, map, filter, reduce
• JavaScript Quirks: falsy values, loose equality
• React-is and Object.is deep dives
• Demystifying robots.txt

Medium Highlights:
• Error Handling and Fallbacks using React Hooks
• useQuery Hook and Crafting Your Custom Polyfill
• useState() and Crafting Your Custom State Hook
• Supercharging React with the Secrets of React-is
• Why React Developers are Embracing Next.js
• React Diffing: A Deeper Dive into Virtual DOM Comparison

Lectures & Workshops:
• 20+ sessions delivered at colleges and corporate events
• Topics: React.js, AWS, JavaScript, and AI tooling
• Hands-on demos with Cursor, GitHub Copilot, ChatMade, MCP servers
• Covering Jest, automation, code-quality checks, workflows, and boilerplates

Community Engagement:
• Contributing to open-source projects and community resources
• Participating in tech discussions and knowledge exchange
• Building global connections through LinkedIn networking

═══════════════════════════════════════════════════════════════
INTERESTS & HOBBIES
═══════════════════════════════════════════════════════════════
• Reading books (fictional and non-fictional) and listening to audiobooks
• Google Maps Level 8 Local Guide with high views - exploring new places, sharing accurate information, correcting locations, place times, and helping others discover the right places
• Continuous learning and experimenting with new technologies
• Sharing knowledge through LinkedIn and articles
• Building global connections and engaging with tech community
• AI, finance, and tech history
• Mobile photography and community collaboration
• Teaching, career talks, and mentorship

═══════════════════════════════════════════════════════════════
PHILOSOPHY
═══════════════════════════════════════════════════════════════
Learn → Try → Share

I continuously explore new technologies, experiment through projects, and share knowledge with the global tech community. I believe in lifelong learning and constantly explore new technologies, experiment with cutting-edge AI tools, build side projects, contribute to open-source, and follow industry trends and best practices.

═══════════════════════════════════════════════════════════════
    `.trim()

    // Create blob and download
    const blob = new Blob([resumeText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Girijashankar_Jambhale_Resume.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleDownload}
      className="btn-ghost"
      style={{
        flex: '1 1 auto',
        minWidth: 'fit-content',
      }}
    >
      <i className="fa-solid fa-download"></i>
      <span>Download Resume</span>
    </button>
  )
}
