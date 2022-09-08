-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "askedBy" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "answeredBy" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
