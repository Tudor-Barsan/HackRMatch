import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from 'morgan';

import connectDB from "./mongodb/connect.js";
import userRoutes from './routes/userRoute.js'

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use(express.static('public'));
app.use(morgan('dev'));

app.get("/", async (req, res) => {
    await console.log('here')
    res.send(1);
});

app.use('/auth', userRoutes)

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