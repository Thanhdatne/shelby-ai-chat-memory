export interface ChatMessage {

  role: "user" | "assistant"
  content: string

}

export interface MemorySnapshot {

  session: string
  messages: ChatMessage[]
  timestamp: string

}
