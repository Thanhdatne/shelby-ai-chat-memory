import fs from "fs"
import { execSync } from "child_process"

export function uploadMemory(snapshot: any) {

  const file = "memory.json"

  fs.writeFileSync(file, JSON.stringify(snapshot, null, 2))

  const name = "ai-memory-" + Date.now()

  try {

    execSync(
      `shelby upload ${file} --name ${name}`,
      { stdio: "inherit" }
    )

    return name

  } catch {

    console.log("Shelby upload failed")

    return null

  }

}
