-- Drop existing Equipment table if it exists
DROP TABLE IF EXISTS "Equipment";

-- Create Equipment table with correct structure
CREATE TABLE "Equipment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL,
    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- Create btree index
CREATE UNIQUE INDEX "Equipment_pkey" ON "Equipment" USING BTREE ("id");
