import sqlite3 from "./sqlite3.js";

await sqlite3().then((sqlite3) => {
  const capi = sqlite3.capi /*C-style API*/
//   const oo = sqlite3.oo1; /*high-level OO API*/
  console.log(
    "sqlite3 version",
    capi.sqlite3_libversion(),
    capi.sqlite3_sourceid()
  );
});

/*

sqlite3.capi.sqlite3_js_vfs_create_file("opfs", "my-db.db", arrayBuffer);
const db = new sqlite3.oo1.OpfsDb("my-db.db");
*/