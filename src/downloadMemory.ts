import { execSync } from "child_process"

console.log("Downloading memory snapshot...")

try {

  execSync(
    "shelby download ai-memory-demo downloaded-memory.json",
    { stdio: "inherit" }
  )

} catch (err) {

  console.log("Download failed")

}
