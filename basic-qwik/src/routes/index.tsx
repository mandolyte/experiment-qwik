import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import MuiButton from '~/components/add-button/MuiButton';
// import { Link } from '@builder.io/qwik-city';
import AddButton from '~/components/add-button/AddButton';

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>
      <button onClick$={() => console.log("clicked it!")}>Click Me!</button>
      <br/>
      <MuiButton onClick$={ () => console.log("MUI Clicked")}>MUI Button</MuiButton>
      <br/>
      <AddButton onClick$={ () => console.log("Add Clicked")}>Add Button</AddButton>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
