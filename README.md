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

### Modifications to Play

**Change #1**
Added `yarn.lock` to `.gitignore` since I don't care about it for just this learning experience.

**Change #2**
1. Under routes, added new folder named `markdown`.
2. Added index.mdx
3. Then stopped and started (needed??)
4. In address bar, enter `http://localhost:5173/markdown/`

Note how the root "layout.tsx" (`src/routes/layout.tsx`) wraps or "lays out" the content in `index.mdx`.

