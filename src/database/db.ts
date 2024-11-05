import Database from "better-sqlite3";
import { BlossomSQLite } from "blossom-server-sdk/metadata/sqlite";
import { mkdirp } from "mkdirp";
import { dirname } from "node:path";

await mkdirp(dirname("data/database.sqlite"));

export const db = new Database("data/database.sqlite");
export const metadata = new BlossomSQLite(db);

db.prepare(
  `CREATE TABLE IF NOT EXISTS tokens (
		id TEXT(64) PRIMARY KEY,
		type TEXT NOT NULL,
		pubkey TEXT(64) NOT NULL,
		expiration INTEGER NOT NULL,
		event TEXT NOT NULL
	)`,
).run();

db.prepare(
  `CREATE TABLE IF NOT EXISTS accounts (
		pubkey TEXT(64) PRIMARY KEY,
		payment TEXT(16),
		upload INTEGER DEFAULT 0,
		storage INTEGER DEFAULT 0,
		download INTEGER DEFAULT 0
	)`,
).run();

export default db;
