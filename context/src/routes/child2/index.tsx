import {
    component$,
    useContext,
  } from '@builder.io/qwik';

import {GlobalContext} from '../../components/common';
  
export const Child2 = component$(() => {
  const tstate = useContext(GlobalContext);

  return (
    <>
      <h1>{tstate.text}</h1>
      <h1>{tstate.count}</h1>
      <button onClick$={() => tstate.count++}>Increment</button>
      <button onClick$={() => tstate.text = "text from child2"}>Set text to be from child2</button>
      
    </>
  );
});

export default Child2;