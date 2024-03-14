-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_firstName_key" ON "User"("firstName");
