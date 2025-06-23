-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Daily" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "calorias_total" REAL NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Daily_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Daily" ("created_at", "data", "id", "updated_at", "userId") SELECT "created_at", "data", "id", "updated_at", "userId" FROM "Daily";
DROP TABLE "Daily";
ALTER TABLE "new_Daily" RENAME TO "Daily";
CREATE UNIQUE INDEX "Daily_id_key" ON "Daily"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
