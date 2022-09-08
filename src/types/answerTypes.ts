import { answers } from "@prisma/client";

export type CreateAnswer = Omit<answers, "id" | "questionId">;
