import mongoose from "mongoose";
// import { User } from "./models/user.js";
import User from "./models/user.js";
import * as dotenv from "dotenv";
import faker from "faker";
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

const availableLanguages = ['JavaScript', 'Python', 'Java', 'C#', 'C++', 'Ruby', 'Swift', 'Kotlin', 
'PHP', 'TypeScript', 'Go', 'Rust', 'Dart', 'Scala', 'Haskell', 'Lua', 'Perl', 'Objective-C', 'R', 'SQL'];
const numLanguages = 20;
const availableUniversities = ['University of Waterloo', 'University of Toronto', 
'McMaster University', 'Western University', 'Toronto Metropolitan University', 'Queens University'];
const availableInterests = ['Artificial Intelligence (AI)', 'Virtual Reality (VR)', 'Augmented Reality (AR)', 
'Machine Learning', 'Data Science', 'Web Development', 'Mobile App Development', 'Blockchain', 
'Internet of Things (IoT)', 'Cybersecurity', 'Game Development', 'Environmental Sustainability', 'Social Impact', 
'Healthcare Innovation', 'Smart Cities', 'Robotics', '3D Printing', 'Bioinformatics', 'Space Exploration', 'Ethical Hacking'];
const numInterests = 20;
const numFakeUsers = 20;

const generateFakeUser = () => {
  const user = new User({
    username: faker.internet.userName(),
    fullName: faker.name.findName(),
    pronouns: faker.random.arrayElement(['he/him', 'she/her', 'they/them']),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar(),
    university: faker.random.arrayElement(availableUniversities),
    languagesHave: faker.random.arrayElements(availableLanguages, { min: 1, max: numLanguages}),
    languagesWant: faker.random.arrayElements(availableLanguages, { min: 1, max: numLanguages}),
    interests: faker.random.arrayElements(availableInterests, {min: 1, max: numInterests}),
    location: faker.datatype.number(100000),

    possibleMatchesCount: 0,
    otherUsers: [],
    myLikesCount: 0,
    myLikes: [],
    likedMeCount: 0,
    likedMe: [],
    matchesCount: 0,
    matches: []
  });

  return user;
};

const populateRelationships = (users) => {
  for (let user of users) {
    const remainingUsers = users.filter(u => u !== user);

    const likedByCount = faker.datatype.number({ min: 0, max: numFakeUsers - 1 });
    user.likedMe = {
      count: likedByCount,
      users: faker.random.arrayElements(remainingUsers, likedByCount).map(u => u._id)
    };

    const likesCount = faker.datatype.number({ min: 0, max: numFakeUsers - 1 });
    user.myLikes = faker.random.arrayElements(remainingUsers, likesCount).map(u => u._id);

    user.matches = user.myLikes.filter(likedUserId =>
      user.likedMe.includes(likedUserId)
    )

    user.otherUsers = remainingUsers.map(u => u._id);
  }
};

const fakeUsers = Array.from({ length: numFakeUsers }, generateFakeUser);

populateRelationships(fakeUsers);

const seedDB = async () => {
  await User.deleteMany({});
  try {
      await User.insertMany(fakeUsers);
      console.log('Fake users inserted successfully.');
  } catch (error) {
      console.error('Error inserting fake users:', error);
  }
};

seedDB();
