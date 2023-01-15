# Experimenting and Learning about the Qwik Framework

This README captures some notes about each of the folders.

This repo had some older examples, which I have simply removed and started all over.

## qwik-app (basic starter)

```
yarn create qwik
... elided ...
✔ Where would you like to create your new project? … ./qwik-app

✔ Select a starter › Basic App (QwikCity)

✔ Would you like to install yarn dependencies? … yes

✔ Installing yarn dependencies...


🦄  Success!  Project created in qwik-app directory

🐰 Next steps:
   cd qwik-app
   yarn start

🔌 Integrations? Add Netlify, Cloudflare, Tailwind...
   yarn qwik add

📚 Relevant docs:
   https://qwik.builder.io/docs/getting-started/

💬 Questions? Start the conversation at:
   https://qwik.builder.io/chat
   https://twitter.com/QwikDev

📺 Presentations, Podcasts and Videos:
   https://qwik.builder.io/media/

Done in 32.83s.
```

Since the dependencies were installed as part of the setup, I only need to enter `yarn start` to run it.

It opens browser at `http://localhost:5173/`

Note that is uses "vite":
```

  VITE v4.0.3  ready in 557 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

**Change #1**
Added `yarn.lock` to `.gitignore` since I don't care about it for just this learning experience.

**Change #2**
1. Under routes, added new folder named `markdown`.
2. Added index.mdx
3. Then stopped and started (needed??)
4. In address bar, enter `http://localhost:5173/markdown/`

Note how the root "layout.tsx" (`src/routes/layout.tsx`) wraps or "lays out" the content in `index.mdx`.

## state-changes

This time I used the documentation starter app.

```
yarn create qwik
🐰 Let's create a Qwik app 🐇   v0.16.2

✔ Where would you like to create your new project? … ./state-changes

✔ Select a starter › Documentation site (QwikCity)

✔ Would you like to install yarn dependencies? … yes

✔ Installing yarn dependencies...


🦄  Success!  Project created in state-changes directory

🐰 Next steps:
   cd state-changes
   yarn start

🔌 Integrations? Add Netlify, Cloudflare, Tailwind...
   yarn qwik add

📚 Relevant docs:
   https://qwik.builder.io/docs/getting-started/

💬 Questions? Start the conversation at:
   https://qwik.builder.io/chat
   https://twitter.com/QwikDev

📺 Presentations, Podcasts and Videos:
   https://qwik.builder.io/media/

Done in 34.72s.
$ 
```

This example has some nice things to learn in it. In order to create the "state-changes" example, I took the solution here:
https://qwik.builder.io/tutorial/introduction/listeners/
(be sure to click "show me" button if the event listener code isn't there).

And then:
- created `src/routes/state-changes` folder
- added the aforementioned code to the file `index.tsx` in that folder
- then in browser, go to `http://localhost:5173/state-changes/`
- to see the listener in action, just start typing into the username text field

## min-qwik-city

In the "min-qwik-city" folder, I copied the code from "state-changes". I then overwrote the main index.js file with by state changes "tsx" file. Next I began removing everything else. In the end, this is what was left.

So I can use this folder to begin a new project. Of course, if you want a header and footer, you start adding back in the content needed from the state-changes folder that I started with.

To run: `yarn && yarn start`

## renderDjot

1. copied min-qwik-city
2. renamed to renderDjot
3. 

# To Do

- Add a header back in to min setup (but keep it separate)
- New app that shows two text areas, one for input and one for output
  - The input window is where you enter djot markdown
  - The output window renders the input as html
- Try to make MUI work (again)
- A fetch data example, perhaps with a uw-editor as an "output window" to view USFM data
