import { MemorySnapshot } from "./memory"

export function generateConversation(): MemorySnapshot {

  const questions = [
    "What is decentralized storage?",
    "Explain Shelby blob storage.",
    "Why does AI need persistent memory?",
    "How does verifiable storage work?"
  ]

  const question =
    questions[Math.floor(Math.random() * questions.length)]

  return {

    session: "chat-" + Date.now(),

    messages: [
      {
        role: "user",
        content: question
      },
      {
        role: "assistant",
        content:
          "Shelby stores data as decentralized blobs that can be verified cryptographically."
      }
    ],

    timestamp: new Date().toISOString()

  }

}
