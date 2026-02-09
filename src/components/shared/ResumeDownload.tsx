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

    // Create a text version that can be converted to PDF
    const resumeText = `
${resumeData.name}
${resumeData.title}

Contact:
Email: ${resumeData.email}
Phone: ${resumeData.phone}
Location: ${resumeData.location}
LinkedIn: ${resumeData.linkedin}
GitHub: ${resumeData.github}

${resumeData.summary}

EXPERIENCE

Synechron · Senior Associate Consultant · AI Platform Engineer
Mar 2024 - Present · Pune (Hybrid)

AI Enablement & Leadership:
• Leading AI enablement initiatives for 5+ enterprise teams (50+ engineers), automating workflows that improved team productivity by 40% (estimated $500K+ annual value) and delivery velocity
• Championed Cursor adoption across organization (100+ developers), creating AI critics frameworks and best practices for AI-assisted development
• Driving AI-enabled delivery with GenAI tooling and intelligent systems architecture, reducing development time by 35% (saving $300K annually) and saving 20+ hours/week across teams

Developer Tooling & Automation:
• Built production-ready Cursor configuration system with rules, skills, commands, and hooks. Implemented role-based design (Architecture/Business Analyst, Developer/DevOps, QA) that significantly boosted development efficiency
• Developed Node.js packages for PR quality checks: lint, format, commit validation, SQL scaffold, achieving 98% test coverage for large projects. Created TypeScript management tools for types/enums/interfaces and API mocking
• Automated API documentation: Built dev scripts generating OpenAPI YAML for Swagger/Readme.io with markdown. Created OpenSearch dashboards for log processing, error tracking, metrics, and KPIs

Data Engineering & MLOps:
• Building production-ready data engineering pipelines and Gen AI solutions, leveraging Delta Lake, Spark, and MLflow for scalable ML workflows
• Working on AWS MLOps and cloud platforms, building 10+ production-ready ML pipelines and infrastructure

Product Delivery:
• Working on insurance products and service management platform (mobile, home, electronics) serving 50K+ users
• Improving documentation, API implementation, and developer productivity through AI-powered workflows

Velotio Technologies · Senior Software Engineer
Oct 2023 - Mar 2024 · Remote
• Gen AI Tools: Worked on Gen AI tool like Retool, building intelligent automation solutions, reducing manual processes by 60%.
• Health Insurance Project: Automated large-scale data engineering workflows using AWS services and Snowflake, handling 1M+ records daily.

GS Lab · Senior Software Engineer
Oct 2021 - Sep 2023 · Pune
• Gen AI Tools: Worked on Gen AI tool like Flutter Flow, improving user engagement by 50%.
• Full Stack Development: Built security systems, user management, and subscription management solutions for financial projects.
• UPI Dashboard: Developed real-time monitoring dashboard processing 500K+ transactions daily.

GS Lab · Full Stack Developer
Feb 2020 - Sep 2021 · Pune
• Built security, user management, and subscription management features for financial projects.
• Developed IAM solutions for global enterprise clients using React and Node.js.

ContentServ Technologies · Frontend Developer
Dec 2017 - Feb 2020 · Pune
• Worked on enterprise product suite including PIM, Marketing Document Management (MXM), and tools integration.
• Gained foundational experience with React class components and early React versions (2017).

SKILLS

Data Engineering & Gen AI: Data Engineering, Spark, Delta Lake, MLflow, Lakehouse Architecture, Databricks, Gen AI on Databricks, Databricks Workflows

Developer Tools & Automation: Node.js Packages, PR Quality Checks, Lint & Format, Commit Message Validation, SQL Scaffold, Test Coverage (98%), TypeScript Types, Enum Management, Interface Management, Mock Context Creation, API Mocking, OpenAPI YAML, Swagger, Readme.io, OpenSearch, Dashboard Creation, Log Processing, Metrics & KPIs

AI Platform & MLOps: AWS, AWS Bedrock, MLOps, Gen AI, Machine Learning, Serverless, Architecture, CI/CD, Jest, MCP Servers, GitHub Copilot, ChatMade, Cursor Hooks, Cursor Rules, Cursor Skills, RAG, Agent Mode, Plan Mode, Snowflake, Azure

Workflow Automation & Gen AI Tools: n8n, Retool, Flutter Flow, Workflow Automation, AI Workflows, Process Automation

Backend: JavaScript (Primary), Node.js, Python, Java, C++, GraphQL, REST APIs, MySQL, Data Structures & Algorithms, Google Firebase, Google Analytics, Google Maps API

Development Tools & IDEs: Cursor, VSCode, IntelliJ IDEA, WebStorm

Frontend: ReactJS, Redux, Next.js, TypeScript, HTML, CSS / SCSS

Currently Learning: LeetCode & Competitive Programming, Advanced DSA

CERTIFICATIONS

• AWS Certified Machine Learning Engineer - Associate (Achieved: 2025, Expires: 2028) ✓
• AWS Certified AI Practitioner (Achieved: 2025, Expires: 2028) ✓
• Microsoft Azure Fundamentals (AZ900) (Achieved: 2023) ✓
• GitHub Copilot Technical Preview (Achieved: 2023) ✓
• Cisco JavaScript Essentials (Achieved: 2022) ✓
• HackerRank React Developer (Achieved: 2021) ✓

EDUCATION

Master of Computer Applications
Savitribai Phule Pune University

Bachelor of Science in Computer Science
Dr. D.Y. Patil College

ACHIEVEMENTS

• Synechron Surpass Award
• Synechron STAR Award
• 15,000+ LinkedIn connections globally
• 20+ sessions delivered at colleges and corporate events
• 50+ articles published on LinkedIn and Medium
• Leading AI enablement for 5+ teams (50+ engineers)
• Built 10+ production ML pipelines
• Significant value delivered through automation and AI enablement
• Enabled 100+ developers with AI tooling across organization

BUSINESS IMPACT

• 40% improvement in team productivity with substantial value in increased output
• 35% reduction in development time resulting in significant cost savings
• 30% infrastructure cost savings through optimized AWS Serverless architecture
• 30+ hours/week saved across teams through intelligent automation solutions
• 50% faster API scaffolding reducing onboarding time and training costs
• Substantial productivity gains and cost savings across all initiatives
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
