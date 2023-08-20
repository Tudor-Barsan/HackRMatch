import User from '../models/user.js'

export const findMatches = async (req, res) => {
    const userId = '64e1a32135e95418d5188446'; //getUserId(req)
    const { possibleMatches } = await User.findById(userId).populate('possibleMatches');
    await res.status(200).json(possibleMatches);

}