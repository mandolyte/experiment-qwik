# Experimenting and Learning about the Qwik Framework

This README captures some notes about each of the folders.

This repo had some older examples, which I have simply removed and started all over.

Useful to create a new project for demo or sharing: https://qwik.new/

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
3. to run, `yarn && yarn start`
4. in the text box, enter djot markup
5. The markup will be rendered as you type in html
6. Also the raw html generated is also shown.

A hint from QC Discord [here](https://discord.com/channels/842438759945601056/1064032314247626822)

## mui

1. copied min-qwik-city
2. renamed to mui
3. Test first by running `yarn && yarn start`
4. See react/mui example [here](https://github.com/almilo/qwik-headless-ui-react/blob/main/src/integrations/react/mui.tsx)
5. replaced main page at `/src/routes/index.tsx` with playground content [here](https://qwik.builder.io/playground#version=0.16.2&buildMode=development&entryStrategy=hook&files=JTVCJTdCJTIycGF0aCUyMiUzQSUyMiUyRmFwcC50c3glMjIlMkMlMjJjb2RlJTIyJTNBJTIyaW1wb3J0JTIwJTdCJTIwY29tcG9uZW50JTI0JTJDJTIwdXNlU3RvcmUlMjAlN0QlMjBmcm9tJTIwJyU0MGJ1aWxkZXIuaW8lMkZxd2lrJyUzQiU1Q24lNUNuZXhwb3J0JTIwZGVmYXVsdCUyMGNvbXBvbmVudCUyNCgoKSUyMCUzRCUzRSUyMCU3QiU1Q24lMjAlMjByZXR1cm4lMjAoJTVDbiUyMCUyMCUyMCUyMCUzQyUzRSU1Q24lMjAlMjAlMjAlMjAlMjAlMjAlM0NoMSUzRUhlbGxvJTIwV29ybGQhJTNDJTJGaDElM0UlNUNuJTIwJTIwJTIwJTIwJTIwJTIwSSUyMGFtJTIwYSUyMHN0YXRpYyUyMGNvbXBvbmVudCUyQyUyMHRoZXJlJTIwaXMlMjBubyUyMHJlYXNvbiUyMHRvJTIwZXZlciUyMGRvd25sb2FkJTIwbWUlMjB0byUyMHRoZSUyMGNsaWVudC4lNUNuJTIwJTIwJTIwJTIwJTIwJTIwJTNDYnIlMjAlMkYlM0UlNUNuJTIwJTIwJTIwJTIwJTIwJTIwJTNDYnV0dG9uJTIwb25DbGljayUyNCUzRCU3QigpJTIwJTNEJTNFJTIwYWxlcnQoJ0hlbGxvJyklN0QlM0VncmVldCElM0MlMkZidXR0b24lM0UlNUNuJTIwJTIwJTIwJTIwJTIwJTIwJTNDaHIlMjAlMkYlM0UlNUNuJTIwJTIwJTIwJTIwJTIwJTIwJTNDQ291bnRlciUyMCUyRiUzRSU1Q24lMjAlMjAlMjAlMjAlM0MlMkYlM0UlNUNuJTIwJTIwKSUzQiU1Q24lN0QpJTNCJTVDbiU1Q25leHBvcnQlMjBjb25zdCUyMENvdW50ZXIlMjAlM0QlMjBjb21wb25lbnQlMjQoKCklMjAlM0QlM0UlMjAlN0IlNUNuJTIwJTIwY29uc3QlMjBzdG9yZSUyMCUzRCUyMHVzZVN0b3JlKCU3QiUyMGNvdW50JTNBJTIwMCUyMCU3RCklM0IlNUNuJTIwJTIwcmV0dXJuJTIwKCU1Q24lMjAlMjAlMjAlMjAlM0MlM0UlNUNuJTIwJTIwJTIwJTIwJTIwJTIwSSUyMGFtJTIwYSUyMGR5bmFtaWMlMjBjb21wb25lbnQuJTIwUXdpayUyMHdpbGwlMjBkb3dubG9hZCUyMG1lJTIwb25seSUyMHdoZW4lMjBpdCUyMGlzJTIwdGltZSUyMHRvJTIwcmUtcmVuZGVyJTIwbWUlMjBhZnRlciUyMHRoZSU1Q24lMjAlMjAlMjAlMjAlMjAlMjB1c2VyJTIwY2xpY2tzJTIwb24lMjB0aGUlMjAlM0N0dCUzRSUyQjElM0MlMkZ0dCUzRSUyMGJ1dHRvbi4lNUNuJTIwJTIwJTIwJTIwJTIwJTIwJTNDYnIlMjAlMkYlM0UlNUNuJTIwJTIwJTIwJTIwJTIwJTIwQ3VycmVudCUyMGNvdW50JTNBJTIwJTdCc3RvcmUuY291bnQlN0QlNUNuJTIwJTIwJTIwJTIwJTIwJTIwJTNDYnIlMjAlMkYlM0UlNUNuJTIwJTIwJTIwJTIwJTIwJTIwJTNDYnV0dG9uJTIwb25DbGljayUyNCUzRCU3QigpJTIwJTNEJTNFJTIwc3RvcmUuY291bnQlMkIlMkIlN0QlM0UlMkIxJTNDJTJGYnV0dG9uJTNFJTVDbiUyMCUyMCUyMCUyMCUzQyUyRiUzRSU1Q24lMjAlMjApJTNCJTVDbiU3RCklM0IlNUNuJTIyJTdEJTJDJTdCJTIycGF0aCUyMiUzQSUyMiUyRnJvb3QudHN4JTIyJTJDJTIyY29kZSUyMiUzQSUyMiU1Q25pbXBvcnQlMjBBcHAlMjBmcm9tJTIwJy4lMkZhcHAnJTNCJTVDbiU1Q25leHBvcnQlMjBjb25zdCUyMFJvb3QlMjAlM0QlMjAoKSUyMCUzRCUzRSUyMCU3QiU1Q24lMjAlMjByZXR1cm4lMjAoJTVDbiUyMCUyMCUyMCUyMCUzQ2h0bWwlM0UlNUNuJTIwJTIwJTIwJTIwJTIwJTIwJTNDaGVhZCUzRSU1Q24lMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0N0aXRsZSUzRVR1dG9yaWFsJTNDJTJGdGl0bGUlM0UlNUNuJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGaGVhZCUzRSU1Q24lMjAlMjAlMjAlMjAlMjAlMjAlM0Nib2R5JTNFJTVDbiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ0FwcCUyMCUyRiUzRSU1Q24lMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZib2R5JTNFJTVDbiUyMCUyMCUyMCUyMCUzQyUyRmh0bWwlM0UlNUNuJTIwJTIwKSUzQiU1Q24lN0QlM0IlNUNuJTIyJTJDJTIyaGlkZGVuJTIyJTNBdHJ1ZSU3RCUyQyU3QiUyMnBhdGglMjIlM0ElMjIlMkZlbnRyeS5zZXJ2ZXIudHN4JTIyJTJDJTIyY29kZSUyMiUzQSUyMiU1Q25pbXBvcnQlMjAlN0IlMjByZW5kZXJUb1N0cmluZyUyQyUyMFJlbmRlck9wdGlvbnMlMjAlN0QlMjBmcm9tJTIwJyU0MGJ1aWxkZXIuaW8lMkZxd2lrJTJGc2VydmVyJyUzQiU1Q25pbXBvcnQlMjAlN0IlMjBSb290JTIwJTdEJTIwZnJvbSUyMCcuJTJGcm9vdCclM0IlNUNuJTVDbmV4cG9ydCUyMGRlZmF1bHQlMjBmdW5jdGlvbiUyMChvcHRzJTNBJTIwUmVuZGVyT3B0aW9ucyklMjAlN0IlNUNuJTIwJTIwcmV0dXJuJTIwcmVuZGVyVG9TdHJpbmcoJTNDUm9vdCUyMCUyRiUzRSUyQyUyMG9wdHMpJTNCJTVDbiU3RCU1Q24lMjIlMkMlMjJoaWRkZW4lMjIlM0F0cnVlJTdEJTVE)
6. Test again to be sure it works 
7. Added `/src/integrations/react/mui.tsx` and some things `package.json` for MUI's sake
8. Ran `yarn install`
9. Tested again to be sure nothing broke (but haven't tried the mui button yet)
10. Replace button with MUIButton exported from `mui.tsx`
11. On first try, complained of missing react (must be a peer dependency)
12. Now the buttons are showing, but clicking doesn't work
13. The react example had a setup like this:
```js
      <MUIButton variant={variant.value} host:onClick$={() => alert('click')}>
        Slider is {count.value}
      </MUIButton>
```
14. So modified the click actions as per example (adding "host:" as namespace to `onClick$`)
15. Now all works!!


## Context

This folder explores the context API. Steps:

1. copied folder min-qwik-city and renamed to `context`
2. replaced `/src/routes/index.tsx` with example from [here](https://qwik.builder.io/docs/components/context/)
3. test first by running `yarn && yarn start`
4. Had to add an interface for the object (this is a ts file!)
5. Had to add "export default Parent;" at the end of the file
6. Now works.
7. Next I split out the parts used in both parent and child into `src/components/commont.ts`
8. Required a bit of work to make it work, such as adding a default export, tweaking the imports, etc.

Notes:
- The Parent component is the ancestor of the Child component
- And is where the "useContextProvider" is used.
- Very important: qwik Context **cannot** be used to pass functions around. In some of the react apps I have worked with we pass state and actions in the context, where actions are functions to set the state. So the functions needed to update the state will need to be made available in a different fashion. Here is the error:
```
Code(3): Only primitive and object literals can be serialized
/home/cecil/Projects/github.com/mandolyte/experiment-qwik/context/src/routes/index.tsx:18:16
16 |  export const Parent = component$(() => {
17 |    // Create some reactive storage
18 |    const state = useStore<stateIF>({
   |              ^
19 |      count: 0,
20 |      increment: addOne,
```
- Also, I created a route that was **not** a descendent of "Parent" (see `not-child`) and it fails as expected:
```
Code(13): Actual value for useContext() can not be found, make sure some ancestor component has set a value using useContextProvider()
/home/cecil/Projects/github.com/mandolyte/experiment-qwik/context/src/routes/not-child/index.tsx:11:16
9  |  export const NotChild = component$(() => {
10 |    // Get reference to state using MyContext
11 |    const state = useContext<stateIF>(MyContext);
   |                 ^
12 |    return (
13 |      <>
```
- Finally added a "global" context example, but creating it in `root.tsx`. See route "global-child".

## Loader

This folder will explore using the new loader$ feature. The docs are [here](https://qwik.builder.io/qwikcity/loader/#loader). To quote:
> Loaders allow data to flow from the server to the Qwik Components. For this reason, Qwik Loaders should be always understood in the context of loading data in the server that is later consumed by a Qwik Component... 

1. created the "loader" folder by copying the "min-qwik-city"
2. used `yarn && yarn start` to make sure it works before making any changes
3. 



# To Do

- Add a header back in to min setup (but keep it separate)
- New app that shows two text areas, one for input and one for output
  - The input window is where you enter djot markdown
  - The output window renders the input as html
- Try to make MUI work (again)
- A fetch data example, perhaps with a uw-editor as an "output window" to view USFM data
