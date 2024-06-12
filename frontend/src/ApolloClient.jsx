// src/ApolloClient.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
})

// eslint-disable-next-line react/prop-types
const ApolloClientProvider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export { ApolloClientProvider as default, client }
