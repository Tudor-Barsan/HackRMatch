import User from "../models/user.js";
import userSchema from "../schemas.js";
import ExpressError from "../utils/expressError.js";

export const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

const jaccardSimilarity = (setA, setB) => {
  const intersection = new Set([...setA]).filter(x => match.setB.has(x));
  const union = new Set([...setA, ...setB]);
  return intersection.size / union.size
}

export const orderPossibleMatches = (possibleMatches, mySkills, wantedSkills, interests, location) => {
  for (match in possibleMatches) {
    const mySkillsScore = jaccardSimilarity(mySkills, match.wantedSkills)
    const matchSkillsScore = jaccardSimilarity(match.mySkills, wantedSkills)
    const interestsScore = jaccardSimilarity(interests, match.interests)
    const locationScore = location == match.location ? 1 : 0 // TODO: getDistance(location, match.location)
    match.score = mySkillsScore + matchSkillsScore + 0.8 * interestsScore + 0.5 * locationScore
  }
  
  possibleMatches.sort((a, b) => b.totalScore - a.totalScore);
  
  return possibleMatches;
}
