// models / userModel.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema
import bcrypt from 'bcrypt'
import ExpressError from '../utils/expressError.js';

const ImageSchema = new Schema({
  url: String,
  filename: String,
});

ImageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_200");
});

const userSchema = new Schema({
  // about me
  fullName: String,
  pronouns: String,
  bio: String,
  images: String,
  university: String,

  // matching info
  mySkills: [String],
  wantedSkills: [String],
  interests: [String],
  location: [String],

  // socials
  publicSocials: Boolean,
  email: String,
  instagram: String,
  discord: String,
  website: String,
  resume: String,

  // relationships
  possibleMatchesCount: Number,
  possibleMatches: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  ],
  myLikesCount: Number,
  myLikes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  likedMeCount: Number,
  likedMe: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  matchesCount: Number,
  matches: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});


const User = mongoose.model('User', userSchema);

export default User;