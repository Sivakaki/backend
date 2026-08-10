// require('dotenv').config();
// require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
// import dns from "dns";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed !!! ", err);
  });




















//first approach for connecting database to project
/*
import express from "express";
const app = express();

async () => {
  try {
    await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`);
    app.on("Error", (error) => {
      console.log("Error :", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

*/
