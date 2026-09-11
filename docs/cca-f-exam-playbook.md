# CCA-F Exam Playbook

A practical companion to the CCA-F architecture study guide. This document focuses on scenario reasoning, elimination, pacing, and revision.

## 1. Exam mindset

Treat the exam as architecture judgment rather than feature trivia.

For every scenario ask:

1. What is the business requirement?
2. What is failing today?
3. What mechanism directly fixes that failure?
4. Does the requirement need guidance or enforcement?
5. Why are the other options weaker?

The most attractive-looking architecture is not automatically correct. Prefer the smallest reliable mechanism that satisfies the requirement.

## 2. PROOF

Use this when two options remain:

| Principle | Question |
|---|---|
| Proportionate | Is the solution appropriately sized? |
| Root-cause | Does it fix the actual failure? |
| Observable | Can success or failure be detected? |
| Off-the-shelf | Is there already a suitable mechanism? |
| Forced/programmatic | Does the requirement demand a hard guarantee? |

## 3. Five domains

| Domain | Weight |
|---|---:|
| Agentic Architecture & Orchestration | 27% |
| Tool Design & MCP Integration | 18% |
| Claude Code Configuration & Workflows | 20% |
| Prompt Engineering & Structured Output | 20% |
| Context Management & Reliability | 15% |

Mnemonic: **A Thief Can Prompt Correctly**.

## 4. Agentic architecture flashcards

### When should independent work be parallel?

When subtasks do not depend on one another's intermediate results and latency matters.

### When should work be sequential?

When later stages require earlier results.

### When should coordinator-worker be used?

When broad work can be divided into independent investigations that need central synthesis.

### What does a subagent need?

Objective, constraints, output contract, and relevant context/provenance required to work independently.

### When is a programmatic gate preferable?

When an action is irreversible, financially significant, destructive, or otherwise requires a guarantee.

## 5. Tool and MCP flashcards

### What makes a good tool description?

Clear purpose, inputs, boundaries, side effects, and distinction from similar tools.

### Why avoid many overlapping tools?

They enlarge the decision space and increase selection ambiguity and context overhead.

### What should a structured tool error contain?

Enough information to understand the failure, the attempted operation, partial results when useful, and safe alternatives.

### What is `auto`?

Tool use is optional.

### What is `any`?

Some tool must be invoked.

### What is forced invocation?

A specific tool must be invoked.

### MCP tool vs resource?

A tool performs an action. A resource exposes information for retrieval.

## 6. Claude Code flashcards

| Need | Surface |
|---|---|
| Project-wide standards | `CLAUDE.md` |
| Private user guidance | User-level `CLAUDE.md` |
| Path-specific rules | `.claude/rules/` |
| Explicit workflow | Command |
| Reusable on-demand capability | Skill |
| Hard tool restriction | Hook / permission mechanism |
| Tool-output transformation | PostToolUse |
| Complex risky change | Plan mode |

The key distinction is **context vs enforcement**.

## 7. Prompting flashcards

### Is "return JSON" a guarantee?

No. If machine-valid structure is mandatory, use an appropriate structured mechanism and schema validation.

### How should ambiguous extraction be represented?

Use nullable/optional fields and explicit uncertainty states such as `unclear` or `other`.

### How many few-shot examples?

For preparation, think in terms of a small set of strong representative examples, often around 2-4. The correct number depends on the task.

### What makes refinement useful?

Concrete input, concrete failure, targeted feedback, and expected output.

## 8. Context and reliability flashcards

### Does a bigger context window automatically improve quality?

No. More context can contain noise, duplication, stale information, and conflicts.

### What should structured state preserve?

Goal, constraints, identifiers, dates, amounts, decisions, evidence, provenance, and unresolved questions.

### How should repository exploration work?

Start broad enough to locate the relevant area, then narrow using path discovery, content search, and targeted file reads.

### When should humans review?

When confidence is low, ambiguity is high, document type is sensitive, impact is high, evidence conflicts, or the action is difficult to reverse.

## 9. Six scenario patterns

### Customer support

```text
Customer verification
        -> order lookup
        -> eligibility
        -> programmatic gate
        -> action / escalation
```

### Claude Code development

Choose the configuration surface based on scope: always-on, path-specific, explicit invocation, reusable capability, or hard enforcement.

### Multi-agent research

```text
Coordinator
  -> Worker A
  -> Worker B
  -> Worker C
  -> evidence + provenance
  -> synthesis
```

### Developer productivity

Know the boundaries between commands, skills, rules, project instructions, and hooks.

### CI/CD

```text
CI trigger
 -> non-interactive execution
 -> least-privilege tools
 -> structured output
 -> CI decision
```

### Structured extraction

```text
Document
 -> instructions/examples
 -> schema
 -> validation
 -> downstream action OR human review
```

## 10. Distractors to recognize

### Bigger model

Usually wrong when the actual problem is orchestration, tool design, context quality, or deterministic enforcement.

### Stronger prompt

Usually wrong when the requirement says must, never, only if, or otherwise requires a guarantee.

### Bigger context

Usually wrong when the real issue is irrelevant or poorly structured context.

### `auto` for mandatory tool use

Wrong when the scenario requires the tool invocation to happen.

### Sequential turns for independent work

Wrong when the tasks can safely run independently and latency matters.

### Random human review

Wrong when the scenario provides risk signals that can route review intelligently.

### "Try again"

Weak refinement because it provides no specific learning signal.

## 11. Time strategy

The preparation target is:

- 60 questions;
- 120 minutes;
- first pass completed around 105 minutes;
- roughly 15 minutes for review;
- about 1.75 minutes/question during the main pass.

Suggested checkpoints:

| Time | Question target |
|---:|---:|
| 15 min | Q9 |
| 30 min | Q18 |
| 60 min | Q36 |
| 90 min | Q52 |
| 105 min | Q60 |
| 105-120 min | Review |

These are study targets, not official rules.

## 12. PICK-FLAG-MOVE

When a question becomes a time sink:

1. **PICK** the strongest remaining answer.
2. **FLAG** it for review.
3. **MOVE** to the next question.

Do not spend several minutes trying to manufacture certainty from two equally plausible options.

## 13. Review strategy

During review, change an answer only when you can identify a concrete error in the original reasoning.

Good reasons to change:

- missed a requirement word;
- confused a prerequisite with an optional step;
- selected prompt guidance instead of enforcement;
- chose the wrong Claude Code scope;
- overlooked a built-in mechanism;
- misunderstood whether tasks were independent.

Bad reason:

> "The other option suddenly feels better."

## 14. Study workflow

### Pass 1: Concepts

Learn the mechanisms and definitions.

### Pass 2: Decision boundaries

Practice comparing neighboring mechanisms:

- command vs skill;
- rule vs `CLAUDE.md`;
- prompt vs hook;
- tool vs resource;
- sequential vs parallel;
- single agent vs coordinator-worker;
- larger context vs compact state;
- prose JSON vs schema-constrained output.

### Pass 3: Scenario practice

For every question record:

```text
Requirement:
Failure mode:
Correct mechanism:
Why correct:
Why each distractor fails:
PROOF principle:
```

### Pass 4: Timed mocks

Use full-length timed practice. Review every wrong answer and every guessed-correct answer.

### Pass 5: Final revision

Prioritize PROOF, the decision matrix, orchestration patterns, tool/MCP distinctions, Claude Code surfaces, structured output, context management, anti-patterns, and pacing.

## 15. Final-day checklist

- Review PROOF.
- Review the architecture decision matrix.
- Review the five domain weights.
- Review agentic loop and orchestration patterns.
- Review `tool_choice` behavior.
- Review MCP tools vs resources.
- Review `CLAUDE.md`, rules, commands, skills, and hooks.
- Review structured output and extraction uncertainty.
- Review context compaction and provenance.
- Review pacing checkpoints.
- Do not replace understanding with last-minute resource collection.

## 16. Final mental model

When faced with a difficult question, think:

```text
Requirement
    |
    v
Failure mode
    |
    v
Required reliability
    |
    v
Correct mechanism
    |
    v
Correct scope
    |
    v
PROOF comparison
    |
    v
Answer
```

The objective is not to pick the fanciest architecture. It is to pick the mechanism that most directly and reliably satisfies the scenario.
