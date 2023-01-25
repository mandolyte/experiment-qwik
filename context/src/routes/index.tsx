import {
  component$,
  useStore,
  useContextProvider,
} from '@builder.io/qwik';

import type {stateIF} from '../components/common';
import MyContext from '../components/common';

import { Child } from './child';


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