import {
    component$,
    useContext,
} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

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
      <div>
        <Link href="/">
            Home
        </Link>
      </div>
      <div>
        <Link href="/child2/">
            Child 2
        </Link>
      </div>
    </>
  );
});

export default Child1;