# AI App Internals: Is MCP the Heart?

> A standalone technical debate about stripping AI applications down to their essential components and asking whether MCP can become the central capability layer.

## Format

Two-person technical debate.

- **Host / Manager:** challenges assumptions and pushes the developer to define the architecture precisely.
- **Developer:** proposes an increasingly minimal model of an AI application centred around MCP.

**Estimated duration:** 25–35 minutes

---

# Opening: Strip the AI App Down

**Manager:**

Let's forget the branding around ChatGPT, Claude, Cursor and other AI applications.

If we strip away the user interface, what is actually left?

**Developer:**

A model and the capabilities it can access.

But I want to go further.

For this discussion, remove the UI. Remove application memory. Keep RAG as its own architecture, but assume it can be exposed through a custom MCP server.

Then MCP becomes the central capability layer.

**Manager:**

So your abstraction is deliberately narrower than a conventional AI application architecture.

**Developer:**

Exactly.

For this discussion:

> **MCP is the heart of the AI application.**

---

# Act 1: The Minimal Architecture

The architecture becomes:

```text
                    AI APP
                      │
                     LLM
                      │
                 ┌────▼────┐
                 │   MCP   │
                 │  HEART  │
                 └────┬────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
      Custom        GitHub        Slack
       RAG            MCP           MCP
       MCP
        │
        ▼
    Vector DB
```

The important distinction is that **RAG is not MCP**.

RAG remains a retrieval architecture:

```text
Query
  ↓
Retrieve
  ↓
Rank
  ↓
Context
  ↓
Answer / result
```

But the retrieval capability can be exposed to the client through MCP:

```text
LLM / Human
     ↓
    MCP
     ↓
Custom RAG MCP
     ↓
Vector DB
```

MCP is therefore the interface through which the application can consume the RAG capability.

---

# Act 2: What Is MCP Doing?

**Manager:**

Let's be precise. MCP isn't the database, RAG system, GitHub, Slack or the model.

**Developer:**

Correct.

MCP provides the standardised protocol boundary through which the client can discover and invoke capabilities exposed by an MCP server.

The server might expose:

```text
Tools
Resources
Prompts
```

The client does not need to understand the internal implementation.

It only needs to understand the MCP protocol.

---

# Act 3: The MCP Ecosystem

Imagine an application that connects to any number of MCP servers:

```text
                    MCP Client
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
    Commercial       Community        Self-hosted
       MCP              MCP               MCP
        │               │                  │
        └───────────────┼──────────────────┘
                        ▼
               Tools / Resources /
                    Prompts
```

The server could be:

- commercial
- community-created
- enterprise-owned
- self-hosted
- personal
- internal
- public

The client does not need to know what the server does internally.

It discovers what the server declares through MCP.

---

# Act 4: Remove the AI Model from the Consumer

**Manager:**

Now remove the model from the consumer side entirely.

What happens?

**Developer:**

The application can still be useful.

A user can connect to an MCP server, discover its capabilities, provide the required parameters and directly inspect the result.

```text
Traditional AI interaction

Human
  ↓
Natural language
  ↓
LLM reasoning
  ↓
MCP
  ↓
Interpretation
  ↓
Human
```

Versus:

```text
MCP-native interaction

Human
  ↓
MCP
  ↓
Raw / structured result
  ↓
Human judgement
```

This removes the need for a model to translate natural language into an action and then interpret the result for the user.

---

# Act 5: Why Would a Human Want That?

**Manager:**

Why remove the reasoning layer? Isn't natural language exactly what makes AI useful?

**Developer:**

For many tasks, yes.

But there are situations where the human wants direct control and direct evidence.

The model may choose a tool, construct parameters, interpret the output and present a conclusion.

The human therefore sees a processed answer.

With direct MCP access, the human can:

1. See the available capability.
2. Understand its request schema.
3. Decide what parameters to provide.
4. Execute the operation.
5. Inspect the returned data.
6. Make the final judgement.

The philosophy is:

> **Don't ask the model to decide when the human can directly operate the capability.**

---

# Act 6: The Economic Layer

The consumer application also does not require a model subscription.

That means the consumer avoids a mandatory consumption layer such as:

```text
LLM tokens
+
Reasoning tokens
+
Context consumption
+
Agent execution
```

Instead:

```text
Consumer
   ↓
MCP Client
   ↓
MCP Provider
```

The MCP provider may still charge for its own service.

For example, a commercial MCP server may require an enterprise licence or paid API access.

A GitHub-based MCP integration might instead work using the user's existing GitHub credentials and permissions.

The principle is:

> **The MCP client does not add mandatory model-consumption cost at the consumer layer.**

This does not mean every MCP service is free.

It means the AI model is not a required middleman.

---

# Act 7: The Community Possibility

The ecosystem can also include community-hosted knowledge and capability servers.

Imagine someone has a large private collection of books.

They build an MCP server exposing those resources.

Another person connects the server to the MCP client and consumes the exposed capability directly.

Or someone has a large historical newspaper archive and builds an MCP server with RAG.

A user can query the exposed retrieval capability and receive the relevant results and citations.

The important point is that the community ecosystem is **not the product itself**.

The product remains the universal MCP client.

Community servers are simply one source of capabilities.

---

# Act 8: One Client, Many MCP Servers

The real productivity proposition is:

> **One client for every MCP. No model required.**

Instead of opening different applications for different services:

```text
GitHub MCP
Slack MCP
Jira MCP
AWS MCP
Company RAG MCP
Personal MCP
```

all capabilities appear in one place.

The user connects once, discovers the server and interacts with its declared capabilities.

---

# Act 9: The MCP Client UX

The interface should not look like ChatGPT.

It should look closer to a combination of **Swagger UI and Postman concepts designed specifically for MCP**.

After connecting a server:

```text
MCP Server: GitHub

Tools       24
Resources    8
Prompts      3
```

Selecting a tool should dynamically generate its input form from the tool's schema.

For example:

```text
search_repositories

query:       [.....................]
organization:[.....................]
limit:       [.....................]

             [ Execute ]
```

Then the user sees:


```text
[ Structured ] [ Raw MCP ]

[ Save Request ] [ Replay ] [ Copy JSON ]
```

The application does not need to know what `search_repositories` means internally.

It only needs to understand the protocol and schema.

---

# Act 10: The Killer Workflow

The product's core workflow became:

> **Connect → Discover → Understand → Execute → Inspect → Save → Replay**

The goal is that within roughly 30 seconds a user can:

1. Connect an MCP server.
2. Discover tools, resources and prompts.
3. Understand their schemas.
4. Enter parameters.
5. Execute a request.
6. Inspect the structured and raw response.
7. Save the request.
8. Replay it later.

This is not an AI assistant workflow.

It is a **direct MCP interaction workflow**.

---

# Act 11: The Technical Example

The strongest developer-facing example is production incident investigation.

Imagine these MCP servers:

```text
MCP Client
│
├── Datadog MCP
├── GitHub MCP
├── Jira MCP
├── Kubernetes MCP
├── PostgreSQL MCP
└── AWS MCP
```

An engineer can independently query:

```text
Datadog
→ production errors

GitHub
→ recent commits / PRs

Kubernetes
→ pod events

PostgreSQL
→ database state

Jira
→ incident information
```

The MCP client returns the evidence.

The engineer decides what the evidence means.

There is no requirement for an LLM to produce a final diagnosis.

That demonstrates the core philosophy better than a generic chatbot example.

---

# Act 12: Security Philosophy

The application is intentionally **non-agentic**.

It does not need autonomous authority over the user's machine.

It should not inherently need permission to:

- modify source code
- execute shell commands
- read arbitrary local files
- write arbitrary local files
- autonomously invoke unrelated tools
- make decisions on behalf of the user

The responsibility boundary becomes:

```text
MCP Server
     ↓
Defines authority
     ↓
MCP Client
     ↓
Invokes securely
     ↓
Human
     ↓
Makes judgement
```

A useful principle is:

> **Server controls authority. Client controls invocation. Human controls judgement.**

The server remains responsible for its authentication model, key validity, permissions, scopes and exposed capabilities.

The client remains responsible for secure invocation, credential protection, transport security, safe storage and preventing credential leakage.

---

# Act 13: Generic MCP Compatibility

**Manager:**

Can one generic client really consume commercial, community and self-hosted MCP servers without knowing their implementation details?

**Developer:**

That is the point of the protocol abstraction.

The client needs to understand MCP rather than each server's internal implementation.

Conceptually:

```text
MCP Client
     │
MCP Protocol
     │
 ┌───┼───────────────┐
 ▼   ▼               ▼
Tool Resource      Prompt
```

The server declares its capabilities and schemas.

The client renders them dynamically.

The implementation details stay behind the server boundary.

There are still real client-engineering challenges:

- supported MCP transports
- authentication flows
- credential security
- schema rendering
- resources and content types
- errors
- pagination where applicable
- notifications
- large responses
- protocol-version compatibility

But these are **generic MCP client concerns**, not requirements to understand every server individually.

---

# Act 14: Is MCP Really the Heart?

**Manager:**

Now I want to challenge your central claim.

Is MCP actually the heart, or are we simply choosing MCP because it is the current protocol we are discussing?

**Developer:**

For this architecture, MCP is the heart because it is the capability boundary connecting the model or human to external functionality.

The model itself doesn't need to know whether it is talking to GitHub, Slack, a RAG system, a database or some future capability.

The client can discover and invoke those capabilities through MCP.

That gives us:

```text
Model / Human
       │
       ▼
      MCP
       │
 ┌─────┼─────┐
 ▼     ▼     ▼
RAG   GitHub Slack
```

MCP therefore becomes the common interface around the capability ecosystem.

---

# Act 15: The Bigger Question

If the following become increasingly standardised:

```text
Models
   ↓
Available from many providers

RAG
   ↓
Available as a service / MCP capability

Tools
   ↓
Exposed through MCP

External systems
   ↓
Exposed through MCP

Inference
   ↓
Local / private / cloud
```

then what proprietary technology is actually left inside an AI application?

That is the deeper question behind this entire discussion.

Many AI applications may increasingly become:

```text
Model
   +
Capability orchestration
   +
Standard protocol
   +
User experience
```

And if the capability layer becomes standardised, the proprietary application layer may become much thinner than it initially appears.

---

# Act 16: The Productivity Tool Thesis

This led to the concrete open-source product concept:

> **A universal MCP client that lets humans directly consume MCP capabilities without requiring an AI model at the consumer layer.**

The application is useful because it provides:

### One place

Connect multiple MCP servers from one application.

### Transparency

See tools, resources, prompts, schemas and raw responses.

### Control

The user chooses what to execute and what conclusions to draw.

### No mandatory model cost

No Claude, GPT, Gemini or other LLM subscription is required to use the core client.

### Security boundary

The application can deliberately remain non-agentic and avoid arbitrary local machine authority.

### Protocol abstraction

The client can consume commercial, community and self-hosted MCP servers through the same MCP interface.

---

# Closing Debate

**Manager:**

So your argument is not that MCP replaces AI models.

**Developer:**

Correct.

My argument is that MCP can become the **standard capability layer** through which models and humans access external functionality.

And once that happens, an AI application does not necessarily need to contain every capability itself.

It can consume an ecosystem of capabilities.

**Manager:**

And your open-source application is the human-facing client for that ecosystem.

**Developer:**

Exactly.

The simplest expression is:

```text
                 MCP Ecosystem
                       │
       ┌───────────────┼───────────────┐
       ▼               ▼               ▼
    GitHub           Slack          Custom RAG
       │               │               │
       └───────────────┼───────────────┘
                       ▼
                  MCP Client
                       │
                       ▼
                     Human
```

**Manager:**

Then the real product question is no longer:

> "Can we build an AI assistant?"

It becomes:

> **"Can we make direct interaction with the MCP ecosystem so useful that a human wants a dedicated client for it?"**

And that is a much more focused product question.

---

# Core Thesis

> **MCP can serve as the heart of a model-independent AI capability ecosystem, while a dedicated client can expose those capabilities directly to humans without requiring an LLM at the consumer layer.**

The value is not that MCP makes everything free or eliminates AI models everywhere.

The value is that it can separate:

```text
Capability
from
Model
from
Client
from
Human judgement
```

That separation enables a model-free consumption path, multiple MCP providers in one application, direct inspection of protocol results and a deliberately non-agentic security posture.

---

## Discussion Questions

1. If MCP becomes the standard capability layer, what remains proprietary inside AI applications?
2. Can MCP become a universal interface for both humans and models?
3. Does direct MCP access provide enough productivity value without natural-language reasoning?
4. How much of today's AI application value comes from the model versus the capability layer?
5. Could a model-free MCP client become useful as a daily developer tool?
6. Where should authentication and authorisation boundaries exist between client and server?
7. Can a generic MCP client safely support arbitrary third-party MCP servers?
8. Does MCP reduce vendor lock-in between AI applications and model providers?
9. What happens if RAG, databases and enterprise systems are all exposed through MCP?
10. If the protocol becomes standard, where does the next durable layer of differentiation live?

---

## Important Distinctions

- **MCP is not RAG.** RAG is a retrieval architecture; MCP can expose that retrieval capability.
- **MCP is not an LLM.** It is a protocol layer for capabilities, tools and resources.
- **No model cost does not mean no service cost.** MCP providers can still charge for their infrastructure or data.
- **Non-agentic does not mean security is automatic.** The client still has to securely handle credentials, transports, responses and potentially untrusted servers.
- **This is an architectural/product thesis, not a claim that every AI application is literally only UI + MCP.** The discussion intentionally uses a stripped-down abstraction to examine how much of an AI application's capability layer can be standardised and externalised through MCP.
