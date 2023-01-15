import { component$, useSignal, useStore } from '@builder.io/qwik';
import { renderHTML, parse } from "@djot/djot";

export default component$(() => {
  const data = useStore({
    html: '',
  });

  const previewRef = useSignal<HTMLDivElement>();
  return (
    <div>

      <div>
        <span style='color: red'>Enter Djot Markup:</span>
      </div>
        <textarea onInput$={(e) => {
          if (previewRef.value) {
            data.html = renderHTML( parse( (e.target as HTMLTextAreaElement).value ), {} );
            previewRef.value.innerHTML = data.html;
          }
        }} 
        />

      <div>
        <span style='color: red'>Rendered Djot Markup:</span>
      </div>
      <div ref={previewRef} />

      <div>
        <span style='color: red'>Raw HTML:</span>
      </div>
      <div>
        {data.html}
      </div>
    </div>
  );
});


/* This from a hint in discord

import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const previewRef = useSignal<HTMLDivElement>();
  return <div>
    <textarea onInput$={(e) => {
      if (previewRef.value) {
        previewRef.value.innerHTML = (e.target as HTMLTextAreaElement).value
      }
    }} />
    <div ref={previewRef} />
  </div>;
});
*/