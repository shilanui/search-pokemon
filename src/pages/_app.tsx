import "@/styles/globals.scss";
import "@/styles/loading.scss";
import "@/styles/pagination.scss";
import "@/styles/card.scss";
import type { AppProps } from "next/app";
import client from "../lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
