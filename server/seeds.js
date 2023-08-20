import mongoose from "mongoose";
import User from "./models/user.js";
import * as dotenv from "dotenv";
import faker from "faker";
import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';
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

const avatarNames = ['Oreo', 'Ginger', 'Garfield', 'Boots', 'Buster', 'Charlie', 'Misty', 'Miss kitty', 
'Lola', 'Coco', 'Jasper', 'Missy', 'Pumpkin', 'Peanut', 'Lucy', 'Mittens', 'Nala', 'Simon', 'Shadow', 'Tiger'];
const numAvatars = 20;
const availableSkills = ['Front-end', 'Back-end', 'Middleware', 'Hardware', 'Project Management', 
  'APIs', 'Data Analysis', 'UX', 'Design', 'Pitching'];
const numSkills = 10;
const availableUniversities = ['University of Waterloo', 'University of Toronto', 
'McMaster University', 'Western University', 'Toronto Metropolitan University', 'Queens University'];
const availableInterests = ['Artificial Intelligence (AI)', 'Virtual Reality (VR)', 'Augmented Reality (AR)', 
'Machine Learning', 'Data Science', 'Web Development', 'Mobile App Development', 'Blockchain', 
'Internet of Things (IoT)', 'Cybersecurity', 'Game Development', 'Environmental Sustainability', 'Social Impact', 
'Healthcare Innovation', 'Smart Cities', 'Robotics', '3D Printing', 'Bioinformatics', 'Space Exploration', 'Ethical Hacking'];
const availableCities = ['Waterloo', 'Toronto', 'Hamilton', 'London', 'Mississauga', 'Burlington', 'Oakville', 'Markham', 'Ottawa', 'Windsor', 'Kitchener', 'Cambridge', 'Guelph', 'St. Catharines', 'Niagara Falls', 'Barrie', 'Richmond Hill', 'Vaughan'];
const numInterests = 20;
const numFakeUsers = 20;

const generateFakeUser = () => {
  const user = new User({
    fullName: faker.name.findName(),
    pronouns: faker.random.arrayElement(['he/him', 'she/her', 'they/them']),
    bio: faker.lorem.sentence(),
    image: ``,
    university: faker.random.arrayElement(availableUniversities),
    mySkills: faker.random.arrayElements(availableSkills, { min: 1, max: numSkills}),
    wantedSkills: faker.random.arrayElements(availableSkills, { min: 1, max: numSkills}),
    interests: faker.random.arrayElements(availableInterests, {min: 1, max: numInterests}),
    location: faker.random.arrayElement(availableCities),

    publicSocials: faker.random.arrayElement([true, false]),
    email: faker.internet.email(),
    instagram: faker.internet.userName(),
    discord: faker.internet.userName(),
    website: faker.internet.url(),
    resume: faker.image.avatar(),

    possibleMatchesCount: 0,
    possibleMatches: [],
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

    user.likedByCount = faker.datatype.number({ min: 0, max: numFakeUsers - 1 });
    user.likedMe = faker.random.arrayElements(remainingUsers, user.likedByCount).map(u => u._id);

    user.myLikesCount = faker.datatype.number({ min: 0, max: numFakeUsers - 1 });
    user.myLikes = faker.random.arrayElements(remainingUsers, user.myLikesCount).map(u => u._id);

    user.matches = []
    for (let likedUserId of user.myLikes) {
      if (user.likedMe.includes(likedUserId)) {
        user.matches.push(likedUserId);
        remainingUsers.splice(remainingUsers.findIndex(u => u._id === likedUserId), 1);
      }
    }
    user.matchesCount = user.matches.length;

    user.possibleMatches = remainingUsers
    user.possibleMatchesCount = remainingUsers.length
  }
};

const populateAvatars = (users) => {
  for (let i = 0; i < numAvatars; i++) {
    users[i].image = `https://api.dicebear.com/6.x/bottts/svg?seed=${avatarNames[i]}`;
  }
}

const fakeUsers = Array.from({ length: numFakeUsers }, generateFakeUser);

populateRelationships(fakeUsers);
populateAvatars(fakeUsers);

console.log(fakeUsers);

const seedDB = async () => {
  await User.deleteMany({});
  try {
      await User.insertMany(fakeUsers);
      console.log('Fake users inserted successfully.');
  } catch (error) {
      console.error('Error inserting fake users:', error);
  }
};

//seedDB();
