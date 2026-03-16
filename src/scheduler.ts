import { generateConversation } from "./agent"
import { uploadMemory } from "./uploader"

const INTERVAL = 30000

console.log("AI memory agent started")

setInterval(() => {

  const memory = generateConversation()

  console.log("Generated conversation")
  console.log(memory)

  uploadMemory(memory)

}, INTERVAL)
