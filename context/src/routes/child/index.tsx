import {
    component$,
    useContext,
  } from '@builder.io/qwik';

import type {stateIF} from '../../components/common';
import MyContext from '../../components/common';
  
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