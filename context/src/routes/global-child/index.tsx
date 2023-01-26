import {
    component$,
    useContext,
  } from '@builder.io/qwik';

import {GlobalContext} from '../../components/common';
  
export const GlobalChild = component$(() => {
  const tstate = useContext(GlobalContext);

  return (
    <>
      <h1>{tstate.text}</h1>
    </>
  );
});

export default GlobalChild;