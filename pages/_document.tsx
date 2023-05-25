import * as React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

import { IconContext } from "@react-icons/all-files";

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Html lang="mn">
          <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="favicon.png"
            />

            <meta name="description" content="My school v0.1-dev" />
            <meta name="og:title" content="My school" />
            <meta name="og:url" content="https://anhgerel.ml" />
            <meta name="og:description" content="My school v0.1-dev" />
            <meta name="og:image" content="/favicon.ico" />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/icons/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/icons/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/icons/favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <link
              rel="mask-icon"
              href="/icons/safari-pinned-tab.svg"
              color="#8aadf4"
            />

            <meta name="msapplication-TileColor" content="#8aadf4" />
            <meta name="theme-color" content="#8aadf4" />

            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=G-T408WXEH6V`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){window.dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-T408WXEH6V');
						if(/MSIE \\d|Trident.*rv:/.test(navigator.userAgent)) {
							window.location = 'microsoft-edge:' + window.location;
							setTimeout(function() {
								window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
							}, 1);
						}
						`,
              }}
            />
            <noscript>This website requires JavaScript to be enabled.</noscript>
          </Head>

          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Inlined version of noflash.js from use-dark-mode */
;(function () {
  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'
  var classNameLight = 'light-mode'
  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }
  var preferDarkQuery = '(prefers-color-scheme: dark)'
  var mql = window.matchMedia(preferDarkQuery)
  var supportsColorSchemeQuery = mql.media === preferDarkQuery
  var localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }
  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})();
`,
              }}
            />
            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    );
  }
}
