const express = require("express");
const mongoose = require("mongoose"); // simplified import
const user = require("./Routes/User");

const app = express();
const port = 5000;

app.use(express.json());
app.use("/user", user);

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Connect to MongoDB first
mongoose
  .connect(
    "mongodb+srv://elakkiyasudha2k:212004@cluster0.3ggdwpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Connected");

    // Start the server only after DB is connected
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
