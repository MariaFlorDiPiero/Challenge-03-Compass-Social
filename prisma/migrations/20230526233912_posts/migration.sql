-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "post_date" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "likes" TEXT NOT NULL,
    "url_image" TEXT
);
