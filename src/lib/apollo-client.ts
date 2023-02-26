import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    // uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default client;