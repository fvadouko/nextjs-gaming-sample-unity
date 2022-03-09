import Header from "../components/Header/Header";
import ContextProvider from "../lib/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Header>
        <Component {...pageProps} />
      </Header>
    </ContextProvider>
  );
}

export default MyApp;
