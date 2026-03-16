# Shelby AI Chat Memory

Prototype exploring **AI conversation memory stored on Shelby decentralized storage**.

This project demonstrates how AI agents can persist conversation history using **Shelby blob storage**.

Instead of storing chat logs on centralized databases, conversations are packaged into JSON memory snapshots and uploaded to Shelby as verifiable blobs.

# 📋Concept

AI systems increasingly rely on persistent memory:

• conversation history
• reasoning traces
• agent state snapshots

Shelby provides a decentralized storage layer capable of storing these datasets as **durable and verifiable blobs**.

This prototype simulates an AI system that generates conversations and stores them on Shelby.

# Architecture

AI Agent
↓
Conversation Snapshot (JSON)
↓
Shelby Upload (Blob Storage)
↓
Verifiable Storage Network

# Features

• Upload AI memory snapshots to Shelby
• Autonomous AI agent generating conversations
• Web interface for manual uploads
• CLI interaction with Shelby network
• Listing stored blobs

# Project Structure

```
shelby-ai-chat-memory
│
├── public
│   └── index.html        # simple upload UI
│
├── assets
│   └── example-memory.json
│
└── src
    ├── server.ts         # API server
    ├── agent.ts          # AI conversation generator
    ├── memory.ts         # memory schema
    ├── uploader.ts       # Shelby upload wrapper
    └── scheduler.ts      # autonomous agent
```

# Requirements

Node.js v22+
Shelby CLI
Aptos CLI

Install Shelby CLI first:

https://docs.shelby.xyz/tools/cli

# Installation

Clone the repository

```
git clone https://github.com/Thanhdatne/shelby-ai-chat-memory
cd shelby-ai-chat-memory
```

Install dependencies

```
npm install
```

# 🛠️Setup Shelby

Initialize Shelby configuration:

```
shelby config init
```

Fund the dev wallet using:

ShelbyUSD faucet
Aptos devnet faucet

# Run Web Server

```
npm start
```

Open:

```
http://localhost:3000
```

Upload a memory snapshot JSON to Shelby.

# Run Autonomous AI Agent

```
npm run agent
```

The agent will:

• generate simulated conversations
• package them as memory snapshots
• upload them to Shelby

every 30 seconds.

# Example Memory Snapshot

```
{
  "session": "chat-001",
  "messages": [
    { "role": "user", "content": "What is Shelby?" },
    { "role": "assistant", "content": "Shelby is decentralized blob storage." }
  ],
  "timestamp": "2026-03-16"
}
```

# Why Shelby

AI systems generate large volumes of dynamic data.

Shelby offers a decentralized infrastructure for storing these datasets as verifiable blobs without relying on centralized storage providers.

This prototype explores Shelby as a **memory layer for AI agents**.

# Status

Experimental prototype built while exploring Shelby developer tooling.

Contributions and ideas welcome.
