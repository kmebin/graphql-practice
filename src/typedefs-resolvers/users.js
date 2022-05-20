const { gql } = require("apollo-server");
const { userService } = require("../services");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    phone: String!
    email: String!
    age: Int
  }

  input CreateUserInput {
    name: String!
    phone: String!
    email: String!
    age: Int
  }

  input UpdateUserInput {
    name: String
    phone: String
    email: String
    age: Int
  }
`;

const resolvers = {
  Query: {
    users: async () => await userService.getUsers(),
    user: async (_, args) => await userService.getUserById(args._id),
  },
  Mutation: {
    createUser: async (_, args) => await userService.createUser(args),
    updateUser: async (_, args) => await userService.updateUser(args._id, args),
    deleteUser: async (_, args) => await userService.deleteUser(args._id),
  },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
