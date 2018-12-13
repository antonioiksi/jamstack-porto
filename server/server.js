import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import typeDefs from './src/typeDefs';
import resolvers from './src/resolvers';

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});

const PORT = 4466;
const app = express();

server.applyMiddleware({ 
  app, 
  cors: { origin: 'http://localhost:3000' } 
}); // app is from an existing express app

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)