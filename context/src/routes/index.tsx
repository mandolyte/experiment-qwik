import {
  component$,
  useStore,
  useContextProvider,
  useClientEffect$,
  noSerialize,
  useSignal,
} from '@builder.io/qwik';

import type {stateIF} from '../components/common';
import MyContext from '../components/common';

import { Child } from './child';

export function logger(arg:number): void {
  console.log("Value of count is:",arg)
}

export const Parent = component$(() => {
  // Create some reactive storage
  const state = useStore<stateIF>({
    count: 0,
  });

  const fstate = useSignal<typeof logger|null>(null)

  useClientEffect$(() => {
    fstate.value = noSerialize(logger);
  });

  // Assign value (state) to the context (MyContext)
  useContextProvider(MyContext, state);
  return (
    <>
      <Child />
      <div>Count: {state.count}</div>
      <div><button onClick$={() => fstate.value(state.count)}>Log value to console</button></div>
    </>
  );
});


export default Parent;