# Shelby AI Chat Memory

Prototype exploring **AI conversation memory stored on Shelby decentralized storage**.

This project demonstrates how AI agents can persist conversation history using **Shelby blob storage** instead of traditional centralized databases.

AI conversations are packaged into **memory snapshots (JSON)** and uploaded to Shelby as **verifiable blobs**.

# 🚀 Concept

Modern AI systems require persistent memory:

•  conversation history  
•  reasoning traces  
•  agent state snapshots  
•  contextual knowledge  

Most systems store this data in centralized databases.

This project explores a different approach:

Using **Shelby decentralized storage** as a **memory layer for AI agents**.

#  Architecture

```
           AI Agent
             │
             ▼
      Conversation Snapshot
         (JSON Memory)
             │
             ▼
       Shelby Blob Storage
             │
             ▼
       Memory Explorer UI
```

Workflow:

1️⃣ AI agent generates a conversation  
2️⃣ Conversation is packaged as a JSON memory snapshot  
3️⃣ Snapshot is uploaded to Shelby  
4️⃣ Stored blobs can be explored using the Memory Explorer UI  

# ✨ Features

•  Upload AI memory snapshots to Shelby  
•  Autonomous AI agent generating conversations  
•  Simple web interface for manual uploads  
•  Shelby CLI integration  
•  Memory Explorer UI to inspect stored blobs  

# 📁 Project Structure

```text
shelby-ai-chat-memory
│
├── public
│   ├── index.html
│   └── explorer.html
│
├── assets
│   └── example-memory.json
│
└── src
    ├── server.ts
    ├── agent.ts
    ├── memory.ts
    ├── uploader.ts
    ├── scheduler.ts
    └── explorer.ts
```

# ⚙️ Requirements

 Node.js v22+

 Shelby CLI  
https://docs.shelby.xyz/tools/cli

🔗 Aptos CLI  
https://aptos.dev/tools/aptos-cli

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/Thanhdatne/shelby-ai-chat-memory
cd shelby-ai-chat-memory
```

Install dependencies

```bash
npm install
```

# 🔧 Setup Shelby

Initialize Shelby configuration:

```bash
shelby config init
```

Fund your dev wallet using:

💰 ShelbyUSD faucet  
💰 Aptos devnet faucet  

# ⚡ Quick Demo

Start the server:

```bash
npm start
```

Open in browser:

```
http://localhost:3000
```

Upload a memory snapshot JSON to Shelby.

# 🔎 Memory Explorer

The project also includes a simple explorer UI.

Open:

```
http://localhost:3000/explorer.html
```

This page lists memory blobs stored on Shelby.

# Autonomous AI Agent

The project includes a simulated AI agent that generates conversations automatically.

Run the agent:

```bash
npm run agent
```

The agent will:

• generate conversations  
• package them as memory snapshots  
• upload them to Shelby  

every **30 seconds**.

# Example Memory Snapshot

```json
{
  "session": "chat-001",
  "messages": [
    {
      "role": "user",
      "content": "What is Shelby?"
    },
    {
      "role": "assistant",
      "content": "Shelby is decentralized blob storage."
    }
  ],
  "timestamp": "2026-03-16"
}
```

# Why Shelby?

AI systems produce large volumes of dynamic data.

Shelby provides a decentralized infrastructure capable of storing this data as **verifiable blobs** across a distributed network.

This project explores Shelby as a **long-term memory layer for AI agents**.

# Future Work

Potential extensions for this prototype:

•  AI agent long-term memory  
•  storing reasoning traces  
•  Shelby dataset explorer  
•  decentralized AI training datasets  
•  integration with real AI models  

# Status

Experimental prototype built while exploring **Shelby developer tooling**.

# Author

Built by  
https://github.com/Thanhdatne
