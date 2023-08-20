import User from '../models/user.js'

export const findMatches = async (req, res) => {
    const userId = '64e184fcdfa18b5e4be9f98e'; //getUserId(req)
    const { possibleMatches } = await User.findById(userId).populate('possibleMatches'); 

    await res.status(200).json(possibleMatches);
    
}