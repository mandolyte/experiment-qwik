import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { qwikify$ } from "@builder.io/qwik-react";
import { Button } from "@mui/material";

export const MuiButton = qwikify$(() => {
  return <Button variant="outlined">MUI Button </Button>
})

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>
      <button onClick$={() => console.log("clicked it!")}>Click Me!</button>
      <br/>
      <div onClick$={ () => console.log("out click")}><MuiButton >MUI Button</MuiButton></div>
      <br/>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};



