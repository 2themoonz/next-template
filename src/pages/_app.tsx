import type { AppProps } from "next/app";
import { wrapper } from "@/redux/store";
import "@/styles/index.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default wrapper.withRedux(App);
