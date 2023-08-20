import User from '../models/user.js'

export const findMatches = async (req, res) => {
    const userId = '64e1707f7225d1733daeb6cf'; //getUserId(req)
    console.log(User.find())
    const { possibleMatches } = await User.findById(userId).populate('possibleMatches'); 

    await res.status(200).json(possibleMatches);
    
}