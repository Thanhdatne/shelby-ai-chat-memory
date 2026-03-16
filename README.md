# Shelby AI Chat Memory

A simple experiment exploring how **AI chat history can be stored using Shelby decentralized storage**.

Instead of saving conversations in centralized databases, this project stores them as **verifiable blobs on Shelby**.

## ⚡Motivation

AI agents generate large amounts of conversational data.

Typical storage solutions rely on:

* centralized databases
* cloud storage
* application servers

This creates several issues:

* lack of verifiability
* centralized control
* limited transparency

Shelby offers an alternative approach: **decentralized blob storage with cryptographic integrity guarantees**.

This repository demonstrates a simple idea:

> What if AI conversation memory could live on decentralized storage?

## 📋Concept

Each conversation session is serialized as JSON and uploaded as a **blob** to Shelby.

Example stored conversation:

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
      "content": "Shelby is a decentralized blob storage network."
    }
  ],
  "timestamp": "2026-03-16"
}
```

Shelby returns:

* Merkle root
* blob commitments
* storage metadata

This allows the conversation data to be **verified and retrieved later**.

## ⚡Requirements

Before running this project you need:

* Node.js v22+
* Shelby CLI
* Aptos CLI

Shelby CLI guide:

https://docs.shelby.xyz/tools/cli

## Installation

Clone the repository

```
git clone https://github.com/YOURNAME/shelby-ai-chat-memory
cd shelby-ai-chat-memory
```

Install dependencies

```
npm install
```

Build the project

```
npm run build
```

## 🛠️ Setup

Create configuration

```
npm run config
```

This generates a `.env` file containing:

* Aptos account
* private key
* Shelby RPC endpoint

Fund the account using:

ShelbyUSD faucet
https://docs.shelby.xyz/apis/faucet/shelbyusd

Aptos faucet
https://docs.shelby.xyz/apis/faucet/aptos

## 💻Usage

Upload chat memory

```
npm run upload
```

List stored chats

```
npm run list
```

Download a chat session

```
npm run download
```

## Example Workflow

1. A user interacts with an AI agent
2. The conversation is stored as structured JSON
3. The JSON file is uploaded to Shelby as a blob
4. The Merkle root verifies the stored data
5. The conversation can later be retrieved and verified

## Why Shelby for AI Systems?

AI infrastructure increasingly needs:

* persistent storage
* verifiable data
* decentralized infrastructure

Shelby can serve as a **storage layer for AI-generated data**, including:

* chat logs
* reasoning traces
* datasets
* embeddings
* model outputs

## Future Improvements

Possible extensions of this idea:

* automatic conversation uploads
* LLM integration
* vector embeddings stored on Shelby
* decentralized AI memory layer

## Status

Experimental prototype.

Built while exploring Shelby developer tools.
