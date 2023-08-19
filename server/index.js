import express from "express";
import * as dotenv from "dotenv";

import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const startServer = async () => {

    try {
        await connectDB(process.env.MONGODB_URL);
    }
    catch (err) {
        console.log(err);
    }

    app.listen(8080, () => console.log("Server is running on port 8080"));
    };

startServer();