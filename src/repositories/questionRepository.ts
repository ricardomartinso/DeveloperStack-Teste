// TODO

import { prisma } from "../config/database";
import { CreateQuestion } from "../types/questionTypes";

export async function insert(createQuestion: CreateQuestion) {
  await prisma.questions.create({
    data: createQuestion,
  });
}
export async function getAll() {
  const questions = await prisma.questions.findMany();

  return questions;
}
export async function getById(questionId: number) {
  const question = await prisma.questions.findUnique({
    where: { id: questionId },
  });

  return question;
}
