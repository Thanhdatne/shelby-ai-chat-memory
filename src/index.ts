export interface Message {
  role: "user" | "assistant"
  content: string
}

export interface ChatSession {
  session: string
  messages: Message[]
  timestamp: string
}

export function createExampleChat(): ChatSession {
  return {
    session: "chat-001",
    messages: [
      {
        role: "user",
        content: "What is Shelby?"
      },
      {
        role: "assistant",
        content: "Shelby is a decentralized blob storage network."
      }
    ],
    timestamp: new Date().toISOString()
  }
}
