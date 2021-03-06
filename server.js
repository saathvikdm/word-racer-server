const express = require("express");
var cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// require("dotenv").config();

app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.get("/", (req, res) => res.send("MERN Word Racer API"));

const scoreRouter = require("./routes/scores");
app.use("/scores", scoreRouter);

app.listen(process.env.PORT || 5000, () => console.log("Server Started"));
