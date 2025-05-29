const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // ✅ removed useCreateIndex
const connection = mongoose.connection; // ✅ fixed typo
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exerxises", exercisesRouter); // ✅ fixed typo in route path
app.use("/users", usersRouter); // ✅ fixed typo in route path
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`); // ✅ fixed small typo in message
});
