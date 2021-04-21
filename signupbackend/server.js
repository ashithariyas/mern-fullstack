const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routeurl = require("./routes/Routes");
const cors = require("cors");

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("database connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", routeurl);
app.listen(4000, () => console.log("serve started running"));
