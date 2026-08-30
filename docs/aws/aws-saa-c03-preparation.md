# AWS Solutions Architect Associate (SAA-C03) Preparation

> Anonymous learning log and preparation notes. This document captures the decisions, strategy, scope, and preparation approach discussed during the SAA-C03 preparation project.

## Goal

Prepare for the AWS Certified Solutions Architect - Associate (SAA-C03) exam while developing genuine cloud architecture skills rather than relying on rote memorisation.

The certification is intended to strengthen practical AWS architecture knowledge and provide a recognised credential in the job market.

## Exam Plan

- **Target exam date:** 30 September 2026
- **Planned scheduling date:** 15 September 2026
- **Preferred exam provider:** Pearson VUE
- **Preferred exam centre:** Symbiosis Women’s Medical College Library Centre, Lavale
- **Scheduling consideration:** Schedule after the credit-card bill generates on 14 September.
- **Exam discount:** 50% AWS certification voucher from a previous exam.
- **Employer reimbursement:** Exam payment is reimbursed by the employer only if the exam is passed.

The specific centre and 30 September slot must be verified when booking.

## Existing AWS Certifications

The learner already holds AWS AI Practitioner and AWS Machine Learning certification credentials, but considers the earlier preparation too focused on memorisation. This SAA-C03 preparation is intentionally different: the target is durable understanding and architecture reasoning.

## Primary Learning Resources

1. Stephen Marek's AWS SAA-C03 Udemy course
2. Stephen Marek's AWS SAA-C03 practice-test course
3. AWS official documentation
4. AWS official whitepapers
5. YouTube explanations and exam-focused videos
6. Multiple free/community AWS SAA mock tests available online

These resources have different roles rather than being treated as competing sources.

**Core learning:** Stephen Marek course  
**Validation:** Stephen Marek practice tests  
**Depth and authority:** AWS documentation and whitepapers  
**Alternative explanations:** YouTube  
**Exam exposure:** Multiple mock-test sources

## Learning Philosophy

The preparation should optimise for understanding, not course completion.

Preferred learning format:

- Definitions
- Visual diagrams
- Comparison tables
- Real-world use cases
- Concrete examples
- Architecture scenarios
- Service trade-offs

The central question for an AWS service should be:

> **Why would an architect choose this service here, and why not the alternative?**

A useful learning loop is:

**Learn → Visualise → Explain → Apply → Test → Fix gaps**

The standard for mastery is not simply recognising an answer. The learner should be able to explain the architectural decision and its trade-offs.

## Assessment Strategy

A rigid day-by-day execution planner was intentionally rejected because it is less effective for this learning style.

Instead, progress will be evaluated through surprise-style technical interviews at approximately:

- Day 5
- Day 10
- Day 15
- Day 20
- Day 25
- Day 29

The interviews should test actual understanding rather than whether a checklist was completed.

Typical interview challenges should include:

- Why this AWS service?
- Why not the alternative?
- What happens when an Availability Zone fails?
- How would the architecture scale?
- How would you reduce cost?
- Where are the single points of failure?
- What changes for higher availability, lower latency, or different access patterns?

Assessment areas:

**Conceptual understanding | Architecture reasoning | AWS service selection | Trade-offs | Scenario solving | Technical communication**

## Official SAA-C03 Exam Scope

The 2026 AWS SAA-C03 Exam Guide is the authoritative syllabus for this preparation.

### Exam Structure

- 65 questions total
- 50 scored questions
- 15 unscored questions
- Multiple-choice and multiple-response questions
- 130-minute exam duration
- Passing score: 720/1000
- Unanswered questions are scored as incorrect
- No penalty for guessing
- Compensatory scoring: passing the overall exam is sufficient; each domain does not have to be passed individually

### Content Domains

| Domain | Weight |
|---|---:|
| Design Secure Architectures | 30% |
| Design Resilient Architectures | 26% |
| Design High-Performing Architectures | 24% |
| Design Cost-Optimized Architectures | 20% |

Security and resilience together represent 56% of scored content and therefore require significant attention.

### Official Technologies and Concepts

The exam guide identifies the following broad technology/concept areas:

- Compute
- Cost management
- Database
- Disaster recovery
- High performance
- Management and governance
- Microservices and component delivery
- Migration and data transfer
- Networking, connectivity, and content delivery
- Resiliency
- Security
- Serverless and event-driven design principles
- Storage

The official guide also provides task-level knowledge and skills statements and non-exhaustive in-scope and out-of-scope AWS service lists. The preparation should remain aligned with that scope rather than expanding unnecessarily into unrelated AWS services.

## Hands-on AWS Strategy

A personal AWS account is available for practical experimentation because the employer's AWS environment has restrictions that prevent useful hands-on work.

However, the decision is **not to spend the $100 AWS promotional credit on SAA preparation**.

The personal account should instead be used primarily to:

- Preview AWS services
- Inspect configurations
- Perform small experiments when hands-on interaction materially improves understanding
- Use free or free-eligible resources where applicable
- Delete resources immediately after experiments
- Check pricing before creating potentially chargeable resources

The rule is:

> **If the architectural behaviour can be understood without deploying the resource, do not deploy it.**

Hands-on deployment is worthwhile when it materially improves understanding of a concept such as networking, IAM, scaling, storage behaviour, load balancing, or service integration.

## AWS $100 Promotional Credit

The personal AWS account has a $100 AWS promotional credit received through an AWS survey. The credit expires on 31 March 2028 and is applicable to AWS Products and Services usage.

Decision:

- **SAA:** Avoid consuming the promotional credit unless a small experiment genuinely requires it.
- **AWS Generative AI Professional:** Preserve the majority of the credit for future hands-on GenAI preparation.

The credit is potentially more valuable for GenAI experimentation, where practical work with GenAI services can provide stronger learning value.

Never leave chargeable resources running unnecessarily.

## GitHub Portfolio Strategy

The AWS work should eventually be represented in the portfolio GitHub repository through reproducible architecture documentation rather than exposing a live AWS account.

Recommended project pattern:

```text
Problem / requirements
        ↓
Architecture diagram
        ↓
AWS service selection
        ↓
Why these services?
        ↓
Alternatives and trade-offs
        ↓
Hands-on validation
        ↓
Infrastructure as Code where appropriate
        ↓
README + screenshots + architecture decisions
```

Experienced AWS engineers generally show the architecture, Infrastructure as Code, documentation, diagrams, decisions, and reproducibility in GitHub rather than credentials or sensitive account information.

Never commit:

- AWS access keys
- Secret keys
- Passwords
- API keys
- `.env` files containing secrets
- Private certificates
- Database credentials

## Practical Portfolio Direction

Instead of building one unnecessarily large application, small architecture-focused projects can demonstrate the SAA concepts more clearly. Potential examples include:

1. Highly available three-tier application
2. Serverless architecture
3. Event-driven architecture
4. Highly available data architecture
5. Cost-optimised architecture

The objective is to be able to say that the architecture was designed, tested, and understood, rather than simply claiming that an AWS certification was passed.

## Core Principle

> **SAA certification is the outcome. Cloud architecture understanding is the actual goal.**

The preparation should therefore focus on making architectural decisions under realistic requirements involving security, resilience, performance, scalability, availability, and cost.

## Project Repository

This preparation documentation belongs under the portfolio repository's AWS documentation area:

`docs/aws/`
