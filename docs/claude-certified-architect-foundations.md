# Claude Certified Architect - Foundations (CCAR-F / CCA-F) v2

## 1. Verified exam facts

The following are current preparation facts verified against Anthropic's certification portal and certification FAQ. Certification logistics can change, so re-check the current official certification documentation before booking or publishing updates.

| Item | Current fact |
|---|---|
| Certification | Claude Certified Architect - Foundations |
| Role | Architect |
| Level | Foundations |
| Questions | 60 |
| Exam time | 120 minutes |
| Total seat time | Approximately 135 minutes |
| Question formats | Multiple choice and scenario-based multiple response |
| Language | English |
| Score | Scaled 100-1000 |
| Passing score | 720 |
| Validity | 12 months |
| Delivery | Online proctored or Pearson VUE test center |
| Eligibility | Currently available to people at Claude Partner Network organizations; registration requires a recognized partner company email |
| Minimum age | 18 |

### Domain weighting

| Domain | Weight |
|---|---:|
| Agentic Architecture & Orchestration | 27% |
| Tool Design & MCP Integration | 18% |
| Claude Code Configuration & Workflows | 20% |
| Prompt Engineering & Structured Output | 20% |
| Context Management & Reliability | 15% |

Mnemonic: **A Thief Can Prompt Correctly**.

Anthropic describes the certification as validating the ability to scope and design Claude-based solutions, select an appropriate model and deployment platform, distinguish agentic from single-shot architectures, and account for evaluation, cost, and responsible deployment.

Anthropic's certification FAQ identifies the current exam guide as the authoritative source for exam scope and task statements. The earlier practice exam on the old platform was retired during the Pearson VUE migration; the current exam guide includes sample questions.

### What is not an official exam rule in this guide

The following are study heuristics created for this guide, not claims about Anthropic's scoring algorithm or official exam procedure:

- PROOF
- STER
- PICK-FLAG-MOVE
- the 105-minute first-pass target
- the pacing checkpoints
- the decision matrix
- the anti-pattern list
- the illustrative scenario patterns below

---

# 2. The architecture mindset

For every scenario, ask:

1. What is the business requirement?
2. What is failing today?
3. What level of reliability is required?
4. Is guidance sufficient, or is enforcement required?
5. Which mechanism directly fixes the failure?
6. Where should that mechanism live?
7. Why are the alternatives weaker?

The most sophisticated answer is not necessarily correct. Prefer the smallest mechanism that satisfies the requirement.

## PROOF

| Principle | Question |
|---|---|
| **P - Proportionate** | Is the mechanism appropriately sized? |
| **R - Root-cause** | Does it fix the actual failure? |
| **O - Observable** | Can success/failure be detected? |
| **O - Off-the-shelf first** | Is an existing mechanism sufficient? |
| **F - Forced/programmatic where required** | Does the requirement demand a hard guarantee? |

Words such as **must**, **never**, **only if**, **guaranteed**, and **cannot** should trigger a search for deterministic enforcement. Do not turn this into a blanket rule that every behavior needs a hook: prompts remain appropriate for intent, role, priorities, explanation style, and other guidance-oriented behavior.

---

# 3. Agentic Architecture & Orchestration

## 3.1 Client-side agentic loop

For client-executed tools:

```text
Request
  |
  v
Claude response
  |
  v
stop_reason?
  |
  +-- tool_use --> execute requested tool(s)
  |                  |
  |                  v
  |              tool_result
  |                  |
  |                  v
  |              send again
  |
  +-- end_turn / other terminal state --> handle appropriately
```

Claude does not execute your client-side function itself. It emits a structured tool request. Your application executes the operation and returns the result. The loop continues while tool use is required.

A useful mnemonic is **STER: Send, Test, Execute, Return**.

Do not confuse `max_tokens` with orchestration. More output-token capacity does not create workers or parallel execution.

## 3.2 Tool-use details that matter

A response can contain multiple `tool_use` blocks. Independent tools can therefore be executed in parallel when the application and workflow permit it.

Do not parallelize when:

- one operation depends on another's result;
- operations can race on shared mutable state;
- ordering is a business requirement;
- concurrent side effects are unsafe.

## 3.3 Coordinator-worker

Use coordinator-worker when broad work can be divided into independent investigations and a central component must synthesize the results.

```text
                 Coordinator
              /      |       \
             /       |        \
        Worker A  Worker B  Worker C
             \       |       /
              \      |      /
                 Synthesis
```

Use a sequential pipeline when later stages genuinely depend on earlier stages. Use direct execution when decomposition adds unnecessary complexity.

## 3.4 Subagent delegation

A delegated worker should receive enough information to work independently:

- objective;
- constraints;
- scope;
- output contract;
- success criteria;
- relevant findings;
- source/provenance metadata when evidence matters.

Do not assume that a subagent automatically has the parent's entire context.

## 3.5 Programmatic gates

For refunds, deletion, production deployment, permission changes, financial actions, or other irreversible operations, separate model reasoning from authorization.

```text
Model recommendation
       |
       v
Application validation / policy gate
       |
       +-- reject --> stop / escalate
       |
       v
Authorized operation
```

A prompt saying "always verify first" is guidance. It is not automatically an authorization boundary.

---

# 4. Tool Design & MCP Integration

## 4.1 Tool design

A useful tool definition makes clear:

- purpose;
- when to use it;
- inputs and constraints;
- side effects;
- failure behavior;
- distinctions from similar tools.

Avoid unnecessary collections of near-identical tools. Reduce the model's choice space where practical, without creating a giant tool that combines unrelated responsibilities.

## 4.2 Structured errors

Do not swallow tool failures. Return enough information for safe recovery or escalation.

```json
{
  "type": "ORDER_NOT_FOUND",
  "attempted_query": "ORD-123",
  "partial_results": [],
  "alternatives": ["verify order ID", "search by customer ID"]
}
```

The exact schema is application-specific. The architectural principle is that failure should become useful state.

## 4.3 `tool_choice`

The current API supports these conceptual choices:

| Choice | Meaning |
|---|---|
| `auto` | Claude may use a tool or answer without using one |
| `any` | Claude must use one of the provided tools |
| `tool` | Claude must use the specified tool |
| `none` | Claude cannot use tools |

There is an important current-model caveat: some current Claude models do not support forced `any`/`tool` choice. In those cases, follow the current API documentation rather than assuming all models have identical controls.

`strict: true` is different: it guarantees that supported tool inputs conform to the declared JSON Schema. Mandatory invocation and schema-constrained input are separate concerns.

## 4.4 Tool prerequisites

If Tool B is valid only after Tool A, encode or enforce the dependency.

```text
get_customer
   -> lookup_order
   -> verify_eligibility
   -> process_refund
```

Do not solve a prerequisite failure by repeatedly retrying, making the prompt longer, or hiding the error.

## 4.5 MCP primitives

| Primitive | Role |
|---|---|
| Tool | Performs an action |
| Resource | Exposes information/context for retrieval |
| Prompt | Reusable prompt template / interaction pattern |

Tools act. Resources provide information. Prompts package reusable interaction patterns.

Resources are not limited to simple catalogs. They can expose server-provided information in forms appropriate for retrieval.

## 4.6 MCP configuration in Claude Code

A key scope distinction is:

```text
.mcp.json       -> project-scoped MCP configuration
~/.claude.json  -> user-scoped MCP configuration
```

Project configuration can be shared with the repository. User configuration is personal.

---

# 5. Claude Code Configuration & Workflows

The recurring exam question is not simply "what feature exists?" It is:

> **Which configuration surface has the correct scope and enforcement strength?**

## 5.1 Configuration matrix

| Need | Prefer |
|---|---|
| Project-wide persistent instructions | `CLAUDE.md` / `.claude/CLAUDE.md` |
| Personal persistent instructions | `~/.claude/CLAUDE.md` |
| Personal project-only instructions | `CLAUDE.local.md` |
| File/path-specific instructions | `.claude/rules/` with `paths` |
| Explicit slash workflow | Command or Skill |
| Reusable capability with supporting assets | Skill with `SKILL.md` |
| Hard tool/action restriction | Permissions and/or `PreToolUse` |
| Process a completed tool result | `PostToolUse` |
| Large/risky operation | Plan mode |

## 5.2 `CLAUDE.md`

Use persistent instructions for information Claude should consistently know, such as:

- build/test commands;
- architecture conventions;
- repository structure;
- coding standards;
- recurring project workflows.

Current Claude Code supports project `./CLAUDE.md` or `./.claude/CLAUDE.md`, user `~/.claude/CLAUDE.md`, and `CLAUDE.local.md` for personal project-specific instructions.

`CLAUDE.md` is guidance/context, not a hard security boundary.

## 5.3 Scoped rules

Use `.claude/rules/` when instructions apply only to selected paths or file types.

Example:

```yaml
---
paths:
  - "src/api/**/*.ts"
---

Validate API input and use the standard error format.
```

The architectural advantage is selective context rather than globally loading irrelevant rules.

## 5.4 Commands and Skills

A command is a user-invoked workflow. A Skill packages a reusable capability through `SKILL.md` and may include supporting files such as examples, templates, scripts, and references.

The distinction is about workflow packaging and invocation, not a claim that one is universally superior.

## 5.5 Hooks

### PreToolUse

Runs before a tool executes and can participate in allow/deny/modify decisions.

```text
Claude requests tool
       |
       v
PreToolUse
       |
  allow / deny / modify
       |
       v
  execution
```

### PostToolUse

Runs after a tool completes successfully and can process the result before it is returned to Claude's context.

It is **not** the mechanism for preventing a side effect that has already occurred. Use pre-execution controls for prevention.

## 5.6 Permissions

Permissions are an important enforcement surface for Claude Code. When the requirement is "Claude must not perform this action," do not rely only on natural-language instructions when a permission or hook can enforce the boundary.

## 5.7 Plan mode

Use planning for work that is large, architectural, cross-cutting, difficult to reverse, or risky. Small, obvious, reversible edits can often be executed directly.

## 5.8 CI/CD

A CI workflow should emphasize:

1. non-interactive execution;
2. least privilege;
3. deterministic machine-readable output;
4. explicit failure handling;
5. minimal destructive access.

Conceptually:

```text
CI trigger
 -> restricted Claude Code invocation
 -> limited tools
 -> task
 -> structured result
 -> CI decision
```

Do not invent CLI flags or environment variables. Verify the current Claude Code CLI reference when implementing automation.

---

# 6. Prompt Engineering & Structured Output

## 6.1 Prompt versus structured output

"Return valid JSON" is an instruction. When the application requires schema-constrained JSON, use the structured-output mechanism.

Current Anthropic structured outputs distinguish two complementary capabilities:

- **JSON outputs:** `output_config.format` with `type: "json_schema"` constrains Claude's response shape.
- **Strict tool use:** `strict: true` constrains tool names and inputs to the declared schema.

These can be used independently or together.

## 6.2 Tool invocation versus output structure

| Requirement | Mechanism |
|---|---|
| Guide behavior | Prompt |
| Guarantee final JSON shape | Structured JSON output |
| Guarantee tool input shape | `strict: true` |
| Require some tool invocation | `any` where supported |
| Require one specific tool | `tool` where supported |
| Prevent tool use | `none` |

Do not confuse "must call a tool" with "tool inputs must be schema-valid." They are different requirements.

## 6.3 Few-shot examples

Use a small set of strong, representative examples. Current Anthropic prompting guidance commonly starts around 3-5 examples for many tasks, but there is no universal magic number.

Good examples expose meaningful boundaries:

- normal case;
- edge case;
- ambiguity;
- required output format.

Do not add examples that only repeat the same behavior and consume context.

## 6.4 Extraction schemas

Real documents can be incomplete or ambiguous. Design valid schema states for uncertainty.

```json
{
  "invoice_number": "string | null",
  "invoice_date": "string | null",
  "total_amount": "number | null",
  "status": "confirmed | unclear | other"
}
```

The exact schema depends on the application. The principle is:

> Represent uncertainty rather than forcing the model to fabricate certainty.

## 6.5 Refinement

Weak:

> Try again and do better.

Strong refinement contains:

1. concrete input;
2. actual incorrect output;
3. specific failure;
4. expected behavior;
5. representative follow-up test.

Example:

```text
Failure: payment was classified as paid without explicit evidence.
Requirement: only classify paid when evidence exists.
Expected: return unclear when evidence is insufficient.
```

## 6.6 Message Batches

Message Batches are for asynchronous bulk work. Current Anthropic documentation describes a 50% discount versus standard API usage and processing that can take up to 24 hours.

Good uses:

- bulk classification;
- evaluation;
- document backfills;
- offline analysis;
- scheduled processing.

Bad fit:

- blocking interactive user requests;
- workflows that require immediate latency;
- operations where a user is waiting synchronously for the result.

---

# 7. Context Management & Reliability

## 7.1 Bigger context is not automatically better

A large context can contain irrelevant, stale, duplicated, or conflicting information. More tokens do not automatically create better reasoning.

Prefer high-signal context.

## 7.2 Structured state

Compact important state explicitly:

```json
{
  "goal": "Resolve customer refund request",
  "customer_id": "C123",
  "order_id": "O456",
  "verified": true,
  "refund_eligible": true,
  "refund_amount": 1499,
  "source": "order-service",
  "unresolved": []
}
```

Useful state includes goals, constraints, identifiers, dates, amounts, decisions, evidence, provenance, unresolved questions, and next actions.

## 7.3 Codebase exploration

Use the narrowest mechanism that answers the question:

| Need | Mechanism |
|---|---|
| Find paths/names | Glob / file discovery |
| Find text | Grep / content search |
| Inspect known file | Read |
| Understand architecture | Incremental exploration |

Do not load an entire repository when targeted exploration is sufficient.

## 7.4 Provenance

For important claims, preserve:

```text
Claim
Evidence
Source
Relevant excerpt
Freshness/date
Confidence
```

If sources conflict, keep the claims and evidence distinct. Do not silently merge incompatible evidence into one confident statement.

## 7.5 Human review

Use risk signals such as:

- low confidence;
- ambiguity;
- sensitive document type;
- financial/business impact;
- policy sensitivity;
- conflicting evidence;
- irreversible downstream action.

Random sampling is useful for measuring aggregate quality, but it is not equivalent to risk-based routing.

## 7.6 Escalation

Escalate when a human is requested, policy/authority is missing, evidence materially conflicts, safe progress is impossible, or the action exceeds system authority.

A concise escalation package should include case ID, root cause, relevant identifiers/amounts, evidence, recommended action, and why automation stopped.

---

# 8. Architecture decision matrix

| Situation | Prefer | Avoid |
|---|---|---|
| Project-wide guidance | `CLAUDE.md` | Huge prompts |
| Personal guidance | User `CLAUDE.md` | Committing private preferences |
| Personal project preference | `CLAUDE.local.md` | Shared global rule |
| Path-specific guidance | `.claude/rules/` | Global instructions |
| Explicit workflow | Command / Skill | Manual repetition |
| Reusable capability + assets | Skill | Permanent loading |
| Hard prohibition | Permissions / `PreToolUse` | Prompt-only prohibition |
| Post-execution normalization | `PostToolUse` | Manual cleanup |
| Independent work | Parallel execution | Unnecessary sequential turns |
| Broad independent research | Coordinator-worker | Uncontrolled mega-agent |
| Hard dependency | Sequential pipeline | Uncontrolled parallelism |
| Irreversible action | Programmatic gate | Prompt-only safeguard |
| Guaranteed JSON response | Structured outputs | Prose JSON request |
| Guaranteed tool-input schema | `strict: true` | Prompt-only validation |
| Mandatory tool use | `any` / `tool` where supported | `auto` |
| Optional tool use | `auto` | Forced invocation |
| Ambiguous extraction | Nullable / uncertainty state | Forced guessing |
| Context pressure | Structured state | Bigger context alone |
| Machine-readable CI | JSON / schema | Free-form output |
| Risk-based review | Confidence/type/impact | Random review only |
| Conflicting evidence | Preserve provenance | Silent merging |
| Large risky change | Plan mode | Immediate execution |
| Async bulk processing | Message Batches | Blocking user request |

---

# 9. Illustrative scenario patterns

> These are practice scenarios synthesized from the published domain areas, not claims about the actual confidential exam scenario bank or question content.

## Customer support

```text
Customer verification
 -> order lookup
 -> eligibility
 -> authorization gate
 -> action / escalation
```

Focus on prerequisites and deterministic authorization for high-impact actions.

## Claude Code development

Focus on repository exploration, instruction scope, path rules, skills, permissions, hooks, and context efficiency.

## Multi-agent research

```text
Coordinator
 -> Worker A
 -> Worker B
 -> Worker C
 -> evidence + provenance
 -> synthesis
```

Focus on independent work, isolation, evidence quality, and central aggregation.

## Developer productivity

Choose the configuration surface based on scope: always-on, user-private, path-specific, explicitly invoked, reusable, or enforced.

## CI/CD

```text
CI trigger
 -> non-interactive execution
 -> least-privilege tools
 -> structured result
 -> CI decision
```

## Structured extraction

```text
Document
 -> instructions + examples
 -> schema
 -> validation
 -> downstream processing OR human review
```

---

# 10. High-value anti-patterns

### Bigger model as structural fix

Wrong when the actual failure is orchestration, validation, tool design, context quality, or enforcement.

### Stronger prompt as a guarantee

Wrong when the requirement requires deterministic enforcement.

### Bigger context as a quality fix

Wrong when the real issue is noise, stale information, duplication, or conflict.

### `auto` for mandatory tool use

Wrong when invocation is itself a requirement, subject to the current model's supported `tool_choice` capabilities.

### Prose JSON for schema-critical output

Wrong when downstream software requires a schema-constrained result.

### `strict: true` as an authorization mechanism

Wrong interpretation. Strict tool use validates tool-input schema. It does not decide whether the operation is authorized. Authorization belongs in application policy, permissions, hooks, or other deterministic controls.

### PostToolUse as a prevention mechanism

Wrong interpretation. PostToolUse occurs after execution. Prevention belongs before execution.

### Sequential turns for independent work

Wrong when work can safely execute concurrently and latency matters.

### One mega-agent for broad independent work

Often inferior when independent tasks have clear boundaries and need central synthesis.

### Swallowing tool errors

Wrong because recovery and escalation lose information.

### Random human review

Weak when confidence and risk signals are available.

### "Try again"

Weak because it supplies no diagnosis or target behavior.

---

# 11. Question-solving method

## Step 1: Extract requirement words

Watch for **must, never, only if, guaranteed, independently, concurrently, machine-readable, non-interactive, private, project-wide, file-specific, irreversible**.

## Step 2: Identify the failure mode

| Failure | Likely mechanism |
|---|---|
| Skipped prerequisite | Orchestration / gate |
| Wrong tool | Tool design |
| Invalid tool input | Strict tool schema |
| Invalid final structure | Structured output |
| Wrong instruction scope | Configuration/rules |
| Dangerous action | Permissions / hook / application gate |
| Independent work is slow | Parallelism |
| Weak research trust | Provenance |
| Fabricated extraction | Nullable / uncertainty state |
| Noisy context | Selective retention / structured state |

## Step 3: Eliminate distractors

Reject answers that solve a different problem, add architecture without need, increase model size without a capability reason, add prompts where enforcement is required, or globally load instructions that should be scoped.

## Step 4: Apply PROOF

Compare the final options using proportion, root cause, observability, existing mechanisms, and required enforcement strength.

## Step 5: PICK-FLAG-MOVE

If a question becomes a time sink:

1. **PICK** the strongest remaining option.
2. **FLAG** it.
3. **MOVE** forward.
4. Review later if time permits.

---

# 12. Time-management strategy

60 questions in 120 minutes gives a two-minute average. A useful preparation target is to finish the first pass around 105 minutes and reserve about 15 minutes for review.

| Time | Target |
|---:|---:|
| 15 min | Q9 |
| 30 min | Q18 |
| 60 min | Q36 |
| 90 min | Q52 |
| 105 min | Q60 answered |
| 105-120 min | Review |

These are preparation targets, not official pacing rules.

During review, change an answer when you can identify a concrete reasoning error: missed requirement word, wrong scope, missed dependency, or guidance/enforcement confusion. Do not change an answer merely because another option feels better.

---

# 13. Study workflow

### Pass 1: Concepts

Master the mechanism vocabulary.

### Pass 2: Decision boundaries

Practice comparing:

- command vs skill;
- rule vs `CLAUDE.md`;
- prompt vs hook;
- permission vs guidance;
- tool vs resource;
- sequential vs parallel;
- single agent vs coordinator-worker;
- bigger context vs structured state;
- prose JSON vs structured output;
- synchronous request vs batch.

### Pass 3: Scenario practice

For every question record:

```text
Requirement:
Failure mode:
Required reliability:
Correct mechanism:
Correct scope:
Why correct:
Why distractors fail:
PROOF principle:
```

### Pass 4: Timed mocks

Review every incorrect answer, every guessed-correct answer, and every question that consumed excessive time.

### Pass 5: Final revision

Prioritize PROOF, the decision matrix, orchestration, tools/MCP, Claude Code surfaces, structured output, context/reliability, anti-patterns, and pacing.

### Eligibility check

Before booking, verify that you currently meet Anthropic's partner eligibility and registration requirements.

---

# 14. Final checklist

- [ ] I know the 60-question / 120-minute structure.
- [ ] I know total seat time is approximately 135 minutes.
- [ ] I understand multiple choice vs scenario-based multiple response.
- [ ] I know the exam is English only.
- [ ] I understand the current Partner Network eligibility requirement.
- [ ] I meet the minimum age requirement of 18.
- [ ] I know the 720 scaled passing score.
- [ ] I know the five domain weights.
- [ ] I can explain the client-side agentic loop.
- [ ] I understand parallel tool calls and their dependency limits.
- [ ] I understand coordinator-worker and sequential pipelines.
- [ ] I understand subagent context boundaries.
- [ ] I recognize when programmatic gates are required.
- [ ] I understand `auto`, `any`, `tool`, and `none` and current model caveats.
- [ ] I understand `strict: true`.
- [ ] I distinguish MCP tools, resources, and prompts.
- [ ] I understand project vs user MCP configuration.
- [ ] I know `CLAUDE.md`, `CLAUDE.local.md`, and `.claude/rules/`.
- [ ] I understand commands versus skills.
- [ ] I understand PreToolUse versus PostToolUse.
- [ ] I understand permissions as an enforcement surface.
- [ ] I know when plan mode is appropriate.
- [ ] I understand structured JSON output.
- [ ] I can distinguish structured response output from strict tool inputs.
- [ ] I can represent extraction uncertainty.
- [ ] I can select useful few-shot examples.
- [ ] I can provide targeted refinement feedback.
- [ ] I understand when Message Batches are appropriate.
- [ ] I know why bigger context is not a universal quality fix.
- [ ] I can design structured state.
- [ ] I preserve provenance.
- [ ] I can route high-risk cases to human review.
- [ ] I can apply PROOF to scenario questions.
- [ ] I can maintain pacing.

---

# Official documentation to verify before publication

Use the current official Anthropic documentation as the authority for product behavior and the current CCA-F certification guide/certification portal as the authority for exam facts and scope:

- Anthropic Claude API tool use
- Tool-use loop and stop reasons
- Tool choice and strict tool use
- Structured outputs
- Message Batches
- Claude Code memory / `CLAUDE.md`
- Claude Code rules
- Claude Code skills
- Claude Code hooks
- Claude Code permissions
- Claude Code MCP
- Current CCA-F certification guide and certification portal

## Maintenance rule

Claude and Claude Code evolve quickly. If this document conflicts with current official documentation, **current official documentation wins**.

When maintaining this guide:

1. Verify product behavior against current official docs.
2. Verify exam facts against the current CCA-F exam guide, certification page, and certification FAQ.
3. Remove deprecated API/configuration terminology.
4. Label preparation heuristics as heuristics, not official exam rules.
5. Do not add recalled confidential exam questions or answer keys.
6. Re-check model-specific limitations before publishing API examples.

## Scope

This is an independent preparation guide. It does not reproduce confidential examination questions, answer keys, or proprietary examination content.

> **Final mental model: Requirement -> failure mode -> required reliability -> mechanism -> correct scope -> PROOF comparison -> answer.**
