import User from '../models/user.js'

export const findMatches = async (req, res) => {
    const userId = '64e17bc7d63b207481af13d7'; //getUserId(req)
    const { possibleMatches } = await User.findById(userId).populate('possibleMatches'); 

    await res.status(200).json(possibleMatches);
    
}