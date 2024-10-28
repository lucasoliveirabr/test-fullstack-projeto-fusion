-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "powersAndAbilities" TEXT NOT NULL,
    "origin" VARCHAR(100) NOT NULL,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);
