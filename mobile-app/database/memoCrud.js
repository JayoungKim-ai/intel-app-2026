import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

// DB 열기
const db = SQLite.openDatabaseSync("memo.db");

// 테이블 생성
export const createTable = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS memos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      useid TEXT,
      title TEXT NOT NULL,
      content TEXT,
      createdAt TEXT DEFAULT (date('now'))
    )
  `);
};

// Create
export const insertMemo = (useid, title, content) => {
  const result = db.runSync(
    "INSERT INTO memos (useid, title, content) VALUES (?, ?, ?)",
    [useid, title, content],
  );
  return result.lastInsertRowId;
};

// Read All
export const getAllMemos = () => {
  return db.getAllSync("SELECT * FROM memos ORDER BY id DESC");
};

// Read One
export const getMemoById = (id) => {
  return db.getFirstSync("SELECT * FROM memos WHERE id = ?", [id]);
};

// Update
export const updateMemo = (id, title, content) => {
  const result = db.runSync(
    "UPDATE memos SET title = ?, content = ? WHERE id = ?",
    [title, content, id],
  );
  return result.changes;
};

// Delete
export const deleteMemo = (id) => {
  const result = db.runSync("DELETE FROM memos WHERE id = ?", [id]);
  return result.changes;
};

// 초기 데이터 삽입 (최초 1회용)
export const insertInitialData = (memoData) => {
  const count = db.getFirstSync("SELECT COUNT(*) as cnt FROM memos");
  if (count.cnt === 0) {
    memoData.forEach((item) => {
      db.runSync(
        "INSERT INTO memos (useid, title, content, createdAt) VALUES (?, ?, ?, ?)",
        [item.useid, item.title, item.content, item.createdAt],
      );
    });
  }
};

// DB 파일 강제 삭제
export const resetDB = async () => {
  const dbPath = FileSystem.documentDirectory + "SQLite/memo.db";
  await FileSystem.deleteAsync(dbPath, { idempotent: true });
  console.log("DB 삭제 완료 - 앱 재시작 필요");
  //리셋 후에는 반드시 앱 reload가 필요
};
