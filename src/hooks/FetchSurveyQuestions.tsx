import { useEffect, useState } from "react";

import { surveyQuestions } from "../interfaces/JsonSurveyQuestions";

/**
 *  Fetches survey questions
 * @returns survey questions
 */
export const SurveyHook = () => {
  const [surveyQuestions, setsurveyQuestions] =
    useState<surveyQuestions | null>(null);

  // The survey questions are served through a JSON file the public folder and are thus accessed through this asynchronous fetch request

  useEffect(() => {
    const FetchSurveyQuestions = async () => {
      try {
        const response = await fetch("/surveyQuestions.json");
        const data = await response.json();
        setsurveyQuestions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    FetchSurveyQuestions();
  }, []);

  return surveyQuestions;
};
