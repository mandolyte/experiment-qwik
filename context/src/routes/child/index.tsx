import {
    component$,
    useContext,
    createContext,
  } from '@builder.io/qwik';

  interface stateIF {
    count: number;
  }
  
  // Create a new context descriptor
  export const MyContext = createContext<stateIF>('my-context');

  
  export const Child = component$(() => {
  // Get reference to state using MyContext
  const state = useContext<stateIF>(MyContext);
  return (
    <>
      <button onClick$={() => state.count++}>Increment</button>
    </>
  );
});

export default Child;