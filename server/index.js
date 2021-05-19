const { ApolloServer, PubSub } = require("apollo-server");
const gql = require("graphql-tag");
const typeDefs = require("./src/graphql/typeDefs");
const resolvers = require("./src/graphql/resolvers");

const colors = require("colors");
const connectDB = require("./src/db/mongoose");

// const graphQLHttp = require("express-graphql");
connectDB();

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

// app.use(
//   "/graphql",
//   graphQLHttp({
//     schema,
//     graphiql: true,
//   })
// );

const PORT = process.env.PORT;
server.listen(PORT).then((res) => {
  console.log(
    `Server is running at ${res.url} in ${process.env.ENV}`.bold.yellow
  );
});
