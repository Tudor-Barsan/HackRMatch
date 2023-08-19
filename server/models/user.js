// models / userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
  // about me
    username: String,
    fullName: String,
    pronouns: String,
    bio: String,
    image: String, // url
    university: String,

    languagesHave: [String],
    languagesWant: [String],
    interests: [String],
    location: Number, // jessica can change this later

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
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;