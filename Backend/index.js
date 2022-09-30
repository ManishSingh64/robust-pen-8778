const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const authentication = require("./Middleware/Authentication");
const userController = require("./Controllers/user.routes");
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/", userController);
app.use("/project", authentication, projectController);

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
});
