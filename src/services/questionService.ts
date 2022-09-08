import { getById, insert } from "../repositories/questionRepository";
import { CreateQuestion } from "../types/questionTypes";
import { getAllAnswersFromQuestionId as getAnswersFromQuestionId } from "../repositories/answerRepository";
// TODO
export async function createQuestionService(question: CreateQuestion) {
  await insert(question);
}

export async function getQuestionById(questionId: number) {
  const question = await getById(questionId);

  if (!question) throw { type: "not_found" };

  const answers = await getAnswersFromQuestionId(questionId);

  return {
    id: question.id,
    askedBy: question.askedBy,
    question: question.question,
    answers,
  };
}
