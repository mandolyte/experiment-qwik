import { component$, useStore, 
  // createContext, 
  useContextProvider,
 } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import GlobalContext from './components/common';
import type { stateIF } from './components/common';

import './global.css';

export default component$(() => {
  /*
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  
  const tstate = useStore<stateIF>({
    count: 0,
    text: 'this is text from root.tsx',
  });
  // const GlobalContext = createContext('global-context');
  useContextProvider(GlobalContext, tstate);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
