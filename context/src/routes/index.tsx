import {
  component$,
  useStore,
  useContextProvider,
  createContext,
} from '@builder.io/qwik';

import { Child } from './child'

interface stateIF {
  count: number;
}

// Create a new context descriptor
export const MyContext = createContext<stateIF>('my-context');

export const Parent = component$(() => {
  // Create some reactive storage
  const state = useStore<stateIF>({
    count: 0,
  });

  // Assign value (state) to the context (MyContext)
  useContextProvider(MyContext, state);
  return (
    <>
      <Child />
      <div>Count: {state.count}</div>
    </>
  );
});


export default Parent;