# Claude Certified Architect - Foundations (CCAR-F / CCA-F)

Architecture-first study guide for the Claude Certified Architect - Foundations certification.

## Core principle

Choose the smallest reliable mechanism that directly satisfies the requirement, and explain why alternatives are weaker.

## Domain map

| Domain | Weight |
|---|---:|
| Agentic Architecture & Orchestration | 27% |
| Tool Design & MCP Integration | 18% |
| Claude Code Configuration & Workflows | 20% |
| Prompt Engineering & Structured Output | 20% |
| Context Management & Reliability | 15% |

Mnemonic: **A Thief Can Prompt Correctly**.

## PROOF

- **P - Proportionate:** Is the mechanism appropriately sized?
- **R - Root-cause:** Does it fix the actual failure mode?
- **O - Observable:** Can success or failure be detected?
- **O - Off-the-shelf before custom:** Is an existing mechanism sufficient?
- **F - Forced/programmatic where required:** Does the requirement demand a hard guarantee?

When a requirement says **must**, **never**, or **only if**, prefer deterministic enforcement over prompt-only guidance.

## Agentic architecture

The basic loop is:

```text
Send request -> inspect stop_reason
                  |
             tool_use?
              /      \
            yes       no
             |         |
        execute tool  finish
             |
        append result
             |
          send again
```

Mnemonic: **STER: Send, Test stop reason, Execute tool, Return result.**

Use parallel execution for independent work. Use coordinator-worker when independent workers report to a central synthesizer. Use a sequential pipeline when later stages genuinely depend on earlier stages.

Subagents should receive their objective, constraints, output contract, and required findings/source metadata. Do not assume they automatically share the parent's full context.

For financial, destructive, or otherwise irreversible actions, use deterministic prerequisite checks and programmatic gates. A prompt saying "always verify first" is not a sufficient authorization boundary.

## Tool design and MCP

Good tool descriptions explain purpose, inputs, boundaries, side effects, and distinctions from similar tools. Smaller focused toolsets reduce selection ambiguity.

Return structured, actionable errors rather than swallowing failures. Encode prerequisites when one tool must precede another.

Understand the distinction between MCP tools, resources, and prompts. Tools perform actions; resources expose information for retrieval; prompts provide reusable interaction patterns.

## Claude Code configuration

| Requirement | Surface |
|---|---|
| Always-on project standards | `CLAUDE.md` |
| Private always-on guidance | User-level `CLAUDE.md` |
| Selected paths/file types | `.claude/rules/` |
| Explicit user workflow | Command |
| Reusable on-demand capability | Skill |
| Hard restriction | Hook / permission control |
| Tool-output normalization | PostToolUse hook |
| Large or risky work | Plan mode |

The important distinction is **context versus enforcement**. Instructions guide the model. Hooks and hard permission mechanisms can enforce boundaries.

## Prompting and structured output

Prompt-only JSON instructions are weaker than schema-constrained structured output when machine-valid structure is mandatory.

For extraction, support uncertainty with nullable fields and values such as `unclear` or `other` rather than forcing fabrication.

Few-shot examples should be concrete and representative. A small set of strong examples is generally more useful than one weak example or a large noisy collection.

For refinement, provide concrete input, incorrect output, targeted failure feedback, and expected output. Avoid vague instructions such as "try again".

## Context and reliability

More context is not automatically better context. Prefer compact structured state containing identifiers, dates, amounts, decisions, constraints, provenance, and unresolved questions.

For codebase exploration, use the narrowest mechanism that answers the question: path/name discovery, text search, then reading known files. Avoid loading an entire repository when incremental exploration is sufficient.

Important claims should preserve provenance. When sources conflict, keep the claims and evidence distinct rather than silently merging them.

Human review should be risk-based using confidence, document type, ambiguity, business impact, and policy sensitivity.

## Architecture decision matrix

| Situation | Prefer | Avoid |
|---|---|---|
| Always-on project guidance | `CLAUDE.md` | Huge prompts |
| Path-specific behavior | Scoped rules | Global instructions |
| Explicit reusable workflow | Command | Rewriting instructions |
| Reusable capability | Skill | Loading everything permanently |
| Hard prohibition | Hook / permissions | Prompt-only prohibition |
| Independent subtasks | Parallel execution | Sequential turns |
| Broad independent research | Coordinator-worker | One mega-agent |
| Hard dependency | Sequential pipeline | Uncontrolled parallelism |
| Irreversible action | Programmatic gate | Prompt-only safeguard |
| Guaranteed structure | Schema + structured mechanism | Prose JSON request |
| Context pressure | Structured state | Bigger context alone |
| Risk-based review | Confidence/type/ambiguity | Random review only |
| Machine-readable CI | JSON / schema | Free-form output |

## High-value anti-patterns

### Bigger model as a structural fix

If the problem is orchestration, validation, tool design, context quality, or enforcement, increasing model size does not fix the root cause.

### Stronger prompt as a guarantee

A prompt is guidance. If the requirement is deterministic, use deterministic enforcement.

### Bigger context as a quality fix

More context can contain more irrelevant, duplicated, stale, or conflicting information. Compact state is often better.

### `tool_choice: auto` for guaranteed invocation

`auto` permits the model to decide whether to invoke a tool. Use a mandatory or forced mechanism when invocation is a requirement.

### Swallowing tool failures

The model loses information required to recover or escalate. Return structured errors.

## Scenario patterns

### Customer support

Customer verification -> order lookup -> eligibility check -> programmatic action gate -> action or escalation.

### Multi-agent research

Coordinator -> parallel workers -> evidence with provenance -> synthesis.

### Developer productivity

Choose between always-on instructions, scoped rules, commands, skills, and hooks based on loading scope and enforcement strength.

### CI/CD

Non-interactive invocation -> least-privilege tools -> deterministic task -> structured result -> CI decision.

### Structured extraction

Document -> instructions/examples -> schema -> validation -> downstream processing or human review.

## Question-solving method

1. Identify the strongest requirement words: **must**, **never**, **only if**, **guaranteed**, **independently**, **concurrently**, **machine-readable**, **non-interactive**, **private**, **project-wide**, **file-specific**, **irreversible**.
2. Identify the actual failure mode.
3. Eliminate options that solve the wrong problem.
4. Compare the final options using PROOF.
5. If still stuck after about two minutes, select the strongest answer, flag it, and move.

## Time management

For 60 questions in 120 minutes, target roughly 1.75 minutes per question during the first pass and reserve about 15 minutes for review.

| Time | Target |
|---:|---:|
| 15 min | Q9 |
| 30 min | Q18 |
| 60 min | Q36 |
| 90 min | Q52 |
| 105 min | Q60 answered |
| 105-120 min | Flagged review |

These are preparation targets, not official exam rules.

## Final checklist

- [ ] Explain the agentic loop and tool-result continuation.
- [ ] Distinguish parallel work, coordinator-worker, and sequential pipelines.
- [ ] Understand isolated subagent context.
- [ ] Recognize when programmatic gates are required.
- [ ] Distinguish MCP tools, resources, and prompts.
- [ ] Know `CLAUDE.md`, rules, commands, skills, and hooks.
- [ ] Understand structured output and schema enforcement.
- [ ] Design nullable/unclear extraction fields.
- [ ] Use compact structured state under context pressure.
- [ ] Preserve provenance.
- [ ] Route high-risk cases to human review.
- [ ] Apply PROOF to scenario questions.
- [ ] Maintain exam pacing.

## Scope

This is an independent study guide. It does not provide recalled confidential examination questions, answer keys, or proprietary exam content. Product capabilities and certification policies can change, so verify current official Anthropic documentation before relying on a specific implementation detail or exam rule.
