import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from 'morgan';
import passport from 'passport';
import ImportStrategy from 'passport-google-oauth2';
const GoogleStrategy = ImportStrategy.Strategy;
import session from 'express-session';
import User from "./models/user.js";

import connectDB from "./mongodb/connect.js";
import userRoutes from './routes/userRoute.js'
import matchRoutes from './routes/matchRoute.js'

dotenv.config();

const app = express();
app.use(express.json());

app.use(session({
    secret: 'cookiekey',
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,PUT,PATCH,POST,DELETE",
  })
);

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

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.append('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    next();
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: 'http://localhost:8080/auth/google/callback',
    }, async (accessToken, refreshToken, profile, done) => {
        await User.findOne({googleId: profile.id}).then((currentUser) => {
            if (currentUser) {
                done(null, currentUser);
            } else {
                new User({
                    googleId: profile.id,
                    moreInfo: profile.email,
                }).save().then((newUser) => {
                    done(null, newUser);
                })
            }
        })
    })
);

passport.serializeUser((user, done) => {
    console.log('serializing')
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log('deserializing')
    User.findById(id).then((user) => {
        done(null, user);
    });
});

app.use('/auth', userRoutes)

app.use('/profile', matchRoutes)

app.get("/api", async (req, res) => {
    await console.log('here')
});