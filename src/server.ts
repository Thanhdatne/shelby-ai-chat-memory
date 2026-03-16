import express from "express"
import cors from "cors"
import multer from "multer"
import { execSync } from "child_process"
import { getStoredMemories } from "./explorer"

const app = express()

app.use(cors())
app.use(express.static("public"))

const upload = multer({ dest: "uploads/" })

app.post("/upload", upload.single("memory"), (req, res) => {

  const file = req.file?.path

  if (!file) {

    res.status(400).send("No file")

    return

  }

  const name = "ai-memory-" + Date.now()

  try {

    execSync(
      `shelby upload ${file} --name ${name}`,
      { stdio: "inherit" }
    )

    res.json({ blob: name })

  } catch {

    res.status(500).send("Upload failed")

  }

})

app.get("/memories", (req, res) => {

  const memories = getStoredMemories()

  res.json(memories)

})

app.listen(3000, () => {

  console.log("Server running")

  console.log("UI http://localhost:3000")

  console.log("Explorer http://localhost:3000/explorer.html")

})
