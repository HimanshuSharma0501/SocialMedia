const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//using middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// importing routes jo use honge
const post = require("./routes/Post");
const user = require("./routes/user");

//using routes
//post se aaye route se pehle /api/v1 lagana padega
// uske baad post ka route lagake tab ham wo function use kr skte hai jo controller me defined h
app.use("/api/v1", post);
app.use("/api/v1", user);
module.exports = app;
