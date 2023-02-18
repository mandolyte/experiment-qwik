import { component$, useBrowserVisibleTask$ } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

export const useProperNamesDb = loader$( async () => {
  // fetch a db file
  console.log("Enter loader$")
  let dbfile: ArrayBuffer;
  let sizeOfDb = 0;
  let start = Date.now();
  let end = Date.now();
  let elapsed = 0;
  // https://github.com/mandolyte/learnathon-2023/raw/main/properNames.db
  await fetch('https://github.com/mandolyte/learnathon-2023/raw/main/properNames.db')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.arrayBuffer();
  })
  .then((myBuffer) => {
    end = Date.now();
    elapsed = end - start;
    console.log("myBuffer size is:", myBuffer.byteLength)
    dbfile = myBuffer
    sizeOfDb = dbfile.byteLength;
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  return {
    size: sizeOfDb,
    duration: elapsed,
  }
});

export default component$(() => {

  // Retrieve a reactive signal of the loader data
  const signal = useProperNamesDb(); // Signal<{time: number}>

  useBrowserVisibleTask$(({track}) => {
    track(signal);
    console.log("useBrowserVisibleTask$(), signal.value=", signal.value)
  });



  return (
    <div>
      Database size: {signal.value.size} in {signal.value.duration / 1000} seconds
    </div>
  );
});
