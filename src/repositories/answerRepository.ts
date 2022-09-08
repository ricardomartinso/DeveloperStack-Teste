// TODO// TODO

import { prisma } from "../config/database";
import { CreateAnswer } from "../types/answerTypes";

export async function insert(createAnswer: CreateAnswer) {
  await prisma.answers.create({
    data: createAnswer,
  });
}
export async function getAllAnswersFromQuestionId(questionId: number) {
  const answers = await prisma.answers.findMany({
    where: { questionId: questionId },
    select: {
      answer: true,
      answeredBy: true,
    },
  });

  return answers;
}
