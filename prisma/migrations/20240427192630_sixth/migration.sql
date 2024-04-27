-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "officialEmail" TEXT,
    "emailConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "gender" TEXT,
    "role" TEXT,
    "designation" TEXT,
    "staffId" TEXT NOT NULL,
    "profileImage" TEXT
);
INSERT INTO "new_User" ("designation", "email", "emailConfirmed", "gender", "id", "name", "officialEmail", "password", "phoneNumber", "profileImage", "role", "staffId", "surname") SELECT "designation", "email", "emailConfirmed", "gender", "id", "name", "officialEmail", "password", "phoneNumber", "profileImage", "role", "staffId", "surname" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_officialEmail_key" ON "User"("officialEmail");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
