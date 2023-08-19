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
  fullName: { // display name
    type: String,
    required: true
  },
  pronouns: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  images: [ImageSchema],
  university: {
    type: String,
    required: true
  },

  // matching info
  languagesHave: {
    type: [String],
    required: true
  },
  languagesWant: {
    type: [String],
    required: true
  },
  interests: {
    type: [String],
    required: true
  },
  location: {
    type: String,
    required: true
  }, 

  // socials
  publicSocials: Boolean,
  email: String,
  instagram: String,
  discord: String,
  website: String,
  resume: ImageSchema,

  // relationships
  possibleMatchesCount: Number,
  otherUsers: [
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