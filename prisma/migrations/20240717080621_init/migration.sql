-- CreateTable
CREATE TABLE "DonerInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "DonerInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScholarInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "neetRoll" TEXT NOT NULL,
    "neetScore" INTEGER NOT NULL,
    "section" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ScholarInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DonerInfo_userId_key" ON "DonerInfo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ScholarInfo_neetRoll_key" ON "ScholarInfo"("neetRoll");

-- CreateIndex
CREATE UNIQUE INDEX "ScholarInfo_userId_key" ON "ScholarInfo"("userId");

-- CreateIndex
CREATE INDEX "ScholarInfo_neetRoll_idx" ON "ScholarInfo"("neetRoll");

-- AddForeignKey
ALTER TABLE "DonerInfo" ADD CONSTRAINT "DonerInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScholarInfo" ADD CONSTRAINT "ScholarInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
