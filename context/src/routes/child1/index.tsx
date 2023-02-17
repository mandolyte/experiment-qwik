import {
    component$,
    useContext,
  } from '@builder.io/qwik';

import type {stateIF} from '../../components/common';
import {GlobalContext} from '../../components/common';
  
  export const Child1 = component$(() => {
  // Get reference to state using MyContext
  const state = useContext<stateIF>(GlobalContext);
  return (
    <>
      <h1>{state.text}</h1>
      <h1>{state.count}</h1>
      <button onClick$={() => state.count++}>Increment</button>
      <button onClick$={() => state.text = "text from child1"}>Set text to be from child1</button>
    </>
  );
});

export default Child1;