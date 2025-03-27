import express from "express";
import fs from "fs";

const app = express();
const port = 4000;

let lastId = 3;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Write your code here//
let posts = [];
const postFileName = "posts.json"
fs.readFile("posts.json", "utf8", (err, data) => {
  // error handling
  if (err) {
    console.error("Error reading file:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
  posts = JSON.parse(data);
})

//CHALLENGE 1: GET All posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id
app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const foundPost = posts.find((post) => post.id === parseInt(id));
  if (!foundPost) return res.status(404).json({ message: "Post not found" });
  res.json(foundPost);
})


//CHALLENGE 3: POST a new post
app.post("/posts", (req, res) => {
  const { title, content, author } = req.body;
  //new post details
  const newPost = {
    id: posts.length + 1,
    title: title,
    content: content,
    author: author,
    date: new Date(),
  }
  posts.push(newPost);

  updateFile(postFileName);
  res.json(newPost);
})

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const id = req.params.id;
  const foundPost = posts.find((post) => post.id === parseInt(id));
  if (!foundPost) return res.status(404).json({ message: "Post not found" });

  const { title, content, author } = req.body;
  if (title) foundPost.title = title;
  if (content) foundPost.content = content;
  if (author) foundPost.author = author;
  updateFile(postFileName);
  res.json(foundPost);
})
//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));
  
  posts.splice(postIndex, 1);
  updateFile(postFileName);
  res.json({ message: "Post deleted" });
})


app.listen(port, () => {
  console.log(`API is running at ${port}`);
});

// functions 
function updateFile(file) {
  fs.writeFile(file, JSON.stringify(posts, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  })
}