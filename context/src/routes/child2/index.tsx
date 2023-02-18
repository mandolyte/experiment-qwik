import {
    component$,
    useContext,
} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import {GlobalContext} from '../../components/common';
  
export const Child2 = component$(() => {
  const tstate = useContext(GlobalContext);

  return (
    <>
      <h1>{tstate.text}</h1>
      <h1>{tstate.count}</h1>
      <button onClick$={() => tstate.count++}>Increment</button>
      <button onClick$={() => tstate.text = "text from child2"}>Set text to be from child2</button>
      
      <div>
        <Link href="/">
              Home
        </Link>
      </div>
      <div>
        <Link href="/child1/">
            Child 1
        </Link>
      </div>

    </>
  );
});

export default Child2;