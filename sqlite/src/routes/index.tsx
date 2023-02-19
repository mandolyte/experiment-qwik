import { component$, useBrowserVisibleTask$ } from '@builder.io/qwik';
import { sqlite3InitModule } from './jswasm/sqlite3'

export default component$(() => {
  // sqlite3InitModule && sqlite3InitModule().then(function(sqlite3: any){
  //   // The module is now loaded and the sqlite3 namespace
  //   // object was passed to this function.
  //   console.log("sqlite3:", sqlite3);
  // });

  useBrowserVisibleTask$(() => {
    sqlite3InitModule &&sqlite3InitModule().then(function(sqlite3: any){
      // The module is now loaded and the sqlite3 namespace
      // object was passed to this function.
      console.log("sqlite3:", sqlite3);
    });
  });

  return (
    <div>
      <h1>Start of the Sqlite Experiment</h1>
    </div>
  );
});
