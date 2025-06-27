-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Activity" AS ENUM ('Basal', 'Sedentario', 'Leve', 'Moderado', 'Ativo', 'Muito_Ativo', 'Extremamente_Ativo');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "RegimeGeral" AS ENUM ('Manter', 'Leve', 'Moderado', 'Extremo');

-- CreateEnum
CREATE TYPE "Estrategia" AS ENUM ('Fixo', 'ZigZag_UM', 'ZigZag_DOIS');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "aniversario" TIMESTAMP(3) NOT NULL,
    "peso_init" DOUBLE PRECISION NOT NULL,
    "peso_now" DOUBLE PRECISION NOT NULL,
    "peso_target" DOUBLE PRECISION,
    "altura" DOUBLE PRECISION NOT NULL,
    "atividade" "Activity" NOT NULL,
    "token" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "regime_calorico" "RegimeGeral" NOT NULL DEFAULT 'Leve',
    "estrategia" "Estrategia" NOT NULL DEFAULT 'Fixo',
    "gender" "Gender" NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PesoHistorico" (
    "id" SERIAL NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PesoHistorico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "alimento" TEXT,
    "porcao" TEXT,
    "calorias_kcal" DOUBLE PRECISION,
    "carboidratos_g" DOUBLE PRECISION,
    "proteinas_g" DOUBLE PRECISION,
    "gorduras_g" DOUBLE PRECISION,
    "fibras_g" DOUBLE PRECISION,
    "sodio_mg" DOUBLE PRECISION,
    "mealId" INTEGER NOT NULL,
    "fonte" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" SERIAL NOT NULL,
    "porcao" TEXT NOT NULL,
    "calorias_kcal" DOUBLE PRECISION,
    "carboidratos_g" DOUBLE PRECISION,
    "proteinas_g" DOUBLE PRECISION,
    "gorduras_g" DOUBLE PRECISION,
    "fibras_g" DOUBLE PRECISION,
    "sodio_mg" DOUBLE PRECISION,
    "dailyId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Daily" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "calorias_total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Daily_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invitations" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invitations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_token_key" ON "User"("token");

-- CreateIndex
CREATE UNIQUE INDEX "PesoHistorico_id_key" ON "PesoHistorico"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_key" ON "Item"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Meal_id_key" ON "Meal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Daily_id_key" ON "Daily"("id");

-- CreateIndex
CREATE UNIQUE INDEX "invitations_email_key" ON "invitations"("email");

-- CreateIndex
CREATE UNIQUE INDEX "invitations_token_key" ON "invitations"("token");

-- AddForeignKey
ALTER TABLE "PesoHistorico" ADD CONSTRAINT "PesoHistorico_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_dailyId_fkey" FOREIGN KEY ("dailyId") REFERENCES "Daily"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Daily" ADD CONSTRAINT "Daily_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
