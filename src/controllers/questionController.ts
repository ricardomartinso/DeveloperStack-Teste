import { Request, Response } from "express";
import {
  createQuestionService,
  getQuestionById,
} from "../services/questionService";
import { answer, CreateAnswer } from "../types/answerTypes";
import { CreateQuestion } from "../types/questionTypes";
import { createAnswerService } from "../services/answerService";
import { getAll } from "../repositories/questionRepository";

export async function createQuestion(req: Request, res: Response) {
  const question: CreateQuestion = req.body;

  createQuestionService(question);

  return res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const answer: answer = req.body;
  const { id } = req.params;

  await createAnswerService(answer, id);

  return res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await getAll();

  return res.status(200).send({
    questions: questions,
  });
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const question = await getQuestionById(Number(id));

  return res.status(201).send(question);
}
