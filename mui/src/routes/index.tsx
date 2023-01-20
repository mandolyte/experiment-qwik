import { component$, useStore } from '@builder.io/qwik';
import { MUIButton } from '~/integrations/react/mui';

export default component$(() => {
  return (
    <>
      <h1>Hello World!</h1>
      I am a static component, there is no reason to ever download me to the client.
      <br />
      <MUIButton host:onClick$={() => alert('Hello')}>greet!</MUIButton>
      <hr />
      <Counter />
    </>
  );
});

export const Counter = component$(() => {
  const store = useStore({ count: 0 });
  return (
    <>
      I am a dynamic component. Qwik will download me only when it is time to re-render me after the
      user clicks on the <tt>+1</tt> button.
      <br />
      Current count: {store.count}
      <br />
      <MUIButton host:onClick$={() => store.count++}>
        +1
      </MUIButton>
    </>
  );
});


/* code graveyard

      <MUIButton variant={variant.value} host:onClick$={() => alert('click')}>
        Slider is {count.value}
      </MUIButton>
*/