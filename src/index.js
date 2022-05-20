const { ApolloServer } = require("apollo-server");
const queries = require("./typedefs-resolvers/_queries");
const mutations = require("./typedefs-resolvers/_mutations");
const { users, blogs } = require("./typedefs-resolvers");
const dotenv = require("dotenv");
const connectDB = require("./loaders/db");

dotenv.config();
connectDB();

const typeDefs = [queries, mutations, users.typeDefs, blogs.typeDefs];
const resolvers = [users.resolvers, blogs.resolvers];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
