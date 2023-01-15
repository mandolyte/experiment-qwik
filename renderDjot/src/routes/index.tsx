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
        <h1 style='color: red'>Enter Djot Markup:</h1>
      </div>
        <textarea onInput$={(e) => {
          if (previewRef.value) {
            data.html = renderHTML( parse( (e.target as HTMLTextAreaElement).value ), {} );
            previewRef.value.innerHTML = data.html;
          }
        }} 
        />

      <div>
        <h1 style='color: red'>Rendered Djot Markup:</h1>
      </div>
      <div ref={previewRef} />

      <div>
        <h1 style='color: red'>Raw HTML:</h1>
      </div>
      <div>
        {data.html}
      </div>
    </div>
  );
});

/* here is a sample Djot text for a bit of scripture to test with.
   the styling attributes were added to the global.css file.

JUDE{.book}

Greeting{.heading}

1{.verse} 
Jude, a servant[^1]{.footnote} of Jesus Christ and brother of James,
[^a]{.reference}To those who are called, 
[^b]{.reference}beloved in God the Father and
[^c]{.reference}kept
for[^2]{.footnote} Jesus Christ:

2{.verse} May 
[^d]{.reference}mercy, 
[^e]{.reference}peace, and love be multiplied to you.

[^1]: For the contextual rendering of the Greek word _doulos_ see Preface.

[^a]: Romans 1:7; 1 Corinthians 1:24

[^b]: 1 Thessalonians 1:4; 2 Thessalonians 2:13

[^c]: John 17:11; John 17:15; 1 Thessalonians 5:23

[^2]: Or _by_

[^d]: 2 John 3

[^e]: 1 Peter 1:2; 2 Peter 1:2
*/