-- CreateTable
CREATE TABLE "instance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pub_id" BLOB NOT NULL,
    "node_id" BLOB NOT NULL,
    "node_name" TEXT NOT NULL,
    "node_platform" INTEGER NOT NULL,
    "last_run" DATETIME NOT NULL,
    "date_created" DATETIME NOT NULL,
    "timestamp" BIGINT
);

-- CreateTable
CREATE TABLE "Statistics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_captured" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "java_version" TEXT NOT NULL DEFAULT '0',
    "operating_system" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "object" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pub_id" BLOB NOT NULL,
    "kind" INTEGER,
    "date_created" DATETIME,
    "date_accessed" DATETIME
);

-- CreateTable
CREATE TABLE "job" (
    "id" BLOB NOT NULL PRIMARY KEY,
    "name" TEXT,
    "action" TEXT,
    "status" INTEGER,
    "errors_text" TEXT,
    "data" BLOB,
    "metadata" BLOB,
    "parent_id" BLOB,
    "task_count" INTEGER,
    "completed_task_count" INTEGER,
    "estimated_completion" DATETIME,
    "date_created" DATETIME,
    "date_started" DATETIME,
    "date_completed" DATETIME,
    CONSTRAINT "job_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "job" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "preference" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "value" BLOB
);

-- CreateTable
CREATE TABLE "notification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "data" BLOB NOT NULL,
    "expires_at" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "instance_pub_id_key" ON "instance"("pub_id");

-- CreateIndex
CREATE UNIQUE INDEX "object_pub_id_key" ON "object"("pub_id");
