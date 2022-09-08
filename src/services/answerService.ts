// TODO

import { insert } from "../repositories/answerRepository";
import { answer, CreateAnswer } from "../types/answerTypes";
import { getById } from "../repositories/questionRepository";

export async function createAnswerService(answer: answer, questionId: string) {
  const question = await getById(Number(questionId));

  if (!question) throw { type: "not_found" };

  const questionAnswer: CreateAnswer = {
    questionId: Number(questionId),
    answer: answer.answer,
    answeredBy: answer.answeredBy,
  };

  await insert(questionAnswer);
}
