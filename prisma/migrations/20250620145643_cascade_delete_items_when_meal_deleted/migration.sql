-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "alimento" TEXT,
    "porcao" TEXT,
    "calorias_kcal" REAL,
    "carboidratos_g" REAL,
    "proteinas_g" REAL,
    "gorduras_g" REAL,
    "fibras_g" REAL,
    "sodio_mg" REAL,
    "mealId" INTEGER NOT NULL,
    "fonte" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Item_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("alimento", "calorias_kcal", "carboidratos_g", "created_at", "fibras_g", "fonte", "gorduras_g", "id", "mealId", "porcao", "proteinas_g", "sodio_mg", "updated_at") SELECT "alimento", "calorias_kcal", "carboidratos_g", "created_at", "fibras_g", "fonte", "gorduras_g", "id", "mealId", "porcao", "proteinas_g", "sodio_mg", "updated_at" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE UNIQUE INDEX "Item_id_key" ON "Item"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
