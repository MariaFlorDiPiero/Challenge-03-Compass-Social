-- CreateTable
CREATE TABLE "Comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "comment" TEXT NOT NULL
);
