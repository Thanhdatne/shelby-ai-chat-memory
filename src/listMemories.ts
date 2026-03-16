import { execSync } from "child_process"

console.log("Listing blobs stored on Shelby...")

try {

  execSync("shelby list", { stdio: "inherit" })

} catch (err) {

  console.log("Failed to list blobs")

}
