import User from '../models/user.js'

export const findMatches = async (req, res) => {
    const userId = '64e10d62ae335f52164b0c9f'; //getUserId(req)
    const { possibleMatches } = await User.findById(userId).populate('possibleMatches');
    await console.log("In findMatches:", possibleMatches);

  

    await res.status(200).json(possibleMatches);
    
}