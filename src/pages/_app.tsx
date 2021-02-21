import "@/style/_app.css"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="theme-color" content="#292828" />
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
