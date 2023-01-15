import { component$, useStore, useTask$ } from '@builder.io/qwik';
import { renderHTML, parse } from "@djot/djot";

export default component$(() => {
  const data = useStore({
    djot: '_hi_',
    html: '',
  });

  useTask$(({ track }) => {
    const value = track(() => data.djot);
    data.html = renderHTML( parse(value), {} );
  });
  // const target = document.getElementById("target");
  // target.innerHTML = renderHTML( parse(data.djot), {} );
 
  return (
    <div>
      <span>
        enter Djot markup:
        <input
          value={data.djot}
          onInput$={(ev) => (data.djot = (ev.target as HTMLInputElement).value)}
        />
      </span>
      <div>
        { data.html }
      </div>
      <div id="target">

      </div>
    </div>
  );
});
