import {
  component$,
  useStore,
  useContext,
  useContextProvider,
  createContext,
} from '@builder.io/qwik';

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

export const Child = component$(() => {
  // Get reference to state using MyContext
  const state = useContext<stateIF>(MyContext);
  return (
    <>
      <button onClick$={() => state.count++}>Increment</button>
    </>
  );
});