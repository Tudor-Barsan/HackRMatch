import User from '../models/user.js'
import jwt from 'jsonwebtoken'

const createToken = (_id) => {
    return jwt.sign({_id: _id}, "secretstring", { expiresIn: '1d' })
}

export const login = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.signup(username, password)
    
        const token = createToken(user._id)
    
        res.status(200).json({username, token})
      } catch (error) {
        res.status(400).json({error: error.message})
      }

    res.json({mssg: 'login user'})
}

export const signup = async (req, res) => {
  const {username, password} = req.body

  try {
    const user = await User.signup(username, password)

    const token = createToken(user._id)

    res.status(200).json({username, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}
