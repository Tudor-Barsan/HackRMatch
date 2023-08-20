import User from '../models/user.js'

export const findMatches = async (req, res) => {
    const userId = '64e1a4aca22e0d2170d3b8e5'; //getUserId(req)
    const { possibleMatches } = await User.findById(userId).populate('possibleMatches'); 

    await res.status(200).json(possibleMatches);
    
}