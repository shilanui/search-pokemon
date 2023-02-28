import "@/styles/globals.scss";
import "@/styles/loading.scss";
import "@/styles/card.scss";
import "@/styles/table.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "../store/store";
import client from "../lib/apollo-client";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
