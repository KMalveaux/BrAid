const getSurveyResults = async (Model, username) => {
  try {
    const storedResults = await Model.findOne({ where: { username } });

    if (!storedResults) {
      console.log("Survey results for the requested username not found!");
      return null;
    } else {
      console.log("Survey results found:", storedResults);
      userStoredAnswers = {
        ans1: storedResults.answer1,
        ans2: storedResults.answer2,
        ans3: storedResults.answer3,
        ans4: storedResults.answer4,
        ans5: storedResults.answer5,
        ans6: storedResults.answer6,
        ans7: storedResults.answer7,
        ans8: storedResults.answer8,
        ans9: storedResults.answer9,
        ans10: storedResults.answer10,
        ans11: storedResults.answer11,
        ans12: storedResults.answer12,
        ans13: storedResults.answer13,
        ans14: storedResults.answer14,
        ans15: storedResults.answer15,
        ans16: storedResults.answer16,
        ans17: storedResults.answer17,
        ans18: storedResults.answer18,
        ans19: storedResults.answer19,
      };
      console.log(await userStoredAnswers);
      return userStoredAnswers;
    }
  } catch (error) {
    console.error("Error retrieving survey results:", error);
    throw new Error("Error retrieving survey results");
  }
};

module.exports = getSurveyResults;
