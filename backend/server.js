const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const port = 8085;

// --- --- --- --- --- --- --- --- --- ---

const  MONGODB_URL = "mongodb://localhost:27017/moviesdb";

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

app.get("/api" , (req,res)=>{res.json({
  "message" : "Ready to recieve API requests"
})});
app.use("/api/movies", require('./routes/movie.routes'));
app.use("/api/genres", require('./routes/genre.routes'));
app.use("/api/artists", require('./routes/artist.routes'));
app.use("/api/auth", require('./routes/user.routes'));

mongoose.connect(MONGODB_URL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
  return;
});

db.once("open", () => {
  console.log("MongoDB connected successfully");
});

// --- --- --- --- --- --- --- --- --- ---

app.listen(port , () => {
  console.log("Server live on port" + port);
});

