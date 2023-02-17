import { component$, useClientEffect$, noSerialize } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

export const useProperNamesDb = loader$( async () => {
  // fetch a db file
  console.log("Enter loader$")
  let dbfile =new ArrayBuffer(8);
  // https://github.com/mandolyte/learnathon-2023/raw/main/properNames.db
  await fetch('https://github.com/mandolyte/learnathon-2023/raw/main/properNames.db')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.arrayBuffer();
  })
  .then((myBuffer) => {
    console.log("myBuffer size is:", myBuffer.byteLength)
    dbfile = myBuffer
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  const sizeOfDb = dbfile.byteLength;
  return {
    size: sizeOfDb,
    db: noSerialize(dbfile)
  }
});

export default component$(() => {

  // Retrieve a reactive signal of the loader data
  const signal = useProperNamesDb(); // Signal<{time: number}>

  useClientEffect$(({track}) => {
    console.log("in useClientEffect$")
    track(signal);
    const dbworker = new Worker(new URL("./dbWorker", import.meta.url));
    console.log("dbworker:", dbworker)
    // sqlite3.capi.sqlite3_js_vfs_create_file("opfs", "my-db.db", arrayBuffer);
    // const db = new sqlite3.oo1.OpfsDb("my-db.db");

  });



  return (
    <div>
      Database size: {signal.value.size}
    </div>
  );
});
