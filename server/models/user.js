// models / userModel.js
import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const userSchema = new Schema({
  // about me
  username: {
    type: String,
    required: true
  },
  fullName: {
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
  image: {
    type: String,
    required: true
  }, // url
  university: {
    type: String,
    required: true
  },

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
    type: Number,
    required: true
  }, // jessica can change this later

  otherUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  myLikes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  likedMe: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  matches: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
});

export const User = mongoose.model("User", userSchema);