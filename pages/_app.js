// import App from 'next/app'

import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition="0.3"
        stopDelayMs="200"
        height="3"
        options={{ easing: 'ease', speed: 500 }}

      />
      <Component {...pageProps} />
    </>
  );
}
