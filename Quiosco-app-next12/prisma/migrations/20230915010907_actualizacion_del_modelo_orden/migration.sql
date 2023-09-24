/*
  Warnings:

  - You are about to alter the column `total` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `total` DOUBLE NOT NULL;
