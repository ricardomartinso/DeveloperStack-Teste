import { answers } from "@prisma/client";

export type CreateAnswer = Omit<answers, "id">;

export type answer = Omit<answers, "id" | "questionId">;
