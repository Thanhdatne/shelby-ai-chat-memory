# Shelby AI Long-Term Memory

A small developer experiment exploring how **AI agents can store long-term memory on Shelby decentralized storage**.

Instead of saving reasoning traces and conversation logs in centralized databases, this project demonstrates how they can be stored as **verifiable blobs on Shelby**.

## ⚡Motivation

AI systems increasingly rely on persistent memory:

* conversation history
* reasoning traces
* research summaries
* knowledge snapshots

Most AI infrastructure stores this data in centralized databases.

Shelby introduces a different model: **decentralized blob storage with cryptographic verification**.

This repository explores the idea of using Shelby as a **long-term memory layer for AI agents**.

## 📋Concept

An AI agent periodically generates a **memory snapshot** describing its state or knowledge.

Example memory snapshot:

```json
{
  "agent": "research-agent",
  "topic": "Shelby decentralized storage",
  "summary": "Shelby provides decentralized blob storage with verifiable commitments.",
  "timestamp": "2026-03-16T10:00:00Z"
}
```

This snapshot is serialized as JSON and uploaded to Shelby as a **blob**.

Shelby returns metadata including:

* Merkle root
* chunk commitments
* storage duration

These allow the memory snapshot to be **verified and retrieved later**.

## Requirements

Before running this project you must install:

Node.js v22+
Shelby CLI
Aptos CLI

Shelby CLI guide:
https://docs.shelby.xyz/tools/cli

## Installation

Clone the repository

```
git clone https://github.com/YOURNAME/shelby-ai-longterm-memory
cd shelby-ai-longterm-memory
```

Install dependencies

```
npm install
```

Build the project

```
npm run build
```

## 🛠️Setup

Create configuration

```
shelby config init
```

This creates a configuration and wallet for development.

Fund the address using:

ShelbyUSD faucet
https://docs.shelby.xyz/apis/faucet/shelbyusd

Aptos faucet
https://docs.shelby.xyz/apis/faucet/aptos

## 💻Usage

Upload AI memory snapshot

```
npm run upload
```

List stored memories

```
npm run list
```

Download memory

```
npm run download
```

## Example Workflow

1. AI agent generates a knowledge snapshot
2. Snapshot is saved as JSON
3. JSON file is uploaded to Shelby
4. Shelby stores it as a blob
5. The data can later be verified and retrieved

## Future Work

Possible extensions:

* automated memory snapshots
* integration with LLM agents
* embedding storage
* decentralized AI dataset archives

## Status

Experimental prototype built while exploring Shelby developer tooling.

