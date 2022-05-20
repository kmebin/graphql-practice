const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(_id: ID!, input: UpdateUserInput!): User!
    deleteUser(_id: ID!): User!
  }
`;

module.exports = typeDefs;
