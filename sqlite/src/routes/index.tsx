import { component$, useBrowserVisibleTask$, useSignal } from '@builder.io/qwik';
import sqlite3InitModule from "sqlite-wasm-esm";


export default component$(() => {
  const lines = useSignal("")
 
  useBrowserVisibleTask$(async () => {
    const log = (msg:string) => {
      lines.value = lines.value + msg
    }
      const sqliteDB = await sqlite3InitModule().then((sqlite3) => {
      //const opfsDb = new sqlite3.opfs.OpfsDb("my-db", "c");
      // or in-memory ...
      const db = new sqlite3.oo1.DB();
      console.log("sqlite3 instance created:",sqlite3);
      try {
        log("Create a table...\n");
        db.exec("CREATE TABLE IF NOT EXISTS t(a,b)");
        //Equivalent:
        db.exec({
          sql:"CREATE TABLE IF NOT EXISTS t(a,b)"
          // ... numerous other options ... 
        });
        // SQL can be either a string or a byte array
        // or an array of strings which get concatenated
        // together as-is (so be sure to end each statement
        // with a semicolon).
  
        log("Insert some data using exec()...\n");
        let i;
        for( i = 20; i <= 25; ++i ){
          db.exec({
            sql: "insert into t(a,b) values (?,?)",
            // bind by parameter index...
            bind: [i, i*2]
          });
          db.exec({
            sql: "insert into t(a,b) values ($a,$b)",
            // bind by parameter name...
            bind: {$a: i * 10, $b: i * 20}
          });
        }    
        log("Query data with exec() without a callback...\n");
        let resultRows = [];
        db.exec({
          sql: "select a, b from t order by a limit 3",
          rowMode: 'object',
          resultRows: resultRows
        });
        log("Result rows:\n"+JSON.stringify(resultRows,null,2));
      }catch(e){
        // if(e instanceof sqlite3.SQLite3Error){
        //   log("Got expected exception from db.transaction():",e.message);
        //   log("count(*) from t =",db.selectValue("select count(*) from t"));
        // }else{
        //   throw e;
        // }
        console.log("error is:", e)
        throw e
      }

  
      return db;
    });
    console.log("sqliteDB:", sqliteDB);
  });

  return (
    <div>
      <h1>Start of the Sqlite Experiment</h1>
      <pre>{lines.value}</pre>
    </div>
  );
});

/* code graveyard

export default component$(() => {

  useBrowserVisibleTask$(() => {
    const sqliteWorker = new Worker(new URL('./worker.js', import.meta.url));
    console.log("sqliteWorker:", sqliteWorker);
  });

  return (
    <div>
      <h1>Start of the Sqlite Experiment</h1>
    </div>
  );
});


*/