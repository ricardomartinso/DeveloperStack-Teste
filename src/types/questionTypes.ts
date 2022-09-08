import { questions } from "@prisma/client";

export type CreateQuestion = Omit<questions, "id">;
