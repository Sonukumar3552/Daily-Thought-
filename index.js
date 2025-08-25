const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// In-memory data
let posts = [
  { id: "1a", username: "sonu",  content: "I love coding" },
  { id: "2b", username: "Maahi", content: "Hard work matters for success" },
  { id: "3c", username: "bob",   content: "Good morning" },
  { id: "4d", username: "Alis",  content: " I got selected my first internship!" },
];

// ------------- Helpers -------------
const makeId = () => Math.random().toString(36).slice(2, 6) + Date.now().toString(36).slice(-2);

// ------------- Routes -------------
// All posts
app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

// New post form
app.get("/posts/new", (req, res) => {
  res.render("new");
});

// Create post
app.post("/posts", (req, res) => {
  const { username = "anonymous", content = "" } = req.body;
  posts.push({ id: makeId(), username: username.trim(), content: content.trim() });
  res.redirect("/posts");
});

// Show single post (optional detail page)
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).send("Post not found");
  res.render("show", { post });
});

// Edit form
app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).send("Post not found");
  res.render("edit", { post });
});

// Update (POST for simplicity)
app.post("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { username = "", content = "" } = req.body;
  const idx = posts.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).send("Post not found");
  posts[idx].username = username.trim();
  posts[idx].content = content.trim();
  res.redirect("/posts");
});

// Delete (POST for simplicity)
app.post("/posts/:id/delete", (req, res) => {
  const { id } = req.params;
  posts = posts.filter(p => p.id !== id);
  res.redirect("/posts");
});

app.get("/", (_req, res) => res.redirect("/posts"));

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
