import { execSync } from "child_process"

export function getStoredMemories() {

  try {

    const result = execSync("shelby list").toString()

    const lines = result.split("\n").filter(l => l.includes("ai-memory"))

    return lines

  } catch {

    return []

  }

}
