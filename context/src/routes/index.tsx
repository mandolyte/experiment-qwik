import {
  component$,
  useContext,

  // useClientEffect$,
  // noSerialize,
  // useSignal,
} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';


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
      <div>
        <Link href="/child1/">
          Child 1 
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


export default Parent;