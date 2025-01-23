-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "work" TEXT NOT NULL,
    "story" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "otherImages" TEXT[],
    "workFlow" TEXT NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);
