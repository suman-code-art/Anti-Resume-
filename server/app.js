const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root test route
app.get("/", (req, res) => {
  res.send("✅ Backend is working fine!");
});

// Post challenge (for companies to add challenges)
app.post("/api/post-challenge", (req, res) => {
  const { title, description } = req.body;
  console.log("📩 New Challenge Received:");
  console.log("Title:", title);
  console.log("Description:", description);
  res.send({ message: "✅ Challenge received successfully!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

