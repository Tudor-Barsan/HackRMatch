// models / userModel.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema
import bcrypt from 'bcrypt'

const ImageSchema = new Schema({
  url: String,
  filename: String,
});

ImageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_200");
});

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
  images: [ImageSchema],
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
  }, // daniel can change this later

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
  password: {
    type: "String",
    required: true
  }
});





userSchema.statics.signup = async function(username, password) {

  const exists = await this.findOne({ username })

  if (exists) {
    throw Error('Username already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ username, password: hash })

  return user
}

userSchema.statics.login = async function(username, password) {
  if (!email || !password) {
    throw new Error('fill in fields')
  }

  const user = await this.findOne({ username })

  if (!user) {
    throw Error('User not found')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

const User = mongoose.model('User', userSchema);

export default User;