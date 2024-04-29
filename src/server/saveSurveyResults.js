const saveSurveyResults = async (Model, AccName, answersArray) => {
  try {
    const result = Model.build({
      username: AccName,
      answer1: answersArray[0],
      answer2: answersArray[1],
      answer3: answersArray[2],
      answer4: answersArray[3],
      answer5: answersArray[4],
      answer6: answersArray[5],
      answer7: answersArray[6],
      answer8: answersArray[7],
      answer9: answersArray[8],
      answer10: answersArray[9],
      answer11: answersArray[10],
      answer12: answersArray[11],
      answer13: answersArray[12],
      answer14: answersArray[13],
      answer15: answersArray[14],
      answer16: answersArray[15],
      answer17: answersArray[16],
      answer18: answersArray[17],
      answer19: answersArray[18],
    });
    await result.save();
    console.log("Survey results saved successfully!");
    return 1; // "Survey results saved successfully!";
  } catch (error) {
    console.error("Error saving survey results:", error);
    throw new Error("Error saving survey results");
  }
};

module.exports = saveSurveyResults;
