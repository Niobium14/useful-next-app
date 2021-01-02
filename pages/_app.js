import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextNprogress
        color="white"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
