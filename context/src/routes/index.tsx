import {
  component$,
  useContext,
  // useClientEffect$,
  // noSerialize,
  // useSignal,
} from '@builder.io/qwik';

import type {stateIF} from '../components/common';
import GlobalContext from '../components/common';


export function logger(arg:number): void {
  console.log("Value of count is:",arg)
}

export const Parent = component$(() => {
  // Create some reactive storage
  // const state = useStore<stateIF>({
  //   count: 0,
  //   text: "some text for useStore() init"
  // });

  // Assign value (state) to the context (MyContext)
  const state = useContext<stateIF>(GlobalContext);
  return (
    <>
      <div>Count: {state.count}</div>
      <div>Text: {state.text}</div>
    </>
  );
});


export default Parent;