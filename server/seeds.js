import mongoose from "mongoose";
import { User } from "./models/user.js";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("database connected");
});


const users = [
  {
    username: "user1",
    fullName: "User One",
    pronouns: "he/him",
    bio: "Student at University One",
    image: "https://example.com/user1.jpg",
    university: "University One",
    languagesHave: ["English"],
    languagesWant: ["Spanish"],
    interests: ["Reading", "Music"],
    location: 12345,
    otherUsers: [],
    myLikes: [],
    likedMe: [],
    matches: [],
  },
  {
    username: "user2",
    fullName: "User Two",
    pronouns: "she/her",
    bio: "Teacher at University Two",
    image: "https://example.com/user2.jpg",
    university: "University Two",
    languagesHave: ["English", "French"],
    languagesWant: ["Italian"],
    interests: ["Teaching", "Traveling"],
    location: 67890,
    otherUsers: [],
    myLikes: [],
    likedMe: [],
    matches: [],
  },
  // More users with variations
  {
    username: "user3",
    fullName: "User Three",
    pronouns: "they/them",
    bio: "Engineer at Tech Three",
    image: "https://example.com/user3.jpg",
    university: "University Three",
    languagesHave: ["German"],
    languagesWant: ["English"],
    interests: ["Engineering", "Dancing"],
    location: 23456,
    otherUsers: [],
    myLikes: [],
    likedMe: [],
    matches: [],
  },
  // Repeat for users 4 through 10
];


// const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await User.deleteMany({});
    for (let i = 0; i < users.length; i++) {
        const user = new User(users[i]);
        await user.save();
    }
};

seedDB();
