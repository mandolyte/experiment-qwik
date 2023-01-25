import {
  component$,
  useStore,
  useContext,
  useContextProvider,
  createContext,
} from '@builder.io/qwik';

// Create a new context descriptor
export const MyContext = createContext('my-context');

export const Parent = component$(() => {
  // Create some reactive storage
  const state = useStore({
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

export const Child = component$(() => {
  // Get reference to state using MyContext
  const state = useContext(MyContext);
  return (
    <>
      <button onClick$={() => state.count++}>Increment</button>
    </>
  );
});