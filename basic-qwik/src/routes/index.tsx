import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';
// import AddButton from '~/components/add-button/AddButton';
// import MuiButton from '~/components/add-button/MuiButton';

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>
      <button onClick$={() => console.log("clicked it!")}>Click Me!</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
