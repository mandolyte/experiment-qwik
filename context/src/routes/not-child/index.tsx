import {
    component$,
    useContext,
  } from '@builder.io/qwik';

import type {stateIF} from '../../components/common';
import MyContext from '../../components/common';
  
export const NotChild = component$(() => {
  // Get reference to state using MyContext
  const state = useContext<stateIF>(MyContext);
  return (
    <>
      <h1>Value of count is: {state.count}</h1>
    </>
  );
});

export default NotChild;