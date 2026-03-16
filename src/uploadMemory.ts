import { execSync } from "child_process"

console.log("Uploading memory snapshot to Shelby...")

try {

  execSync("shelby upload assets/example-memory.json --name ai-memory-demo", {
    stdio: "inherit"
  })

} catch (err) {

  console.log("Upload failed. Make sure Shelby CLI is installed.")

}
