-- Drop existing tables if they exist
DROP TABLE IF EXISTS "_UserFavorites";
DROP TABLE IF EXISTS "_UserWatchlist";
DROP TABLE IF EXISTS "Like";
DROP TABLE IF EXISTS "Comment";
DROP TABLE IF EXISTS "Post";
DROP TABLE IF EXISTS "Follow";
DROP TABLE IF EXISTS "Equipment";
DROP TABLE IF EXISTS "People";
DROP TABLE IF EXISTS "Movie";
DROP TABLE IF EXISTS "User";

-- Create UserRole enum if it doesn't exist
DO $$ BEGIN
    CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'MODERATOR');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Recreate User table
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "name" TEXT NOT NULL,
    "password" TEXT,
    "googleId" TEXT UNIQUE,
    "avatar" TEXT,
    "bio" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create Movie table
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tmdbId" TEXT NOT NULL UNIQUE,
    "title" TEXT NOT NULL,
    "posterPath" TEXT,
    "overview" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create Post table
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "movieId" TEXT,
    "images" TEXT[],
    "rating" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE,
    FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE SET NULL
);

-- Create Comment table
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE,
    FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE
);

-- Create Like table
CREATE TABLE "Like" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "authorId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE,
    FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE,
    UNIQUE("authorId", "postId")
);

-- Create Follow table
CREATE TABLE "Follow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE CASCADE,
    FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE CASCADE,
    UNIQUE("followerId", "followingId")
);

-- Create Equipment table
CREATE TABLE "Equipment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT
);

-- Create People table
CREATE TABLE "People" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create junction tables for Movie-User relations
CREATE TABLE "_UserWatchlist" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    PRIMARY KEY ("A", "B"),
    FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE
);

CREATE TABLE "_UserFavorites" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    PRIMARY KEY ("A", "B"),
    FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE
);

-- Create indexes
CREATE INDEX "_UserWatchlist_B_index" ON "_UserWatchlist"("B");
CREATE INDEX "_UserFavorites_B_index" ON "_UserFavorites"("B");
