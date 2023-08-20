import User from '../models/user.js'

export const findMatches = async (req, res) => {
    const userId = '64e16c3999f5efe04c12b38a'; //getUserId(req)
    const { possibleMatches } = await User.findById(userId).populate('possibleMatches'); 

    await res.status(200).json(possibleMatches);
    
}