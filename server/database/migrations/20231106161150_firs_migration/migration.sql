-- CreateTable
CREATE TABLE "Password" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Config" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstEntry" BOOLEAN NOT NULL DEFAULT true,
    "systemPassword" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Password_name_key" ON "Password"("name");

-- CreateIndex
CREATE INDEX "Password_name_idx" ON "Password"("name");
